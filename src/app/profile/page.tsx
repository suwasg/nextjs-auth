'use client';
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage(){
    const router=useRouter();
    const [data, setData] = useState()
    const logout=async()=>{
        try{
          await axios.get('/api/users/logout')
          toast.success("Logout Successful.")
          router.push('/login')
        }
        catch(error:any){
            console.log(error)
            toast.error(error.message)
        }
    };

    const getUserDetails = async()=>{
       const res = await axios.get("/api/users/me")
       console.log(res.data.data);
       setData(res.data.data._id)
    }

    return(
        <>
        <Toaster position="top-center" reverseOrder={false}/>

<div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr /><p>Profile Page</p>
            <h2 className="p-2 rounded bg-blue-500 ">
                {data === "nothing" ? "Nothing": <Link 
                href={`/profile/${data}`}>{data}
                </Link>}
                </h2>
            <hr />
            <button 
            onClick={logout}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md mt-6">Logout</button>
           
            <button 
            onClick={getUserDetails}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md mt-6">User Details</button>
        </div>

        </>
       
    )
}