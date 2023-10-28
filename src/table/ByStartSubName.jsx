import {useState} from "react";
import {fetchByStartSubName} from "../utils/flats/api";

const ByStartSubName = ({updateContent, setFlats, alertWithMessage}) => {

    const [subname, setSubname] = useState("")

    const onButtonClick = () => {
        fetchByStartSubName(subname, setFlats, alertWithMessage)
    }

    const onResetButtonClick = () => {
        updateContent()
        setSubname("")
    }

    return <details className="dropdown">
        <summary className="m-1 btn">By start sub name</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
                <div>
                    <div>
                        <textarea value={subname} onChange={e => setSubname(e.target.value)} placeholder={"sub-name"}/>
                    </div>
                    <button className={"btn btn-outline btn-success"} onClick={onButtonClick}>By start sub name</button>
                    <button className="btn btn-outline btn-warning" onClick={onResetButtonClick}>Reset</button>
                </div>
            </li>
        </ul>
    </details>
}

export default ByStartSubName