"use client"

import { useRouter } from 'next/navigation';
import loginAction from "@/actions/loginAction"


import React, { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { errors } from 'jose';



function LoginForm() {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]= useState(false);
  const [errorMessage,setErrorMessage]= useState('');





  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const result = await loginAction({ email, password });


      
       console.log(result)
            if (result?.status === 200) {



        console.log('Login successful!!!!!!!!!!!!!!!!!!');
        toast.success('Login successful!!!!!!!!!!!!!!!!!!',{duration: 2000});
        router.push('/dashbord');

            }else{
      toast.error("Invalid email or password",{duration: 2000})
        
            }
  

    } catch (error) {
      setError(true); 
      
      toast.error('Invalid email or password',{duration: 4000})
      console.log("eeeeeeeeeeeeeeeeee")
    }
  };
  
     // try {
    //   const res = await axios.post('/api/login', {
    //     email,
    //     password,
    //   });

    //   console.log(res);
  
    //   const data = res.data; 
  
    //   if (res.status === 200) {
        
    //     console.log('Login successful!!!!!!!!!!!!!!!!!!', data);
        
        
    //     router.push('/');

    //   }
    // } catch (error: any) {
    //   // Handle error
    //   if (error.response) {
    //     console.log('Login failed!', error.response.data.message);
    //     setError(true)
    //     setErrorMessage(error.response.data.message)
        
    //   } else {
    //     console.error('An error occurred during login:', error.message);
    //     setError(true)
    //     setErrorMessage(error.message)
    //   }
    // }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-6 py-12 lg:px-8">
        
      
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 text-center py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
              
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block  w-full rounded-md border-0 text-center  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
            
              type="submit"
              className="flex  w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
