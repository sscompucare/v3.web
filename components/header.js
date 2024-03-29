import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({searchFormIsVisible, setSearchFormIsVisible}){
    const router = useRouter()
    const {lang} = router.query

    let strings = {
        "more": {
            en: "More",
            el: "Περισσότερα"
        },
        "categories": {
            en: "Devices",
            el: "Συσκευές"
        }
    }

    return(
        <header>
            <div className="content">
                <div className="logo">
                    <Link href={`/${lang}`}>
                        <a>
                            <img src="/compucare-logo.png" alt="" />
                            <div className="site-name">S.S. Compucare</div>
                        </a>
                    </Link>
                </div>
                <div className="search-button">
                    <button onClick={() => setSearchFormIsVisible(searchFormIsVisible ? false:true)} aria-expanded={searchFormIsVisible ? "true": "false"}>  
                        <img src="/search.png" alt/>
                    </button>
                </div>
                <div className="language-selector">
                    <details closed>
                        <summary><img src="/globe.png" alt="Select a language" /></summary>
                        <ul>
                            <li>
                                <Link href="/en"><a>English</a></Link>
                                
                            </li>
                            <li>
                                <Link href="/el"><a>Ελληνικά</a></Link>
                            </li>
                        </ul>
                    </details>
                </div>
                
            </div>

            <style jsx>{
                `
                header{
                    background-color: #fafafa;
                }

                header .content{
                    max-width: 1200px;
                    margin: auto;
                    position: relative;
                }

                .logo{
                    padding: 15px;
                }

                .logo a{
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                }

                .logo a .site-name{
                    color: black;
                    
                    font-weight: bold;
                    margin-left: 15px;
                    font-size: 24px;
                }

                @media(min-width: 600px){
                    .logo{
                        display: flex;
                    }
                }

                @media(max-width: 600px){
                    .logo{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .site-name{
                        display: none;
                    }
                }

                .logo img{
                    height: 60px;
                }

                .mobile-menu{
                    position: absolute;
                    top: 24px;
                    left: 15px;
                }

                @media(min-width: 600px){
                    .mobile-menu{
                        display: none;
                    }
                }

                .mobile-menu details summary{
                    color: white;
                    list-style: none;
                    outline: 1px solid white;
                    padding: 12px;
                    cursor: pointer;
                }

                .mobile-menu > summary::marker, /* Latest Chrome, Edge, Firefox */ 
                .mobile-menu > summary::-webkit-details-marker /* Safari */ {
                    display: none;
                }

                .mobile-menu details ul{
                    list-style: none;
                    position: absolute;
                    top: 45px;
                }

                .mobile-menu details ul li a{
                    color: black;
                    display: block;
                    outline: 1px solid #eee;
                    text-decoration: none;
                    padding: 12px 6px;
                    width: 120px;
                    background-color: white;
                }

                .language-selector{
                    position: absolute;
                    top: 24px;
                    right: 30px;
                }

                .language-selector details summary{
                    list-style: none;
                    cursor: pointer;
                }

                .language-selector > summary::marker, /* Latest Chrome, Edge, Firefox */ 
                .language-selector > summary::-webkit-details-marker /* Safari */ {
                    display: none;
                }

                .language-selector details summary img{
                    height: 42px;
                    background-color: #091353;
                    border-radius: 6px;
                }

                .language-selector details ul{
                    list-style: none;
                    position: absolute;
                    top: 42px;
                    right: 0;
                    border: 2px solid black;

                }

                .language-selector details ul li a{
                    color: black;
                    display: block;
                    text-decoration: none;
                    padding: 12px 6px;
                    width: 120px;
                    background-color: white;
                    border: 2px solid #eee;
                }

                .search-button button{
                    height: 42px;
                    width: 42px;
                    position: absolute;
                    top: 24px;
                    right: 90px;
                    background-color: #091353;
                    border-radius: 6px;
                    border: 0;
                    cursor: pointer;
                }

                .search-button button img{
                    height: 42px;
                }
                `

            }</style>
            
        </header>
    )
}