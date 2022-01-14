const axios = require("axios")
const config = require("../../config.json")

export default function FileService() {
    const token = config.token
    
    return {
        getAllFiles,
        getFilesByCategory
    }

    async function getAllFiles() {
        let response = await axios.get("http://api:5000/files", {
            headers: {
                Cookie: `token=${token}`
            }
        })

        return response.data
    }

    async function getFilesByCategory(categorySlug){
        let response = await axios.get(`http://api:5000/files/category/${categorySlug}`, {
            headers: {
                Cookie: `token=${token}`
            }
        })

        return response.data
    }
}