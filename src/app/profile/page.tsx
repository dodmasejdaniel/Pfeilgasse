import React from 'react'
import PageTitle from '@/components/PageTitle'
import SignupForm from '@/components/SignupForm'
import ProfileForm from '@/components/ProfileForm'
import Page from '@/components/Page'

type Props = {}

function Profile({ }: Props) {
    return (
        <Page>
            <PageTitle className="text-white mb-10" text='Profile' />
            <div className='mt-4 max-w-3xl w-full px-12 lg:px-0'>
               <ProfileForm/>
            </div>


        </Page>
    )
}

export default Profile