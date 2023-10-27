const alertBadRequest = (response) => {
    response.json()
        .then(resp => {
                let msg = response.status + ": " + resp["description"]
                alert(msg)
                console.log("error", msg);
            }
        )
}

const makeFetch = async (url, requestInit, ifSuccess) => {
    try {
        const response = await fetch(url, requestInit);
        if (200 === response.status) {
            response
                .json()
                .then(ifSuccess);
        } else {
            alertBadRequest(response)
        }
    } catch (error) {
        console.log("error", error);
    }
}

export default makeFetch