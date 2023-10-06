import React from 'react'
import PageTitle from '@/components/PageTitle'
import SignupForm from '@/components/SignupForm'
import Page from '@/components/Page'

type Props = {}

function Signup({ }: Props) {
    return (
        <Page>
            <PageTitle className="text-white mb-10" text='Sign Up' />
            <div className='mt-4 max-w-3xl w-full px-12 lg:px-0'>
                <SignupForm />
            </div>
        </Page>
    )
}

export default Signup