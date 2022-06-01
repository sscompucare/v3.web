import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header(){
    const router = useRouter()
    const {lang} = router.query

    return(
        <header>
            <div className="content">
                <a id="mobile-menu-link" href="#sitenav">
                    Menu
                </a>
                <Link href={`/${lang}`}>
                    <a id="logo-link">
                        <img src="/compucare-logo.png" alt="" />
                        <div className="site-name">S.S. Compucare</div>
                    </a>
                </Link>
                <form method="get" action={`/${lang}/search`}>
                    <input name="query" placeholder="Search" id="search-input"/>
                </form>
            </div>

            <style jsx>{
                `
                header{
                    background-color: #091353;
                    width: 100%;
                }

                header .content{
                    padding: 15px;
                    max-width: 1200px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                #logo-link{
                    display: flex;
                    align-items: center;
                    text-decoration: none;
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
                }

                #logo-link:hover img{
                    filter: drop-shadow(0 0 6px #eee);
                }

                #mobile-menu-link{
                    color: white;
                    margin-right: 9px;
                    display: block;
                }

                @media(min-width: 600px){
                    #mobile-menu-link{
                        display: none;
                    }
                }

                #search-input{
                    padding: 9px;
                    width: 200px;
                }
                
                `

            }</style>
            
        </header>
    )
}