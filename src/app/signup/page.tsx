"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";



export default function SignupPage(){
    const router = useRouter();
    const [user, setUser]=React.useState({
        email:"",
        password:"",
        username:"",
    })
    const [buttonDisabled, setButtonDisabled]=React.useState(false)
    const [loading, setLoading] =React.useState(false)
    const onSignup=async()=>{
        try{
            setLoading(true);
          const response = await axios.post('/api/users/signup', user);
          console.log('signup success', response.data)
          toast.success("Signup success. Login to continue.") 
          setTimeout(()=>{
            router.push('/login')
          }, 2000) 
        }
        catch(error:any){
            console.log("Signup failed", error.message)
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    }, [user])

    return (
        <>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
       <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading? "Processing":"Signup"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input type="text" 
        id="username"
        value={user.username}
        onChange={(event)=>
            {
                const inputTarget=event.target as HTMLInputElement;
                setUser({...user, username:inputTarget.value})
            }
        } 
        placeholder="username"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        />
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
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
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
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        />

        <button
         onClick={onSignup}
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        {
            buttonDisabled? "No Signup":"Signup"
        }
        </button>
        <Link href='/login'>
            Visit Login Page
        </Link>
       </div>
    </>
    )
}