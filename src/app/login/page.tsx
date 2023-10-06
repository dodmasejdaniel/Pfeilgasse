import React from 'react'
import PageTitle from '@/components/PageTitle'
import LoginForm from '@/components/LoginForm'
import Page from '@/components/Page'
type Props = {}

function Login({ }: Props) {
    return (
        <Page>
            <PageTitle className="text-white mb-10" text='Login' />
            <div className='mt-4 max-w-3xl w-full px-12 lg:px-0'>
                <LoginForm />
            </div>

        </Page>
    )
}

export default Login