import { useState } from "react";
import axios from "../../interceptor/interceptor";
import useGetSession from "./useGetSession";

const useHandleExportedFiles = () => {
    const [showInput, setShowInput] = useState(false);
    const [ referenceFiles, setReferenceFiles ] = useState<File[]>([]);
    const [source, setSource] = useState('');

    function handleFile(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files: FileList;
        }

        console.log(target.files);
        setReferenceFiles( () => [...referenceFiles, target.files[0]] );
        setShowInput(false);
    }

    async function sendFilesToServer() {
        const formData = new FormData();
        const data = JSON.stringify({ source: source, searchString: "Machine Learning", additionalInfo: "Referências para revisão" });
        const token = localStorage.getItem('accessToken');
        const options = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const id = localStorage.getItem('systematicReviewId');
        const url = `http://localhost:8080/api/v1/systematic-study/${id}/search-session`;
        formData.append('file', referenceFiles[referenceFiles.length - 1]);
        formData.append('data', data);
        
        try{
            await axios.post(url, formData, options);   

            let searchSessions = await useGetSession("Scopus");
            console.log(searchSessions); 
        }
        catch( err ) { console.log(err); }
    } 
  
    return { handleFile, showInput, setShowInput, referenceFiles, setReferenceFiles, sendFilesToServer, setSource }
}

export default useHandleExportedFiles;