import makeFetch from "../makeFetch";

const BASE_FLATS_SERVICE_URL = "https://localhost:8080"

export const fetchFlats = async (setFlats, setPageNumber, sortBy, currentPage, filter) => {
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
        })
    } catch (e) {
        console.log("error", e);
    }
}

export const fetchFlatById = async (value, setFlats) => {
    if (value !== "") {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/" + value);
        await makeFetch(url, {}, flat => setFlats([flat]))
    }
}

export const fetchDeleteById = async (value) => {
    if (value !== "") {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/" + value);
        await makeFetch(url, {method: 'DELETE'}, response => {
        })
    }
}

export const fetchAdd = async (data) => {
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
            }
        )
    }
}

export const fetchUpdateById = async (id, data) => {
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
            }
        )
    }
}

export const fetchDeleteOneByTransport = async (transport) => {
    if (transport !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/delete-one-by-transport/" + transport);
        await makeFetch(url, {method: 'POST'}, _ => {
        })
    }
}

export const fetchAllNumberOfRoomsSum = async () => {
    const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/all-number-of-rooms-sum");
    await makeFetch(url, {method: 'POST'}, resp => alert("All number of rooms sum: " + resp))
}

export const fetchByStartSubName = async (subname, setFlats) => {
    if (subname !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/by-start-sub-name/" + subname);
        await makeFetch(url, {method: 'POST'}, setFlats)
    }
}