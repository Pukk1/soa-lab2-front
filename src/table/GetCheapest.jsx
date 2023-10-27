import {useState} from "react";
import {fetchAgencyGetCheapest} from "../utils/agency/api";

const GetCheapest = ({setFlats, updateContent}) => {

    const [id1, setId1] = useState("")
    const [id2, setId2] = useState("")

    const onFindClick = () => {
        fetchAgencyGetCheapest(id1, id2, setFlats)
    }

    const onResetClick = () => {
        setId1("")
        setId2("")
        updateContent()
    }

    return <div>
        <textarea placeholder={"id-1"} value={id1} onChange={e=>setId1(e.target.value)}></textarea>
        <textarea placeholder={"id-2"} value={id2} onChange={e=>setId2(e.target.value)}></textarea>

        <button onClick={onFindClick}>find</button>
        <button onClick={onResetClick}>reset</button>
    </div>
}

export default GetCheapest