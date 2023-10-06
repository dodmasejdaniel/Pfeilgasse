import Link from 'next/link'
import React from 'react'

type Props = {
    imageSrc: any,
    title: string,
}

function BookingOption({ imageSrc, title }: Props) {
    return (
        <div className='flex flex-col'>
            <img className='rounded-xl max-w-min mx-auto' style={{maxHeight : "500px"}} src={imageSrc} alt={title}></img>
            <h2 className='text-center font-medium mt-2 text-2xl'>{title}</h2>
        </div>
    )
}

export default BookingOption