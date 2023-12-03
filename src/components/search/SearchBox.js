import { DeleteIcon } from "../../assets/Icons";

function SearchBox() {
    return (
        <div>
            <div>
            <input className="search" placeholder="Search"></input>
            </div>
            <div>
            <img src = {DeleteIcon} />
            </div>
        </div>
    )
}

export default SearchBox;