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
        "support": {
            "en": "Support",
            "el": "Στήριξη"
        },
        "hereToHelp": {
            "en": "Slow computer? Broken screen on your tablet? For any problems we're here to help! Just drop us a message here:",
            "el": "Αργός υπολογιστής; Σπασμένη οθόνη στο τάμπλετ; Για οτιδήποτε πρόβλημα, είμαστε εδώ να βοηθήσουμε! Στείλτε μας ένα μήνυμα εδώ:"
        },
        "yourName": {
            "en": "Your name",
            "el": "Το όνομα σας"
        },
        "yourEmail": {
            "en": "Your email",
            "el": "Το email σας"
        },
        "yourMessage": {
            "en": "Your message",
            "el": "Το μήνυμα σας"
        },
        "send": {
            "en": "Send",
            "el": "Αποστολή"
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

                <section id="contact-form">
                    <h2>{strings.support[lang]}</h2>

                    <form action="https://formsubmit.co/info@sscompucare.com" method="POST">
                        <div class="description">{strings.hereToHelp[lang]}</div>
                        <div className="contact-field">
                            <label htmlFor="contact-form-name">{strings.yourName[lang]}</label>
                            <input type="text" name="name" id="contact-form-name" required />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-form-email">{strings.yourEmail[lang]}</label>
                            <input type="email" name="email" id="contact-form-email" required />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-form-message">{strings.yourMessage[lang]}</label>
                            <textarea name="message" id="contact-form-message" cols="30" rows="10" ></textarea>
                        </div>
                        <div className="contact-field">
                            <button type="submit">{strings.send[lang]}</button>
                        </div>
                    </form>
                </section>

                <section>
                    <h2>{strings.contact[lang]}</h2>
                    <ul>
                        <li><a href="tel:0035799664102">{strings.call[lang]} 99664102</a></li>
                        <li><a href="sms:0035799664102">{strings.text[lang]} 99664102</a></li>
                        <li><a href="mailto:info@sscompucare.com">E-mail</a></li>
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

            #contact-form{
                max-width: 420px;
            }

            #contact-form .description{
                margin-top: 15px;
                line-height: 1.5;
            }

            #contact-form form label,
            #contact-form form input,
            #contact-form form textarea{
                display: block;
                margin-top: 6px;
            }

            #contact-form .contact-field{
                margin-top: 21px;
            }

            #contact-form form input,
            #contact-form form textarea{
                width: calc(100% - 12px);
                padding: 6px;
                font-size: 15px;
            }

            #contact-form button{
                padding: 6px;
            }
            `
            }
            </style>   
    </footer>)
}