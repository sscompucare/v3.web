import Header from './header'
import Navigation from './navigation'

export default function Layout({children, categories}){    

    return(
        <div id="app">
            <Header />
            <Navigation categories={categories}/>
            {children}

            <style jsx global>{
            `
            *{
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }

            body{
                background-color: #EEE;
            }

            main{
                // padding-top: 150px;
            }
            `
            }
            </style>   
        </div>
    )
}