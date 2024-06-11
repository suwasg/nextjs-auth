"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";



export default function LoginPage(){
    const router = useRouter();
    const [user, setUser]=React.useState({
        email:"",
        password:"",
    });
    const [buttonDisabled, setButtonDisabled]=React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const onLogin=async()=>{
        try{
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            console.log(response.data)
            toast.success("Login Successful.")
            router.push('/profile')

        }
        catch(error:any){
            console.log("login failed", error.message)
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    },[user])

    return (
        <>
              <Toaster
  position="top-center"
  reverseOrder={false}
/>

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading?"Processing":"Login"}</h1>
            <hr />
        
            <label htmlFor="email">email</label>
            <input type="email" 
            id="email"
            value={user.email}
            onChange={(event)=>
                {
                    const inputTarget=event.target as HTMLInputElement;
                    setUser({...user, email:inputTarget.value})
                }
            } 
            placeholder="email"
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-gray-900"
            />
            <label htmlFor="password">password</label>
            <input type="password" 
            id="password"
            value={user.password}
            onChange={(event)=>
                {
                    const inputTarget=event.target as HTMLInputElement;
                    setUser({...user, password:inputTarget.value})
                }
            } 
            placeholder="password"
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-gray-900"
            />

            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
            {
                buttonDisabled?"No LogIn":"Login"
            }
            </button>
            <Link href='/signup'>
                Visit Signup Page
            </Link>
        </div>
       </>

    )
}