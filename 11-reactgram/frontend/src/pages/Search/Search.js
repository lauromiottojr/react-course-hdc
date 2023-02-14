import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"

import { getPhotos, like } from '../../slices/photoSlice'

import Like from '../../components/Like/Like'
import PhotoItem from '../../components/PhotoItem/PhotoItem'

import './Search.css'

const Search = () => {
    return (
        <div>Search</div>
    )
}

export default Search