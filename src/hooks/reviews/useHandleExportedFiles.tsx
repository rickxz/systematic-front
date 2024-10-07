import { useState } from "react";

const useHandleExportedFiles = () => {
    const [showInput, setShowInput] = useState(false);
    const [ referenceFiles, setReferenceFiles ] = useState<File[]>([]);

    function handleFile(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files: FileList;
        }

        console.log(target.files);
        setReferenceFiles( () => [...referenceFiles, target.files[0]] );
        setShowInput(false);
    }

    async function sendFilesToServer(files: File[]) {
        const formData = new FormData();
        formData.append('file', referenceFiles[0]);

        console.log(formData);
    } 
  
    return { handleFile, showInput, setShowInput, referenceFiles, setReferenceFiles, sendFilesToServer }
}

export default useHandleExportedFiles;