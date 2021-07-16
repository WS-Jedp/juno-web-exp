import React from 'react'
import { GetServerSideProps } from 'next'
import { AppProps } from 'next/app'
import { GeneralProvider } from '../context/generalContext'
import '../assets/styles/main.scss'

const MyApp:React.FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <GeneralProvider>
            <Component {...pageProps} />
        </GeneralProvider>
    )
}

export default MyApp