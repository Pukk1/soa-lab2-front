import {useState} from "react";
import {fetchAgencyGetTotalCost} from "../utils/agency/api";

const GetTotalCost = () => {

    const [value, setValue] = useState("")

    const onSubmitClick = () => {
        fetchAgencyGetTotalCost(setValue)
    }

    return <div>
        <textarea value={value}></textarea>

        <button onClick={onSubmitClick}>Submit</button>
    </div>
}

export default GetTotalCost