import Head from 'next/head'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import FileList from '../../components/file-list'
import CategoryService from '../../modules/categories/category-service'
import FileService from '../../modules/files/file-service'
import Link from 'next/link'

const config = require("../../config.json")

export default function Home({categories, files}) {
  const router = useRouter()
  const {lang} = router.query

  const strings = {
    bestOffers: {
      "en": "The best offers on the best gadgets!",
      "el": "Οι καλύτερες προσφορές στις καλύτερες συσκευές!"
    }
  }

  return (
    <Layout categories={categories}>
      <Head>
        <title>S.S. Compucare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="hero">
          <h1>{strings.bestOffers[lang]}</h1>
        </section>

        {
            categories.map((category) => {

              let categoryFiles = files
                  .sort((a,b) => new Date(b.createdTime) - new Date(a.createdTime))
                  .filter((file) => file.category.slug === category.slug)
                  .slice(0, 3)
                
                return categoryFiles.length > 0 && 
                <div style={{"paddingTop": "30px"}} key={category.slug}>
                  <h2 className="category-name"><Link href={`/${lang}/category/${category.slug}`}><a>{category.name[lang]}</a></Link></h2>
                  <FileList files={categoryFiles} language={lang}/>
                </div>
                
              })  
        }

      </main>
      <style jsx global>{
        `

        

        main{
          max-width: 1200px;
          margin: auto;
          padding: 9px;
        }

        h2.category-name{
          font-family: sans-serif;
          margin-top: 60px;
        }

        section#hero{
          height: 420px;
          background: url('/hero-img.png');
          background-size: 210px;
          background-repeat: no-repeat;
          background-position: bottom center;
        }

        section#hero h1{
          text-align: center;
          padding: 45px; 15px 0 15px;
          font-size: 48px;
        }
        `
      }</style>
    </Layout>
  )
}

export async function getStaticProps(){

  let categoryService = new CategoryService()
  let fileService = new FileService()

  let categories = await categoryService.getAllCategories()
  let files = await fileService.getAllFiles()

  return {
    props: {
      categories,
      files
    }
  }
}

export async function getStaticPaths() {
  const languages = config.languages

  return {
    paths: languages.map((language) => ({params: {lang: language}})),
    fallback: false,
  }
}