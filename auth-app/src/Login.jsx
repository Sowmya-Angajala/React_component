import { useState } from "react";
 const Login = async () =>{
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [token,setToken] =useState(null);
    const [error,setError] =useState("");
    const [loading,setLoading] =useState(false);

    const handleLogin = async (e) =>{
        e.preventDefault();
        // setLoading(true);
        setError("");
    }
    try {
        const response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",{
            method :"POST",
        headers :{
            "Content-type" : "application/json",},
            body: JSON.stringify({
                email,password,
            })
        }
        );
        const data =await response.json();
        if(!response.ok){
            throw new Error(data.message || "Login failed");
        }
        setToken(data.token);
    } catch (err) {
        setError(err.message)
    }
    finally{
        setLoading(false);
    }
 };

 return(
    <div style={{maxWidth : "400px", margin:"50px auto"}}>
        <h2>User Login</h2>
        {token ? (
            <div>
                <p style ={{color:"green"}}>Login successful</p>
                <p><strong>Token:</strong></p>
                <code>{token}</code>
                </div>
        ) : (
            <form onSubmit={handleLogin}>
                <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} required />
                <br /><br />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)} required />    

                <br /><br />
                <button type="submit" disabled={loading}>
                    {loading ? "Logging in ..." : "Login"} </button>
                {error && <p style={{color : "red"}}>{error}</p>}
            </form>
        )}
         </div>
        )
    
    export default Login;