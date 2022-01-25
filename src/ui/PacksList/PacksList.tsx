import { Pagination } from "./Pagination/Pagination"
import { Search } from "./Search/Search"
import s from "./PacksList.module.css"

export const PacksList = () => {
    return (
        <div className={s.wrapper}>
            PacksList
            <div>
                <Search />
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    )
}