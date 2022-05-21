import Link from "next/link";
import { useRouter } from 'next/router'

export default function Footer(){
    const router = useRouter()
    const {lang} = router.query

    let strings = {
        "languages": {
            "en": "Languages",
            "el": "Γλώσσες"
        },
        "designeddeveloped": {
            "en": "Website designed and developed by",
            "el": "Σχεδιασμός και ανάπτυξη από"
        },
        "contact": {
            "en": "Contact",
            "el": "Επικοινωνία"
        },
        "call": {
            "en": "Call",
            "el": "Τηλέφωνο:"
        },
        "text": {
            "en": "Text",
            "el": "Στείλε μήνυμα:"
        }
    }
    return (<footer>
        <div className="content">
            <div className="copyright">
                2022 &copy; S.S. Compucare 
            </div>

            <div className="creator">
                {strings.designeddeveloped[lang]} <a href="https://savvas.me">Savvas Stephanides</a>
            </div>

            <div className="links">
                <section>
                    <h2>{strings.languages[lang]}</h2>
                    <ul>
                        <li><Link href="/en"><a>English</a></Link></li>
                        <li><Link href="/el"><a>Ελληνικά</a></Link></li>
                    </ul>
                </section>

                <section>
                    <h2>{strings.contact[lang]}</h2>
                    <ul>
                        <li><a href="tel:0035799664102">{strings.call[lang]} 99664102</a></li>
                        <li><a href="sms:0035799664102">{strings.text[lang]} 99664102</a></li>
                        <li><a href="info@sscompucare.com">E-mail</a></li>
                        <li><a href="https://fb.me/sscompucare">Facebook</a></li>
                        
                    </ul>
                </section>
            </div>
        </div>

        <style jsx global>{
            `
            footer{
                margin-top: 30px;
                background-color: white;
            }

            footer .content{
                padding: 15px;
            }

            footer .content .copyright,
            footer .content .creator{
                margin-top: 15px;
                text-align: center;
            }

            footer .content .links{
                margin-top: 30px;
            }

            footer .content .links section {
                margin-top: 30px;
            }

            footer .content .links section ul{
                list-style: none;
            }

            footer .content .links section ul li {
                margin-top: 15px;
            }

            @media (min-width: 700px){
                footer .content .links{
                    display: flex;
                    justify-content: space-around;
                }
            }
            `
            }
            </style>   
    </footer>)
}