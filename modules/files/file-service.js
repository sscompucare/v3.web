const axios = require("axios")
const config = require("../../config.json")

export default function FileService() {
    const token = config.token
    
    return {
        getAllFiles
    }

    async function getAllFiles() {
        let response = await axios.get("http://api:5000/files", {
            headers: {
                Cookie: `token=${token}`
            }
        })

        return response.data
    }
}