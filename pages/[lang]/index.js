import Head from 'next/head'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import FileList from '../../components/file-list'
import CategoryService from '../../modules/categories/category-service'
import FileService from '../../modules/files/file-service'

const config = require("../../config.json")

export default function Home({categories, files}) {
  const router = useRouter()
  const {lang} = router.query

  return (
    <Layout categories={categories}>
      <Head>
        <title>S.S. Compucare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        {
            categories.map((category) => {

              let categoryFiles = files
                  .sort((a,b) => new Date(b.createdTime) - new Date(a.createdTime))
                  .filter((file) => file.category === category.slug)
                  .slice(0, 3)
                
                return categoryFiles.length > 0 && 
                <div style={{"paddingTop": "30px"}} key={category.slug}>
                  <h2 className="category-name">{category.name[lang]}</h2>
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
    fallback: true,
  }
}