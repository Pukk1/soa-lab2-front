import makeFetch from "../makeFetch";

const BASE_AGENCY_SERVICE_URL = "https://localhost:8081"


export const fetchAgencyGetCheapest = (id1, id2, setFlats) => {
    const url = new URL(BASE_AGENCY_SERVICE_URL + "/api/v1/agency/get-cheapest/" + id1 + "/" + id2);
    makeFetch(url, {method: "POST"}, flat => setFlats([flat]))
}

export const fetchAgencyGetTotalCost = async (setValue) => {
    const url = new URL(BASE_AGENCY_SERVICE_URL + "/api/v1/agency/get-total-cost");
    makeFetch(url, {method: "POST"}, setValue)
}