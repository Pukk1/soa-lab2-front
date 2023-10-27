const BASE_FLATS_SERVICE_URL = "https://localhost:8080"

export const fetchFlats = async (setFlats, setPageNumber, sortBy, currentPage) => {
    const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats");
    let params = null
    if (sortBy.order === "desc") {
        params = {page: currentPage, size: 2, sort: sortBy.field + " desc"}
    } else {
        params = {page: currentPage, size: 2, sort: sortBy.field}
    }

    try {
        url.search = new URLSearchParams(params).toString()
        const response = await fetch(url)
        const json = await response.json();
        setFlats(json["flats"])
        setPageNumber(json["pages"])
    } catch (error) {
        console.log("error", error);
    }
}

export const fetchFlatById = async (value, setFlats) => {
    if (value !== "") {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/" + value);
        try {
            const response = await fetch(url);
            if (200 === response.status) {
                const flat = await response.json();
                setFlats([flat])
            }
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const fetchDeleteById = async (value) => {
    if (value !== "") {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/" + value);
        try {
            const response = await fetch(url, {method: 'DELETE'});
            if (200 === response.status) {
                await response.json();
            }
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const fetchAddById = async (data) => {
    if (data !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats");
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            });
            if (200 === response.status) {
                await response.json();
            }
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const fetchUpdateById = async (id, data) => {
    if (id !== null && data !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/" + id);
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            });
            if (200 === response.status) {
                await response.json();
            }
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const fetchDeleteOneByTransport = async (transport) => {
    if (transport !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/delete-one-by-transport/" + transport);
        try {
            const response = await fetch(url, {
                method: 'POST',
            });
            if (200 === response.status) {
                await response.json();
            }
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const fetchAllNumberOfRoomsSum = async (setValue) => {
    const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/all-number-of-rooms-sum");
    try {
        const response = await fetch(url, {
            method: 'POST',
        });
        if (200 === response.status) {
            await response.json()
                .then(res =>
                    setValue(res)
                );
        }
    } catch (error) {
        console.log("error", error);
    }
}

export const fetchByStartSubName = async (subname, setFlats) => {
    if (subname !== null) {
        const url = new URL(BASE_FLATS_SERVICE_URL + "/api/v1/flats/by-start-sub-name/" + subname);
        try {
            const response = await fetch(url, {
                method: 'POST',
            });
            if (200 === response.status) {
                await response.json()
                    .then(flats =>
                        setFlats(flats)
                    );
            }
        } catch (error) {
            console.log("error", error);
        }
    }
}