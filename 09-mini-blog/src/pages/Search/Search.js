import { useFetchDocuments } from '../../hooks/useFetchDocuments'

import { useQuery } from '../../hooks/useQuery'

import styles from './Search.module.css'

const Search = () => {

    const query = useQuery()
    // method get is a URLSearchParams method that will get the string "query"
    const search = query.get("query")

    return (
        <div>
            <h2>Search</h2>
            <p>{search}</p>
        </div>
    )
}

export default Search