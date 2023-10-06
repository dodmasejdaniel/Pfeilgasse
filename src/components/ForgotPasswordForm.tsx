"use client"
import React from 'react'
import CustomInput from './CustomInput'
import { useForm } from 'react-hook-form'

type Props = {}
interface FormDataType {
    email: string
}
function ForgotPasswordForm({ }: Props) {
    const {register,handleSubmit,formState : {errors}} =useForm<FormDataType>()
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    return (
        <form onSubmit={onSubmit} className='w-full'>
            <CustomInput className="mb-10" label="Email" error={errors.email?.message} inputProps={{ type: "email", className: "w-full", ...register("email", {
                required: "Email is required",
            }) }} />
            <div className='w-full flex justify-center'>
                <button type='submit' className='bg-gray-900 text-white  py-4 px-12 rounded-3xl text-2xl text-center mx-auto'>Reset Password</button>
            </div>
        </form>
    )
}

export default ForgotPasswordForm