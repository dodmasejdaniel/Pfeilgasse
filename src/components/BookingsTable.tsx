import React from 'react'

interface BookingRow {
    id: string
    booker : string
    date: string
    startTime: string
    duration: string
    machine: string
    type: string
}

type Props = {
    bookings: BookingRow[]
}

function BookingsTable({ bookings }: Props) {
    return (
        <table className='w-full text-sm md:text-lg lg:text-xl overflow-scroll'>
            <thead>
                <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Booker</th>
                    <th className='text-center'>Type</th>
                    <th className='text-center'>Machine</th>
                    <th className='text-center'>Date</th>
                    <th className='text-center'>Start Time</th>
                    <th className='text-center'>Duration</th>
                </tr>
                <div className='mb-4'></div>
            </thead>
            <tbody>
                {bookings.map((booking) => (
                    <React.Fragment key={booking.id}>
                        <tr className='bg-slate-50 text-black rounded-3xl' key={booking.id}>
                            <td className='p-2 text-center'>{booking.id}</td>
                            <td className='p-2 text-center'>{booking.booker}</td>
                            <td className='p-2 text-center'>{booking.type}</td>
                            <td className='p-2 text-center'>{booking.machine}</td>
                            <td className='p-2 text-center'>{booking.date}</td>
                            <td className='p-2 text-center'>{booking.startTime}</td>
                            <td className='p-2 text-center'>{booking.duration}</td>
                        </tr>
                        <div className='mb-4'></div>
                    </React.Fragment>

                ))}
            </tbody>
        </table>
    )
}

export default BookingsTable