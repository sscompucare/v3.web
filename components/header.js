import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({categories}){
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
                <details id="mobile-menu">
                    <summary>{strings.categories[lang]}</summary>
                    <ul>
                    {
                    categories.slice(0,4).map((category) => (
                        <li key={category.slug}>
                            <Link href={`/${lang}/category/${category.slug}`}>
                                <a>
                                {category.name[lang]}
                                </a>
                            </Link>
                        </li>
                    ))
                    }
                    <li>
                        <Link href={`/${lang}/categories`}>
                            <a>{strings.more[lang]}</a>
                        </Link>
                    </li>
                    </ul>
                </details>
                <Link href={`/${lang}`}>
                    <a id="logo-link">
                        <img src="/compucare-logo.png" alt="" />
                        <div className="site-name">S.S. Compucare</div>
                    </a>
                </Link>
                <form method="get" action={`/${lang}/search`} id="search-form">
                    <input name="query" placeholder="Search" id="search-input"/>
                </form>
            </div>

            <style jsx>{
                `
                header{
                    background-color: #091353;
                    width: 100%;
                }

                #logo-link{
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    justify-content: center;
                    padding-top: 21px;
                }

                #logo-link img{
                    height: 45px;
                }

                #logo-link .site-name{
                    margin-left: 21px;
                    color: white;
                    font-family: sans-serif;
                    font-size: 21px;
                    font-weight: bold;
                    display: none;
                }

                #logo-link:hover img{
                    filter: drop-shadow(0 0 6px #eee);
                }

                #mobile-menu{
                    position: absolute;
                    color: white;
                    display: block;
                    margin-top: 36px;
                    margin-left: 12px;
                    
                }

                #mobile-menu summary{
                    list-style: none;
                    cursor: pointer;
                }

                #mobile-menu > summary::marker, /* Latest Chrome, Edge, Firefox */ 
                #mobile-menu > summary::-webkit-details-marker /* Safari */ {
                    display: none;
                }

                #mobile-menu summary:hover{
                    text-decoration: underline;
                }

                #mobile-menu ul{
                    list-style: none;
                    border: 1px solid black;
                    margin-top: 9px;
                }

                #mobile-menu ul li a{
                    display: block;
                    padding: 21px;
                    background-color: white;
                    text-decoration: none;
                    color: black;
                    width: 120px;
                    border-bottom: 1px solid #ccc;
                }

                #search-form{
                    margin-top: 15px;
                }

                #search-input{
                    padding: 12px;
                    margin: 6px;
                    width: calc(100% - 36px);
                    border: 0;
                }
                
                @media(min-width: 600px){
                    #mobile-menu{
                        display: none;
                    }

                    header .content{
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        max-width: 1200px;
                        margin: auto;
                    }

                    header .content #logo-link{
                        justify-content: flex-start;
                        margin-left: 21px;
                    }

                    #search-form{
                        text-align: right;
                    }

                    #search-input{
                        width: 210px;
                    }

                    #logo-link .site-name{
                        display: block;
                    }
                }
                `

            }</style>
            
        </header>
    )
}