import {useState} from "react";
import {fetchAgencyGetCheapest} from "../utils/agency/api";

const GetCheapest = ({setFlats, updateContent, alertWithMessage}) => {

    const [id1, setId1] = useState("")
    const [id2, setId2] = useState("")

    const onFindClick = () => {
        fetchAgencyGetCheapest(id1, id2, setFlats, alertWithMessage)
    }

    const onResetClick = () => {
        setId1("")
        setId2("")
        updateContent()
    }

    return <details className="dropdown">
        <summary className="m-1 btn">Get cheapest</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
                <div>
                    <div>
                        <textarea placeholder={"id-1"} value={id1} onChange={e => setId1(e.target.value)}></textarea>
                        <textarea placeholder={"id-2"} value={id2} onChange={e => setId2(e.target.value)}></textarea>
                    </div>

                    <button className={"btn btn-outline btn-success"} onClick={onFindClick}>find</button>
                    <button className="btn btn-outline btn-warning" onClick={onResetClick}>Reset</button>
                </div>
            </li>
        </ul>
    </details>
}

export default GetCheapest