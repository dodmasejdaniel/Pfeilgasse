"use client";
import React from 'react'
import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import { EmailRegEx } from '@/utils/validation';


interface FormDataType {
    name: string;
    surname: string;
    email: string;
    door: string;
    newPassword: string;
    password: string;
}



const newPasswordValidators = [
    {
        validate: (value: string) => {
            return /[A-Z]/.test(value)
        },
        message: "Password must contain at least one uppercase letter"
    },
    {
        validate: (value: string) => {
            return /[a-z]/.test(value)
        },
        message: "Password must contain at least one lowercase letter"
    },
    {
        validate: (value: string) => {
            return /[0-9]/.test(value)
        },
        message: "Password must contain at least one number"
    },
]

function ProfileForm({ }: any) {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<FormDataType>({
        defaultValues: {
            name: "John",
            surname: "Doe",
            email: "john@doe.com",
            door: "1",
        }
    });
    const validateNewPassword = (value: string) => {
        if (value.length < 8) {
            return setError("newPassword", { type: "minLength", message: "Password must be at least 8 characters" })
        }
        for (const validator of newPasswordValidators) { // this is the line that fails
            if (!validator.validate(value)) {
                return setError("newPassword", { type: "validate", message: validator.message })
            }
        }
        return true
    }
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        if (data.newPassword) {
            const valid = validateNewPassword(data.newPassword)
            if (valid != true) {
                return
            }
        }
        /// Call API to update profile
        console.log(data)
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
                <CustomInput error={errors.newPassword?.message} label="New Password" inputProps={{
                    type: "password", className: "w-full mt-4 text-6xl", ...register("newPassword")
                }} />
            </div>
            <div className='mb-4 flex flex-col md:flex-row gap-4 md:gap-8'>
                <ul className='list-none'>
                    <li>- 8 or more characters.</li>
                    <li>- uppercase and lowercase letters</li>
                    <li>- at least one number</li>
                </ul>
            </div>
            <div className='mb-4 flex flex-col md:flex-row gap-4 md:gap-8'>
                <CustomInput error={errors.password?.message} label="Confirm with password" inputProps={{
                    type: "password", className: "w-full mt-4 text-6xl", ...register("password", {
                        required: "Confirmation password is required",
                    })
                }} />
            </div>



            <div className='w-full flex justify-end'>
                <button type='submit' className='bg-gray-900 text-white  py-4 px-12 rounded-3xl text-2xl text-center'>Signup</button>
            </div>
        </form>
    )
}

export default ProfileForm