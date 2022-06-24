import CategoryService from '../../../modules/categories/category-service'
import { useRouter } from 'next/router'
import Layout from '../../../components/layout'
import Head from 'next/head'
import FileList from '../../../components/file-list'
import FileService from '../../../modules/files/file-service'

const config = require("../../../config.json")

export default function Category({category, categories, files}) {
    const router = useRouter()
    const {lang} = router.query

    return (
        <Layout categories={categories}>
            <Head>
                <title>{category.name[lang]} - S.S. Compucare</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="head">
                    <h1>{category.name[lang]}</h1>
                </div>

                <FileList files={files} language={lang}/>
                
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

            @media (min-width: 700px){
                main{
                    margin: auto;
                }
                main .head{
                    display: flex;
                }
            }
            `
            }
            </style>
        </Layout>
           
            
    )
}

export async function getStaticProps({params}){
    let categorySlug = params.categoryslug

    const categoryService = new CategoryService()
    const fileService = new FileService()

    let categories = await categoryService.getAllCategories()
    let category = categories.find((category) => category.slug === categorySlug)

    let files = await fileService.getFilesByCategory(categorySlug)
    console.log(files);

    return {
        props: {
          category,
          categories,
          files
        }
      }
}

export async function getStaticPaths() {
    const languages = config.languages
    
    const categoryService = new CategoryService()
    let categories = await categoryService.getAllCategories()


    
    let paths = []
    languages.forEach((language) => {
        categories.forEach((category) => {
            paths.push({
                params: {
                    lang: language,
                    categoryslug: category.slug
                }
            })
        })
    })

    return {
        paths,
        fallback: true
    }
  }