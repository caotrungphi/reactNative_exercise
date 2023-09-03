
class api {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(result => result.json())
            .then(result => resolve(result))
            .catch(err => reject(err))
        })
    }
    post(url, document) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    "Accept": "Application/json",
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(document)
            })
            .then(result => result.json())
            .then(result => resolve(result))
            .catch(err => reject(err))
        })
    }

}

export default new api()