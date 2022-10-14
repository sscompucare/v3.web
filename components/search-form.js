import { useRouter } from 'next/router'

export default function SearchForm(){
    const router = useRouter()
    const {lang} = router.query

    const strings = {
        searchForAGadget: {
            en: "Search for a gadget",
            el: "Αναζήτηση συσκευής"
        }
    }
    
    return(<div className="search-form">
    <form method="get" action={`/${lang}/search`}>
            <label className="visually-hidden" htmlFor="search-text-input">Search query</label>
            <input type="text" name="query" id="search-text-input" placeholder={strings.searchForAGadget[lang]}/>
    </form>
    <style jsx>{
        `
        .search-form{
            padding: 15px;
            background-color: #091353;
        }

        .search-form form{
            max-width: 1200px;
            margin: auto;
        }
        .search-form form input#search-text-input{
            display: block;
            width: calc(100% - 18px);
            padding: 9px;
            font-size: 15px;
        }`
    }
    </style>
</div>)
}