import { useState } from "react"
function Search({ handleChange, handleSubmit }) {
    return (
    <div className="Search">
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} className="search-input" type="text" autoComplete="off" autoFocus />
                <button className="button-input" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>)
}
export default Search;