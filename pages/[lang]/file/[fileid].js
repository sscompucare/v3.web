import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../../components/layout'
import CategoryService from '../../../modules/categories/category-service'
import FileService from '../../../modules/files/file-service'
const config = require("../../../config.json")
export default function File({categories, file, strings}) {
    const router = useRouter()
    const {lang} = router.query

    return <Layout categories={categories}>
        <Head>
            <title>{file.title} - S.S. Compucare</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content={file.title} />
            <meta property="og:image"              content={"https://sscompucare-cards.netlify.app/" + file.id + ".png"} />
        </Head>
        <main>
            <div className="head">
                <div className="thumbnail" style={{"background": `url(${file.thumbnailUrl})`}}></div>
                <h1>{file.title}</h1>
            </div>

            <section className="order-section">
                <h2>{strings.orderFromPricelist[lang]}</h2>
                <div className="description">{strings.orderSectionDescription[lang]}</div>
                <ul>
                    <li><a href="tel:0035799664102">{strings.call[lang]} 99664102</a></li>
                    <li><a href="sms:0035799664102">{strings.text[lang]} 99664102</a></li>
                    <li><a href={`mailto:info@sscompucare.com?subject=Order for ${file.title}`}>{strings.email[lang]}</a></li>
                    <li><a href="https://m.me/sscompucare">Facebook Messenger</a></li>
                </ul>
            </section>

            <iframe
                className="file-frame" 
                title={file.title} 
                src={`https://savvasstephanides.github.io/bucket/sscompucare/${file.filename}`}
                width="100%"
                height="calc(100vh - 60px)">

            </iframe>
        </main>

        <style jsx global>{
            `
            main{
                margin: 15px;
                max-width: 1200px;
                padding: 9px;
            }

            main .head{
                margin-top: 30px;
            }

            

            main .head .thumbnail{
                border: 1px solid #ddd;
                width: 90px;
                height: 90px;
                border-radius: 100%;

                background-color: #fff!important;
                padding: 6px;
                background-position: 50%!important;
                background-repeat: no-repeat!important;
                background-size: contain!important;
                background-origin: content-box!important;

                display: none;

            }

            @media (min-width: 700px){
                main{
                    margin: auto;
                }
                main .head{
                    display: flex;
                }

                main .head h1{
                    margin-left: 30px;
                }

                main .head .thumbnail{
                    display: block;
                }
            }

            main .head h1{
                margin-top: 30px;
            }

            .file-frame{
                width: 100%;
                height: calc(100vh - 60px);
                margin-top: 30px;
                
            }

            section.order-section{
                margin-top: 30px;
                border: 1px solid #eee;
                border-radius: 6px;
                box-shadow: 0 0 15px #eee;
                background-color: white;
                padding: 15px;
            }

            section.order-section .description{
                margin-top: 15px;
            }

            section.order-section ul{
                list-style: none;
                margin-top: 15px;
                display: flex;
                flex-direction: column;
            }

            section.order-section ul li a{
                display: block;
                margin-top: 6px;
                border: 1px solid #eee;
                border-radius: 6px;
                box-shadow: 0 0 15px #eee;
                color: black;
                text-decoration: none;
                padding: 12px;
            }

            section.order-section ul li a:hover,
            section.order-section ul li a:focus{
                background-color: #eee;
            }

            @media(min-width: 720px){
                section.order-section ul{
                    flex-direction: row;
                }

                section.order-section ul li a{
                    margin-right: 6px;
                }
            }
            `
        }</style>
    </Layout>
}

export async function getStaticProps({params}){

    let categoryService = new CategoryService()
    let fileService = new FileService()
  
    let categories = await categoryService.getAllCategories()
    let files = await fileService.getAllFiles()

    
    let file = files.find((file) => file.id === params.fileid)

    let strings = {
        "orderFromPricelist": {
            "en": "Place an order",
            "el": "Παραγγείλτε από εμάς"
        },
        "orderSectionDescription": {
            "en": "See something you like from this price list? Contact us to place an order with us:",
            "el": "Βρήκατε κάτι που να σας ενδιαφέρει; Επικοινωνήστε μαζί μας για να παραγγείλετε:"
        },
        "call": {
            "en": "Call us at",
            "el": "Τηλεφωνίστε στο"
        },
        "text": {
            "en": "Text",
            "el": "Στείλτε μήνυμα στο"
        },
        "email": {
            "en": "E-mail",
            "el": "Στείλτε μας e-mail"
        }
    }

    return {
      props: {
        categories,
        file,
        strings
      }
    }
  }
  
  export async function getStaticPaths() {
    const languages = config.languages

    let fileService = new FileService()
    let files = await fileService.getAllFiles()
    

    let paths = []
    languages.forEach((language) => {
        files.forEach((file) => {
            paths.push({
                params: {
                    lang: language,
                    fileid: file.id
                }
            })
        })
    })

    return {
        paths,
        fallback: false
    }
  }
