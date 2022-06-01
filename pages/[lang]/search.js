import Head from 'next/head'
import Layout from '../../components/layout'
import CategoryService from '../../modules/categories/category-service'
import {useEffect, useState} from 'react'

const config = require("../../config.json")

export default function Search({categories}){
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState(['Result1'])    

    useEffect(() => {
        let params = new URLSearchParams(window.location.search)
        let query = params.get("query")
        setQuery(query)
    }, [])

    return (
        <Layout categories={categories}>
            <Head>
                <title>Search results for '{query}'</title>
            </Head>

            <main>
                <h1>Search results for '{query}'</h1>

                <ul>
                    {searchResults.map((result) => (
                        <li>{result}</li>
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