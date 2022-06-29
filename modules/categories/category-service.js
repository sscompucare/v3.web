const axios = require("axios")
const config = require("../../config.json")

export default function CategoryService() {
    const token = config.token
    
    return {
        getAllCategories
    }

    async function getAllCategories() {
        let response = await axios.get(`${process.env.API_BASE_URL}/categories`, {
            headers: {
                Cookie: `token=${token}`
            }
        })

        return response.data
    }
}