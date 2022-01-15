import { Filter } from "./Filter"
import { Sort } from "./Sort"


export const FilterAndSort = () => {


    return (    
        <>
            <Filter  />
            <div className ="sort-cards-wrapper" style={{marginBottom: "1.5rem"}}>
                <Sort />
            </div>
        </>
    )
}