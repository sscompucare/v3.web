import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation({categories}){
    const router = useRouter()
    const {lang} = router.query


    let strings = {
        "more": {
            en: "More",
            el: "Περισσότερα"
        }
    }

    return (
        <nav id="sitenav">
            <Link href={`/${lang}`} >
                <a id="close-nav">X</a>
            </Link>
            <ul className="category-list">
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
                <a>
                    {strings.more[lang]}
                </a>
                </Link>
                </li>
            </ul>
            <div id="navmore">
                <ul>
                    {
                        categories.slice(4).map((category) => (
                            <li key={category.slug}>
                                <Link href={`/${lang}/category/${category.slug}`}>
                                    <a>
                                    {category.name[lang]}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <style jsx>{
                `
                nav{
                    background-color: #091353;
                    top: 75px;
                    width: 100%;
                }

                nav .category-list{
                    list-style: none;
                    padding: 15px;
                    display: flex;
                    max-width: 1200px;
                    margin: auto;
                }

                nav .category-list li{
                    margin: 9px 30px 15px 0;
                }

                nav .category-list li a{
                    display: block;
                    text-decoration: none;
                    color: white;
                    font-family: sans-serif;
                    font-size: 18px;
                }

                nav .category-list li a:hover{
                    text-decoration: underline;
                }

                #close-nav{
                    display: none;
                }

                @media(max-width: 600px){
                    #sitenav{
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: none;
                    }

                    #sitenav:target{
                        display: block;
                    }

                    nav .category-list {
                        display: block;
                    }

                    #close-nav{
                        display: block;
                        position: fixed;
                        top: 6px;
                        right: 6px;
                    }
                }

                #navmore{
                    display: none;
                }

                #navmore:target{
                    display: block;
                }
                `
            }</style>
        </nav>
    )
}