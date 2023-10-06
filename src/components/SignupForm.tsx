"use client";
import React from 'react'
import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import { EmailRegEx } from '@/utils/validation';
import useFetcher from '@/hooks/useFetch';


interface FormDataType {
    name: string;
    surname: string;
    email: string;
    door: string;
    password: string;
}

function SignupForm({ }: any) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>();
    const { response, fetch, error, loading } = useFetcher("/api/signup")
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        fetch({ body: JSON.stringify(data), method: "POST" })
    })
    return (
        <form onSubmit={onSubmit} className='w-full'>
            <div className='mb-4 flex flex-col md:flex-row gap-4 md:gap-8'>
                <CustomInput error={errors.name?.message} label="Name" inputProps={{
                    type: "text", className: "w-full", ...register("name", {
                        required: "Name is required",
                    })
                }} />
                <CustomInput error={errors.surname?.message} label="Surname" inputProps={{
                    type: "text", className: "w-full", ...register("surname", {
                        required: "Surname is required",
                    })
                }} />
            </div>
            <div className='mb-4 flex flex-col md:flex-row gap-4 md:gap-8'>
                <CustomInput error={errors.email?.message} label="Email" inputProps={{
                    className: "w-full", ...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: EmailRegEx,
                            message: "Invalid email"
                        }
                    })
                }} />
                <CustomInput error={errors.door?.message} label="Door Nr." inputProps={{
                    type: "text", className: "w-full", ...register("door", {
                        required: "Door number is required",
                    })
                }} />
            </div>

            <div className='mb-4 flex flex-col md:flex-row gap-4 md:gap-8'>
                <CustomInput error={errors.password?.message} label="Password" inputProps={{
                    type: "password", className: "w-full mt-4 text-6xl", ...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        },
                        validate: {
                            hasUppercase: (value) => {
                                return /[A-Z]/.test(value) || "Password must contain at least one uppercase letter"
                            },
                            hasLowercase: (value) => {
                                return /[a-z]/.test(value) || "Password must contain at least one lowercase letter"
                            },
                            hasNumber: (value) => {
                                return /[0-9]/.test(value) || "Password must contain at least one number"
                            }
                        }
                    })
                }} />
            </div>

            <div className='mb-4 flex flex-col md:flex-row gap-4 md:gap-8'>
                <ul className='list-none'>
                    <li>- 8 or more characters.</li>
                    <li>- uppercase and lowercase letters</li>
                    <li>- at least one number</li>
                </ul>
            </div>


            <div className='w-full flex justify-end'>
                <button type='submit' className='bg-gray-900 text-white  py-4 px-12 rounded-3xl text-2xl text-center'>Signup</button>
            </div>
            <div>
                {error && <div className='text-red-500'>{error}</div>}
                {loading && <div className='text-green-500'>Login you in...</div>}
            </div>
        </form>
    )
}

export default SignupForm