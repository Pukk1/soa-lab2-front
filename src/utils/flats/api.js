import makeFetch from "../makeFetch";

const BASE_FLATS_SERVICE_URL = "https://localhost:8443/flat-service-0.0.1-SNAPSHOT"

export const fetchFlats = async (setFlats, setPageNumber, sortBy, currentPage, filter, alertWithMessage) => {
    const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats");
    let params = {page: null, size: null, sort: null}
    if (filter !== "") {
        params = {page: null, size: null, sort: null, filters: null}
        params.filters = filter
    }

    if (sortBy.order === "desc") {
        params.page = currentPage
        params.size = 10
        params.sort = sortBy.field + " desc"
    } else {
        params.page = currentPage
        params.size = 10
        params.sort = sortBy.field
    }

    try {
        url.search = new URLSearchParams(params).toString()
        await makeFetch(url, {}, json => {
            setFlats(json["flats"])
            setPageNumber(json["pages"])
        }, alertWithMessage)
    } catch (e) {
        console.log("error", e);
    }
}

export const fetchFlatById = async (value, setFlats, alertWithMessage) => {
    if (value !== "") {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/" + value);
        await makeFetch(url, {}, flat => setFlats([flat]), alertWithMessage)
    }
}

export const fetchDeleteById = async (value, alertWithMessage) => {
    if (value !== "") {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/" + value);
        await makeFetch(url, {method: 'DELETE'}, response => {
        }, alertWithMessage)
    }
}

export const fetchAdd = async (data, alertWithMessage) => {
    if (data !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats");
        await makeFetch(
            url,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            },
            _ => {
            },
            alertWithMessage
        )
    }
}

export const fetchUpdateById = async (id, data, alertWithMessage) => {
    if (id !== null && data !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/" + id);
        await makeFetch(
            url,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            },
            _ => {
            },
            alertWithMessage
        )
    }
}

export const fetchDeleteOneByTransport = async (transport, alertWithMessage) => {
    if (transport !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/delete-one-by-transport/" + transport);
        await makeFetch(url, {method: 'POST'}, _ => {
        }, alertWithMessage)
    }
}

export const fetchAllNumberOfRoomsSum = async (alertWithMessage) => {
    const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/all-number-of-rooms-sum");
    await makeFetch(url, {method: 'POST'}, resp => alertWithMessage("All number of rooms sum: " + resp), alertWithMessage)
}

export const fetchByStartSubName = async (subname, setFlats, alertWithMessage) => {
    if (subname !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/by-start-sub-name/" + subname);
        await makeFetch(url, {method: 'POST'}, setFlats, alertWithMessage)
    }
}