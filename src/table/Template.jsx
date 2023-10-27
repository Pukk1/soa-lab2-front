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

function Template() {

    const [currentPage, setCurrentPage] = useState(0)
    const [pagesNumber, setPagesNumber] = useState(0)
    const [sortBy, setSortBy] = useState({field: "id", order: "asc"})
    const [flats, setFlats] = useState([])

    const updateContent = () => {
        fetchFlats(setFlats, setPagesNumber, sortBy, currentPage);
    }

    useEffect(() => {
        updateContent()
    }, [currentPage, sortBy]);

    let onSortClick = (field) => {
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
            <FindById flats={flats} setFlats={setFlats} updateContent={updateContent}/>
            <table>
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
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesNumber={pagesNumber}/>
                <DeleteById updateContent={updateContent}/>
                <AddFlat updateContent={updateContent}/>
                <UpdateFlat updateContent={updateContent}/>
                <DeleteOneByTransport updateContent={updateContent}/>
                <AllNumberOFRoomsSum updateContent={updateContent}/>
                <ByStartSubName updateContent={updateContent} setFlats={setFlats}/>
                <GetCheapest setFlats={setFlats} updateContent={updateContent}/>
                <GetTotalCost/>
            </table>
        </div>
    )
}

export default Template;