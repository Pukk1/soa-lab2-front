import makeFetch from "../makeFetch";

const BASE_AGENCY_SERVICE_URL = "https://localhost:8081"


export const fetchAgencyGetCheapest = async (id1, id2, setFlats) => {
    if (id1 !== "" && id2 !== "") {
        const url = new URL(BASE_AGENCY_SERVICE_URL + "/api/v1/agency/get-cheapest/" + id1 + "/" + id2);
        await makeFetch(url, {method: "POST"}, flat => setFlats([flat]))
    }
}

export const fetchAgencyGetTotalCost = async () => {
    const url = new URL(BASE_AGENCY_SERVICE_URL + "/api/v1/agency/get-total-cost");
    await makeFetch(url, {method: "POST"}, resp => alert("Total cost: " + resp))
}