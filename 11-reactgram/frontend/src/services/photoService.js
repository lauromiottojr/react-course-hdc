import { api, requestConfig } from '../utils/config'


const publishPhoto = async (data, token) => {
    const config = requestConfig("POST", data, token, true)
    try {
        const res = await fetch(api + "/photos", config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error);
    }
}

//get user photos
const getUserPhotos = async (id, token) => {
    const config = requestConfig("GET", null, token)
    try {
        const res = await fetch(api + "/photos/user/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error);
    }
}

// delete photo
const deletePhoto = async (id, token) => {
    const config = requestConfig("DELETE", null, token)

    try {
        const res = await fetch(api + "/photos/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error);
    }
}

// update photo
const updatePhoto = async (data, id, token) => {
    const config = requestConfig("PUT", data, token)

    try {
        const res = await fetch(api + "/photos/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error);
    }
}

// get photo by id
const getPhoto = async (id, token) => {
    const config = requestConfig("GET", null, token)
    try {
        const res = await fetch(api + "/photos/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error);
    }

}

// give like
const like = async (id, token) => {
    const config = requestConfig("PUT", null, token)
    try {
        const res = await fetch(api + "/photos/like/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error);
    }
}

// comment a photo
const comment = async (data, id, token) => {
    const config = requestConfig("PUT", data, token)
    try {
        const res = await fetch(api + "/photos/comment/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error);
    }
}

// get all photos
const getPhotos = async () => {
    const config = requestConfig("GET")
    try {
        const res = await fetch(api + "/photos", config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error);
    }
}

export const photoService = {
    publishPhoto,
    getUserPhotos,
    deletePhoto,
    updatePhoto,
    getPhoto,
    like,
    comment,
    getPhotos,
}

export default photoService