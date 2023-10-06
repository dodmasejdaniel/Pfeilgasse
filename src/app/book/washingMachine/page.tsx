"use client"
import BookingOption from '@/components/BookingOption'
import Page from '@/components/Page'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import washingMachineImage from "../../../assets/washingMachine.avif"
import CustomInput from '@/components/CustomInput'
import { useForm } from 'react-hook-form'
import CustomSelect from '@/components/CustomSelect'
type Props = {}


interface FormDataType {
    washingMachine: string
    startTime: string
    duration: string
    date: Date
}


function WashingMachine({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>({
        defaultValues: {
            washingMachine: "1",
            date: new Date(),
            duration: "20",
        }
    })
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    return (
        <Page>
            <PageTitle className="text-white mb-10" text='Booking' />
            <div className='w-full flex flex-col-reverse md:flex-row md:max-w-6xl gap-10 justify-center'>
                <BookingOption imageSrc={washingMachineImage.src} title='Washing Machine' />
                <form onSubmit={onSubmit} className='px-10 md:px-0 flex flex-col gap-4'>
                    <CustomSelect options={[
                        { value: "1", label: "Washing Machine 1" },
                        { value: "2", label: "Washing Machine 2" },
                        { value: "3", label: "Washing Machine 3" },
                    ]} selectProps={register("washingMachine")} />
                    <div>
                        <div className='flex gap-2 flex-wrap w-full'>
                            <CustomInput className="mb-10 flex-1 min-w-[12rem]" label='Date' error={errors.date?.message} inputProps={{
                                type: "date", className: "w-full", ...register("date", {
                                    required: "Date is required"
                                })
                            }} />
                            <CustomInput className="mb-10 flex-1 min-w-[8rem]" label='Start Time' error={errors.startTime?.message} inputProps={{
                                type: "time", className: "w-full", ...register('startTime', {
                                    required: "Start time is required"
                                })
                            }} />
                            <CustomSelect options={[
                                { value: "20", label: "20 min" },
                                { value: "30", label: "30 min" },
                                { value: "40", label: "40 min" },
                                { value: "60", label: "60 min" },
                                { value: "90", label: "90 min" },
                            ]} selectProps={{...register("duration"), className : "w-min self-start my-auto"}} />
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <button type='submit' className='bg-gray-900 text-white  py-4 px-12 rounded-3xl text-2xl text-center mx-auto'>Book</button>
                    </div>
                </form>
            </div>
        </Page>)
}

export default WashingMachine