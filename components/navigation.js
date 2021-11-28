import Link from 'next/link'

export default function Navigation(){
    let categories = [
        {
            slug: "laptops",
            label: "Laptops",
            position: "main"
        },
        {
            slug: "desktops",
            label: "Desktops",
            position: "main"
        },
        {
            slug: "tablets",
            label: "Tablets",
            position: "main"
        },
        {
            slug: "printers",
            label: "Printers",
            position: "main"
        },
        {
            slug: "printers",
            label: "Printers",
            position: "secondary"
        }

    ]

    let mainCategories = categories.filter((category) => category.position === "main")

    return (
        <nav id="sitenav">
            <ul>
                {
                    mainCategories.map((category) => (
                        <li>
                            <Link href={`/category/${category.slug}`}>
                                <a>
                                {category.label}
                                </a>
                            </Link>
                        </li>
                    ))
                }
                {/* <li><Link href="#"><a>More &#x25BC;</a></Link></li> */}
                
            </ul>

            <style jsx>{
                `
                nav{
                    background-color: #091353;
                }

                nav ul{
                    list-style: none;
                    padding: 15px;
                    display: flex;
                    max-width: 1200px;
                    margin: auto;
                }

                nav ul li{
                    margin: 9px 30px 15px 0;
                }

                nav ul li a{
                    display: block;
                    text-decoration: none;
                    color: white;
                    font-family: sans-serif;
                    font-size: 18px;
                }

                nav ul li a:hover{
                    text-decoration: underline;
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

                    nav ul {
                        display: block;
                    }
                }
                `
            }</style>
        </nav>
    )
}