const Pagination = ({currentPage, setCurrentPage, pagesNumber}) => {

    const onNextBackButtonClick = (isNext) => {
        if (isNext && currentPage < (pagesNumber - 1)) {
            setCurrentPage(currentPage + 1)
        }
        if (!isNext && currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    return <div>
        <button
            onClick={() => onNextBackButtonClick(false)}>Back
        </button>
        <button
            onClick={() => onNextBackButtonClick(true)}>Next
        </button>
    </div>
}

export default Pagination