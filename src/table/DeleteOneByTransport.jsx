import {useState} from "react";
import {fetchDeleteOneByTransport} from "../utils/flats/api";

const DeleteOneByTransport = ({updateContent, alertWithMessage}) => {

    const [transport, setTransport] = useState("")

    const onButtonClick = () => {
        fetchDeleteOneByTransport(transport, alertWithMessage)
            .then(r => updateContent())
    }

    return <details className="dropdown">
        <summary className="m-1 btn">Delete one by transport</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
                <div>
                    <h1>Delete one by transport</h1>
                    <div>
                        <textarea value={transport} onChange={e => setTransport(e.target.value)}
                                  placeholder={"transport"}/>
                    </div>
                    <button className="btn btn-outline btn-warning" onClick={onButtonClick}>Delete one by transport
                    </button>
                </div>
            </li>
        </ul>
    </details>
}

export default DeleteOneByTransport