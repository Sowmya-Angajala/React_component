import React ,{useState} from "react";

function FileUpload() {
    const [file,setFile] =useState(null);
    const [message,setMessage] =useState("");
    const [loadinf,setLoading] =useState(false);

    const handleFIlechange =(e) =>{
        setFile(e.target.files[0]);

    }
    const handleSubmit =async (e) =>{
        e.prevendDefault()
        if(!file){
            setMessage("Please ")
        }
    }
}