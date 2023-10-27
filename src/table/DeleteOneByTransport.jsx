import {useState} from "react";
import {fetchDeleteOneByTransport} from "../utils/flats/api";

const DeleteOneByTransport = ({updateContent}) => {

    const [transport, setTransport] = useState("")

    const onButtonClick = () => {
        fetchDeleteOneByTransport(transport).then(r => updateContent())
    }

    return <div>
        <span>Delete one by transport</span>
        <textarea value={transport} onChange={e => setTransport(e.target.value)} placeholder={"transport"}/>
        <button onClick={onButtonClick}>Delete one by transport</button>
    </div>
}

export default DeleteOneByTransport