const axios = require("axios")
const config = require("../../config.json")

export default function FileService() {
    const token = process.env.API_TOKEN
    
    return {
        getAllFiles,
        getFilesByCategory
    }

    async function getAllFiles() {
        let response = await axios.get(`${process.env.API_BASE_URL}/files`, {
            headers: {
                Cookie: `token=${token}`
            }
        })
        
        return response.data
    }

    async function getFilesByCategory(categorySlug){
        let response = await axios.get(`${process.env.API_BASE_URL}/files/category/${categorySlug}`, {
            headers: {
                Cookie: `token=${token}`
            }
        })
        
        return response.data
    }
}
