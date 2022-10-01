import Footer from './footer'
import Header from './header'
import Navigation from './navigation'
import SearchForm from './search-form'

export default function Layout({children, categories}){    

    return(
        <div id="app">
            <Header categories={categories}/>
            <Navigation categories={categories}/>
            <SearchForm />
            {children}
            <Footer />

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