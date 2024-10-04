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
  
    return { handleFile, showInput, setShowInput, referenceFiles, setReferenceFiles }
}

export default useHandleExportedFiles;