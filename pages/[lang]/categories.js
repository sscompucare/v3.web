import Head from 'next/head'
const config = require("../../config.json")
import CategoryService from '../../modules/categories/category-service'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Categories({categories}){
    const router = useRouter()
    const {lang} = router.query
    return (
        <Layout categories={categories}>
            <main>
                <h1>All categories</h1>
                <ul>
                    {
                        categories.map((category)=> (
                            <li>
                                <Link href={`/${lang}/category/${category.slug}`}>
                                    {category.name[lang]}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </main>

            <style jsx global>{
            `
            main{
                margin: 15px;
                max-width: 1200px;
            }

            main h1{
                margin-top: 30px;
            }

            main ul{
                margin-top: 30px;
                padding-left: 15px;
            }

            main ul li{
                margin-top: 9px;
            }

            @media (min-width: 700px){
                main{
                    margin: auto;
                }
            }
            `}
            </style>
        </Layout>
    )
}

export async function getStaticProps(){

    let categoryService = new CategoryService()
  
    let categories = await categoryService.getAllCategories()
  
    return {
      props: {
        categories
      }
    }
  }
  
  export async function getStaticPaths() {
    const languages = config.languages
  
    return {
      paths: languages.map((language) => ({params: {lang: language}})),
      fallback: true,
    }
  }