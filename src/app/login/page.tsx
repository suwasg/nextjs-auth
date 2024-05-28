"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";



export default function LoginPage(){
    const [user, setUser]=React.useState({
        email:"",
        password:"",
    })
    const onLogin=async()=>{

    }

    return (
       <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
        <hr />
       
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
         onClick={onLogin}
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        Login
        </button>
        <Link href='/signup'>
            Visit Signup Page
        </Link>
       </div>
    )
}