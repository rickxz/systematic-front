import { useState } from "react";
import axios from "../../interceptor/interceptor";

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

    async function sendFilesToServer() {
        const formData = new FormData();
        const data = JSON.stringify({ source: "Google Scholar", searchString: "Machine Learning", additionalInfo: "Referências para revisão" });
        const token = localStorage.getItem('accessToken');
        const options = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const id = localStorage.getItem('systematicReviewId');
        const url = `http://localhost:8080/api/v1/systematic-study/${id}/search-session`;
        formData.append('file', referenceFiles[referenceFiles.length - 1]);
        formData.append('data', data);
        
        try{
            axios.post(url, formData, options);   
        }
        catch( err ) { console.log(err); }
    } 
  
    return { handleFile, showInput, setShowInput, referenceFiles, setReferenceFiles, sendFilesToServer }
}

export default useHandleExportedFiles;