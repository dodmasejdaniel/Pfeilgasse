import BookingOption from '@/components/BookingOption'
import Page from '@/components/Page'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import washingMachineImage from "../../assets/washingMachine.avif"
import dryerImage from "../../assets/dryer.avif"
import Link from 'next/link'
type Props = {}

function Booking({ }: Props) {
    return (
        <Page>
            <PageTitle className="text-white lg:-mt-16 mb-10" text='Booking' />

            <div className='flex flex-col gap-4 md:flex-row md:space-x-32 justify-between'>
                <Link href='/book/washingMachine'>
                    <BookingOption imageSrc={washingMachineImage.src} title='Washing Machine'  />
                </Link>
                <Link href='/book/dryer'>
                    <BookingOption imageSrc={dryerImage.src} title='Dryer' />
                </Link>
               
            </div>
        </Page>
    )
}

export default Booking