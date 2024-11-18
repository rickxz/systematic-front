import { SetStateAction, useState } from "react";
import axios from "../../interceptor/interceptor";
import useGetSession from "./useGetSession";
import { useToast } from "@chakra-ui/react";

interface Props {
    setSessions: React.Dispatch<SetStateAction<{
        id: string;
        systematicStudyd: string;
        userId: string;
        searchString: string;
        additionalInfo: string;
        timestamp: string;
        source: string;
        numberOfRelatedStudies: number;
    }[]>>;
    type: string;
}

const useHandleExportedFiles = ({ setSessions, type }: Props) => {
    const [showInput, setShowInput] = useState(false);
    const [referenceFiles, setReferenceFiles] = useState<File[]>([]);
    const [source, setSource] = useState("");
    const toast = useToast();

    const checkForDuplicateFile = (newFile: File) => {
        return referenceFiles.some(
            (file) => file.name === newFile.name && file.size === newFile.size);
    };

    function handleFile(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & { files: FileList };

        if (target.files.length > 0) {
            const newFile = target.files[0];

            const isDuplicate = checkForDuplicateFile(newFile);

            if (isDuplicate) {
                toast({
                    title: "Duplicate file",
                    description: "This file already exists!",
                    status: "warning",
                    duration: 4500,
                    isClosable: true,
                    position: 'top'
                  });
            } else {
                setReferenceFiles((prevFiles) => [...prevFiles, newFile]);
            }
        }

        setShowInput(false);
    }

    async function sendFilesToServer() {
        const formData = new FormData();
        const data = JSON.stringify({
            source,
            searchString: "Machine Learning",
            additionalInfo: "Referências para revisão",
        });
        const token = localStorage.getItem("accessToken");
        const options = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const id = localStorage.getItem("systematicReviewId");
        const url = `http://localhost:8080/api/v1/systematic-study/${id}/search-session`;

        if (referenceFiles.length > 0) {
            formData.append("file", referenceFiles[referenceFiles.length - 1]);
            formData.append("data", data);
        }

        try {
            await axios.post(url, formData, options);

            const searchSessions = await useGetSession(type);
            setSessions(searchSessions.data.searchSessions);
        } catch (err) {
            console.log(err);
        }
    }

    return {
        handleFile,
        showInput,
        setShowInput,
        referenceFiles,
        setReferenceFiles,
        sendFilesToServer,
        setSource,
    };
};

export default useHandleExportedFiles;
