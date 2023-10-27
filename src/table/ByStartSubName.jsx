import {useState} from "react";
import {fetchByStartSubName} from "../utils/flats/api";

const ByStartSubName = ({updateContent, setFlats}) => {

    const [subname, setSubname] = useState("")

    const onButtonClick = () => {
        fetchByStartSubName(subname, setFlats)
    }

    const onResetButtonClick = () => {
        updateContent()
        setSubname("")
    }

    return <div>
        <span>By start sub name</span>
        <textarea value={subname} onChange={e => setSubname(e.target.value)} placeholder={"sub-name"}/>
        <button onClick={onButtonClick}>By start sub name</button>
        <button onClick={onResetButtonClick}>Reset</button>
    </div>
}

export default ByStartSubName