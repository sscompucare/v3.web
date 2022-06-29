const axios = require("axios")
const config = require("../../config.json")

export default function FileService() {
    const token = config.token
    
    return {
        getAllFiles,
        getFilesByCategory
    }

    async function getAllFiles() {
        console.log("Getting all files...")
        let response = await axios.get(`${process.env.API_BASE_URL}/files`, {
            headers: {
                Cookie: `token=${token}`
            }
        })
        
        console.log(`Got ${response.data.length} results`)

        return response.data
    }

    async function getFilesByCategory(categorySlug){
        console.log(`Getting files for category ${categorySlug}`)
        let response = await axios.get(`${process.env.API_BASE_URL}/files/category/${categorySlug}`, {
            headers: {
                Cookie: `token=${token}`
            }
        })
        
        console.log(`Got ${response.data.length} results`)

        return response.data
    }
}
