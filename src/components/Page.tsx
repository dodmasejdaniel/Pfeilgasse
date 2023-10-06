import React, { PropsWithChildren } from 'react'

type Props = {}

function Page({children }: PropsWithChildren<Props>) {
    return (
        <main className='min-h-screen w-full bg-[#dbd9d9] flex flex-col items-center  pb-10'>
           
            {children}

        </main>
    )
}

export default Page