import './css/Template.css'
import {useEffect, useState} from "react";
import TableContent from "./Content";
import Pagination from "./Pagination";
import FindById from "./FindById";
import DeleteById from "./DeleteById";
import AddFlat from "./AddFlat";
import UpdateFlat from "./UpdateFlat";
import DeleteOneByTransport from "./DeleteOneByTransport";
import AllNumberOFRoomsSum from "./AllNumberOfRoomsSum";
import ByStartSubName from "./ByStartSubName";
import GetCheapest from "./GetCheapest";
import GetTotalCost from "./GetTotalCost";
import {fetchFlats} from "../utils/flats/api";

const Template = ({alertWithMessage}) => {

    const [currentPage, setCurrentPage] = useState(0)
    const [pagesNumber, setPagesNumber] = useState(0)
    const [sortBy, setSortBy] = useState({field: "id", order: "asc"})
    const [filters, setFilters] = useState("")
    const [flats, setFlats] = useState([])

    const updateContent = () => {
        fetchFlats(setFlats, setPagesNumber, sortBy, currentPage, filters, alertWithMessage);
    }

    useEffect(() => {
        updateContent()
    }, [currentPage, sortBy]);

    const onSortClick = (field) => {
        if (field === sortBy.field) {
            if (sortBy.order === "asc") {
                setSortBy({field: sortBy.field, order: "desc"})
            } else {
                setSortBy({field: sortBy.field, order: "asc"})
            }
        } else {
            setSortBy({field: field, order: "asc"})
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        {
                            [
                                "id",
                                "name",
                                "coordinates.x",
                                "coordinates.y",
                                "creationDate",
                                "area",
                                "numberOfRooms",
                                "furnish",
                                "view",
                                "transport",
                                "house.name",
                                "house.year",
                                "house.numberOfFlatsOnFloor",
                                "cost"
                            ].map(it => (
                                <th onClick={() => onSortClick(it)}>{it}</th>
                            ))
                        }
                    </tr>
                    </thead>
                    <TableContent content={flats}/>
                </table>
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesNumber={pagesNumber}/>

            <FindById flats={flats} setFlats={setFlats} updateContent={updateContent} alertWithMessage={alertWithMessage}/>

            <details className="dropdown">
                <summary className="m-1 btn">Filters</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                        <div>
                            <div>
                                <textarea placeholder={"filters"} value={filters}
                                          onChange={e => setFilters(e.target.value)}/>
                            </div>
                            <button className={"btn btn-outline btn-success"} onClick={updateContent}>Use filters
                            </button>
                        </div>
                    </li>
                </ul>
            </details>
            <DeleteById updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <AddFlat updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <UpdateFlat updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <DeleteOneByTransport updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <ByStartSubName updateContent={updateContent} setFlats={setFlats} alertWithMessage={alertWithMessage}/>
            <GetCheapest setFlats={setFlats} updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <AllNumberOFRoomsSum updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <GetTotalCost alertWithMessage={alertWithMessage}/>
        </div>
    )
}

export default Template;