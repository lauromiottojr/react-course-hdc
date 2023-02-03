import { upload } from '../../utils/config'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUserDetails } from '../../slices/userSlice'

import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs'

import Message from '../../components/Message/Message'

import './Profile.css'

const Profile = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth)

    // photos

    // load user data
    useEffect(() => {
        dispatch(getUserDetails(id))
    }, [dispatch, id])

    if(loading){
        return <p>Carregando...</p>
    }

    return (
        <div id='profile'>
            <div className='profileHeader'>
                {user.profileImage && (
                    <img src={`${upload}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className='profileDescription'>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile