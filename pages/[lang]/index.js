import Head from 'next/head'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import FileList from '../../components/file-list'
import CategoryService from '../../modules/categories/category-service'
import FileService from '../../modules/files/file-service'
import Link from 'next/link'
import {useEffect} from 'react'

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

  useEffect(() => {
    localStorage.setItem("compucare-lang", lang)
}, [lang])

  return (
    <Layout>
      
      <Head>
        <title>S.S. Compucare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <section id="hero">
          <h1>{strings.bestOffers[lang]}</h1>
        </section>

        <div id="categories-wrapper">
        <section id="categories">
          <ul>
            {
              categories.map((category) => {
                return <li>
                  <Link href={`/${lang}/category/${category.slug}`}>
                    <a>
                      <img className="thumbnail" src={`https://sscompucare-assets.netlify.app/category-${category.slug}.jpg`} alt=""/>
                      <div className="category-name">{category.name[lang]}</div>
                    </a>
                  </Link>
                  
                </li>
              })
            }
          </ul>
        </section>
        <section id="categories-controls">
          <button onClick={() => {
            let categoriesElement = document.querySelector("#categories")
            categoriesElement.scrollLeft -= 120
          }}>⬅️</button>
          <button onClick={() => {
            let categoriesElement = document.querySelector("#categories")
            categoriesElement.scrollLeft += 120
          }}>➡️</button>
        </section>
        </div>
        

        {
            categories.map((category) => {

              let categoryFiles = files
                  .sort((a,b) => new Date(b.createdTime) - new Date(a.createdTime))
                  .filter((file) => file.category.includes(category.slug))
                  .slice(0, 3)
                
                return categoryFiles.length > 0 && 
                <div style={{"paddingTop": "15px"}} key={category.slug}>
                  <h2 className="category-name">
                    <Link href={`/${lang}/category/${category.slug}`}>
                      <a>
                        <div>{category.name[lang]}</div>
                      </a>
                    </Link>
                  </h2>
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
          margin-top: 60px;
        }

        h2.category-name a{
          text-decoration: none;
          color: black;
          font-size: 30px;
        }

        h2.category-name a:hover{
          text-decoration: underline;
        }

        section#hero{
          background-size: 210px;
          background-repeat: no-repeat;
          background-position: bottom center;
        }

        section#hero h1{
          padding-top: 45px;
          font-size: clamp(24px, 4vw, 45px);
        }

        section#categories{
          overflow: auto;
          margin-top: 30px;
          padding: 15px;
        }

        section#categories ul{
          display: flex;
          list-style: none;
          gap: 15px;
        }

        section#categories ul li a{
          display: block;
          position: relative;
          border: 2px solid #ddd;
          padding: 15px;
          border-radius: 15px;
          height: 210px;
          flex-shrink: 0;
          width: 200px;
          text-decoration: none;
          color: black;
          transition: transform ease 0.3s;
        }

        section#categories ul li a:hover{
          transform: scale(1.03);
        }

        

        section#categories ul li a img.thumbnail{
          display: block;
          position: absolute;
          left: calc(50% - 75px);
          top: calc(50% - 75px - 15px);
          height: 150px;
          border-radius: 100%;
          border: 1px solid #eee;
        }

        section#categories ul li a .category-name{
          position: absolute;
          bottom: 15px;
          left: 15px;
        }

        section#categories-controls{
          visibility: hidden;
          text-align: center;
        }

        section#categories-controls button{
          font-size: 30px;
          background-color: transparent;
          border: 0;
          padding: 9px;
          cursor: pointer;
        }

        #categories-wrapper:hover #categories-controls{
          visibility: visible;
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