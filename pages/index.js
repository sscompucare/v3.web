import Head from 'next/head'
import {useState, useEffect} from 'react'

export default function Home(){
    const [lang, setLang] = useState("en")

    useEffect(() => {
        let storedLanguage = localStorage.getItem("compucare-lang")
        if(storedLanguage !== null){
            setLang(storedLanguage)
        }
    })
    
    return (
        <div>
            <Head>
                <meta http-equiv="Refresh" content={`0; url='/${lang}'`} />
            </Head>

            ...
        </div>
    )
}