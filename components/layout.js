import Head from 'next/head'
import Footer from './footer'
import Header from './header'
import Navigation from './navigation'
import SearchForm from './search-form'
import {useState} from 'react'

export default function Layout({children}){    
    const [searchFormIsVisible, setSearchFormIsVisible] = useState(false)

    return(
        <div id="app">
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
            </Head>
            <Header searchFormIsVisible={searchFormIsVisible} setSearchFormIsVisible={setSearchFormIsVisible}/>
            {/* <Navigation categories={categories}/> */}
            <SearchForm isVisible={searchFormIsVisible}/>
            {children}
            <Footer />

            <style jsx global>{
            `
            *{
                margin: 0;
                padding: 0;
                font-family: 'Poppins', sans-serif;
            }

            body{
                background-color: #fff;
            }

            main{
                // padding-top: 150px;
            }
        
            .visually-hidden {
                clip: rect(0 0 0 0);
                clip-path: inset(50%);
                height: 1px;
                overflow: hidden;
                position: absolute;
                white-space: nowrap;
                width: 1px;
            }
            `
            }
            </style>   
        </div>
    )
}