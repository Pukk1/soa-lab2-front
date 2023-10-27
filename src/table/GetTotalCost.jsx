import {useState} from "react";
import {fetchAgencyGetTotalCost} from "../utils/agency/api";

const GetTotalCost = () => {


    const onButtonClick = () => {
        fetchAgencyGetTotalCost()
    }

    return <div>
        <button onClick={onButtonClick}>Get Total Cost</button>
    </div>
}

export default GetTotalCost