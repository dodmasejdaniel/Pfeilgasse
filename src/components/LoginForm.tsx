"use client";

import Link from 'next/link';
import React from 'react'
import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import { EmailRegEx } from '@/utils/validation';
import useFetcher from '@/hooks/useFetch';


interface FormDataType {
    email: string;
    password: string;
}

function LoginForm({ }: any) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>();
    const { response, fetch, error, loading } = useFetcher("/api/login")
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        fetch({ body: JSON.stringify(data), method: "POST" })
    })
    console.log("Response: ",response)
    return (
        <form onSubmit={onSubmit} className='w-full'>
            <CustomInput error={errors.email?.message} className="mb-10" label="Email" inputProps={{
                className: "w-full", ...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: EmailRegEx,
                        message: "Invalid email"
                    }
                })
            }} />
            <CustomInput error={errors.password?.message} label="Password" inputProps={{
                type: "password", className: "w-full", ...register("password", {
                    required: "Password is required",
                })
            }} />
            <div className='my-4 font-semibold'>
                <Link href="/resetPassword">Did you forget your password?</Link>
            </div>
            <div className='w-full flex justify-center'>
                <button type="submit" className='bg-gray-900 text-white  py-4 px-12 rounded-3xl text-2xl text-center mx-auto'>Login</button>
            </div>
            <div>
                {error && <div className='text-red-500'>{error}</div>}
                {loading && <div className='text-green-500'>Login you in...</div>}
            </div>
        </form>
    )
}

export default LoginForm