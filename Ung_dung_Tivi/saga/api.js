
const url = 'https://services-uc7i.onrender.com/dsTivi'
import {dsTivi} from "../../data/dulieu"

function* dsTivi_api() {
    try {
        const response = yield fetch(url)
        const jsonData = yield response.json()
        return jsonData
    } catch (error) {
        return dsTivi
    }
}

export default api = {
    dsTivi_api
}