import Link from 'next/link'

export default function Header(){
    return(
        <header>
            <div className="content">
                <a id="mobile-menu-link" href="#sitenav">
                    Menu
                </a>
                <Link href="/">
                    <a id="logo-link">
                        <img src="/compucare-logo.png" alt="" />
                        <div className="site-name">S.S. Compucare</div>
                    </a>
                </Link>
            </div>

            <style jsx>{
                `
                header{
                    background-color: #091353;
                }

                header .content{
                    padding: 15px;
                    max-width: 1200px;
                    margin: auto;
                    display: flex;
                    align-items: center;
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
                
                `

            }</style>
            
        </header>
    )
}