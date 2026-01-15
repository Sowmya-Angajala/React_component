import React ,{useState} from "react";

function FileUpload() {
    const [file,setFile] =useState(null);
    const [message,setMessage] =useState("");
    const [loading,setLoading] =useState(false);

    const handleFIlechange =(e) =>{
        setFile(e.target.files[0]);

    }
    const handleSubmit =async (e) =>{
        e.prevendDefault()
        if(!file){
            setMessage("Please  select a file")
            return
        }
        const formData =mew FormData();
        formData.append("file",file);
        try{
            setLoading(true);
            setMessage("");

            const response =await fetch("https://example.com/upload",{
                method:"POST ",
                body:formData,

            });
            if(!response.ok){
                throw new Error("upload failed")
            }
            setMessage("File uploaded successfully");
        }
        catch(error){
            setMessage("Error uploading file")
        }
        finally{
            setMessage(false);
        }
    }
    return(
        <div>
            <h3>
                Upload File
            </h3>
            <form onSubmit={handleSubmit}>
                <input type="file" 
                onChange={handleFIlechange}/>
                <button type="submit" disabled={loading}>
                    {loading ? "Uploading..." : "Upload"}
                </button>
            </form>
            {message && <P>{message}</P>}
        </div>
    )
}
export default FileUpload