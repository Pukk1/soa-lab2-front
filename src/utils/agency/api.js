import makeFetch from "../makeFetch";

const BASE_AGENCY_SERVICE_URL = "http://localhost:8084/agency-service"


export const fetchAgencyGetCheapest = async (id1, id2, setFlats, alertWithMessage) => {
    if (id1 !== "" && id2 !== "") {
        const url = new URL(BASE_AGENCY_SERVICE_URL + "/api/v1/agency/get-cheapest/" + id1 + "/" + id2);
        await makeFetch(url, {method: "POST"}, flat => setFlats([flat]), alertWithMessage)
    }
}

export const fetchAgencyGetTotalCost = async (alertWithMessage) => {
    const url = new URL(BASE_AGENCY_SERVICE_URL + "/api/v1/agency/get-total-cost");
    await makeFetch(url, {method: "POST"}, resp => alertWithMessage("Total cost: " + resp), alertWithMessage)
}