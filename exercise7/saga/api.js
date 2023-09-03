
const url = 'https://services-uc7i.onrender.com/dsTivi'

function* dsTivi_api() {
    try {
        const response = yield fetch(url)
        const jsonData = yield response.json()
        return jsonData
    } catch (error) {
        return []
    }
}

export default api = {
    dsTivi_api
}