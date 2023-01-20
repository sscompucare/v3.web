import Head from 'next/head'
import Layout from '../../components/layout'
import CategoryService from '../../modules/categories/category-service'
import FileService from '../../modules/files/file-service'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const lunr = require("lunr")

const config = require("../../config.json")

export default function Search({categories, files}){
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])  
    
    const router = useRouter()
    const {lang} = router.query
    
    var searchIndex = lunr(function () {
        this.field('title')
        this.field('categoryName')
        this.ref('id')
      
        files.map((file) => {
            return {
                id: file.id,
                title: file.title,
                categoryName: file.category.name.en,
                categoryName: file.categories.map((category) => category.name.en).join(",")
            }
        })
        .forEach(function (doc) {
          this.add(doc)
        }, this)
      })

      const strings = {
        searchResultsFor: {
            en: "Search results for",
            el: "Αποτελέσματα αναζήτησης για"
        },
        result: {
            en: "result",
            el: "αποτέλεσμα"
        },
        results: {
            en: "results",
            el: "αποτελέσματα"
        }
      }


    useEffect(() => {
        let params = new URLSearchParams(window.location.search)
        let query = params.get("query")
        setQuery(query)

        let results = searchIndex.search(query)
            .map(r => files.find(f => f.id === r.ref))

        setSearchResults(results)
    }, [])

    return (
        <Layout categories={categories}>
            <Head>
                <title>{strings.searchResultsFor[lang]} '{query}'</title>
            </Head>

            <main>
                <h1>{strings.searchResultsFor[lang]} '{query}'</h1>

                <div style={{
                    marginTop: "30px",
                    fontStyle: "italic"
                }}>{searchResults.length} {searchResults.length === 1 ? strings.result[lang] : strings.results[lang]}</div>

                <ul className="search-results">
                    {searchResults.map((result) => (
                        <li>
                            <Link href={`/${lang}/file/${result.id}`}>
                                <a style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                    color: "black"
                                }}>
                                    <div style={{
                                        background: `url('${result.thumbnailUrl}')`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center center",
                                        backgroundSize: "contain",
                                        backgroundColor: "white",
                                        width: "90px",
                                        height: "90px",
                                        borderRadius: "100%",
                                        marginTop: "30px"
                                    }}/>
                                    <h2 style={{
                                        marginLeft: "30px"
                                    }}>{result.title}</h2>
                                </a>
                            </Link>
                        </li>
                    ))}
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

            .search-results{
                list-style: none;
            }
            `}
            </style>
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