"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";



export default function SignupPage(){
    const [user, setUser]=React.useState({
        email:"",
        password:"",
        username:"",
    })
    const onSignup=async()=>{

    }

    return (
       <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Signup</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input type="text" 
        id="username"
        value={user.username}
        onClick={(event)=>
            {
                const inputTarget=event.target as HTMLInputElement;
                setUser({...user, username:inputTarget.value})
            }
        } 
        placeholder="email"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-gray-900"
        />
        <label htmlFor="email">email</label>
        <input type="email" 
        id="email"
        value={user.email}
        onClick={(event)=>
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
        onClick={(event)=>
            {
                const inputTarget=event.target as HTMLInputElement;
                setUser({...user, password:inputTarget.value})
            }
        } 
        placeholder="password"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-gray-900"
        />

        <button
         onClick={onSignup}
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        Signup
        </button>
        <Link href='/login'>
            Visit Login Page
        </Link>
       </div>
    )
}