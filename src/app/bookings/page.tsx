import BookingsTable from '@/components/BookingsTable'
import Page from '@/components/Page'
import PageTitle from '@/components/PageTitle'
import React from 'react'

type Props = {}
const bookings = [
    {
        id: "1",
        date: "2021-10-10",
        booker: "John Doe",
        startTime: "10:00",
        duration: "20",
        machine: "Washing Machine 1",
        type: "Washing Machine"
    },
    {
        id: "2",
        date: "2021-10-10",
        booker: "John Doe2",
        startTime: "10:00",
        duration: "20",
        machine: "Washing Machine 1",
        type: "Washing Machine"
    },
]
function Bookings({ }: Props) {

    return (
        <Page>
            <PageTitle className="text-white mb-10" text='Show Booking' />
            <div className='w-full lg:max-w-7xl px-4 overflow-x-auto'>
                <BookingsTable bookings={bookings} />
            </div>

        </Page>
    )
}

export default Bookings