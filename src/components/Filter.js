import React from "react";

export default function FilterButton({  onSelectedCategory }) {
    
     
    return (
        <div >
            <select onChange={onSelectedCategory}>
                <option value="All">All</option>
                <option value='greased'>Greased</option>
                <option value='dry'>Not Greased</option>
            </select>
        </div>
    )

}