const Photo = require("../models/Photo")
const User = require("../models/User")

const mongoose = require("mongoose")

// insert photo with user related to it
const insertPhoto = async (req, res) => {
    const { title } = req.body
    const image = req.file.fileName

    const reqUser = req.user
    const user = await User.findById(reqUser._id)

    // create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
    })

    // if photo was created, return data
    if (!newPhoto) {
        res.status(422).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] })
        return
    }

    res.status(201).json(newPhoto)
}

// delete photo from db
const deletePhoto = async (req, res) => {
    const { id } = req.params
    const reqUser = req.user

    try {
        const photo = await checkPhotoExists({ id }, res)
        // check if photo exists
        if (!photo) {
            return
        }
        // check if photo belongs to user
        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({ errors: ["Ocorreu um erro, por favor tente novamente mais tarde."] })
            return
        }
        await Photo.findByIdAndDelete(photo._id)
        res.status(200).json({ id: photo._id, message: "Foto excluida com sucesso!" })
    } catch (error) {
        res.status(404).json({ errors: ["Foto não encontrada!"] })
        return
    }
}

// get all photos
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec()
    return res.status(200).json(photos)
}

// get user photos
const getUserPhotos = async (req, res) => {
    const { id } = req.params
    const photos = await Photo.find({ userId: id }).sort([["createdAt", -1]]).exec()
    res.status(200).json(photos)
}

// get photo by id
const getPhotoById = async (req, res) => {
    const { id } = req.params
    try {
        const photo = await checkPhotoExists({ id }, res)
        if (!photo) {
            return
        }
        res.status(200).json(photo)
    } catch (error) {
        res.status(422).json({ errors: ["Ocorreu um erro, por favor tente novamente mais tarde."] })
    }
}

// update a photo
const updatePhoto = async (req, res) => {
    const { id } = req.params
    const { title } = req.body
    const reqUser = req.user
    const photo = await checkPhotoExists({ id }, res)
    // check if photo exists
    if (!photo) {
        return
    }
    // check if photo belongs to user
    if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({ errors: ["Ocorreu um erro, por favor tente novamente mais tarde."] })
        return
    }
    if (title) {
        photo.title = title
    }
    await photo.save()
    res.status(200).json({ photo, message: "Foto atualizada com sucesso!" })
}

// like
const likePhoto = async (req, res) => {
    const { id } = req.params
    const reqUser = req.user
    const photo = await checkPhotoExists({ id }, res)
    // check if photo exists
    if (!photo) {
        return
    }
    // check if the user already liked the photo
    if (photo.likes.includes(reqUser._id)) {
        res.status(422).json({ errors: ["Você já curtiu a foto."] })
        return
    }
    // put user id in likes array
    photo.likes.push(reqUser._id)
    photo.save()
    res.status(200).json({ photoId: id, userId: reqUser._id, message: "Foto curtida com sucesso!" })
}

// comment
const commentPhoto = async (req, res) => {
    const { id } = req.params
    const { comment } = req.body
    const reqUser = req.user
    const user = await User.findById(reqUser._id)
    const photo = await checkPhotoExists({ id }, res)
    // check if photo exists
    if (!photo) {
        return
    }
    // put comment in the array of comments
    const userComment = {
        comment,
        userName: user.name,
        userImage: user.image,
        userId: user._id
    }
    photo.comments.push(userComment)
    await photo.save()
    res.status(200).json({ comment: userComment, message: "Foto comentada com sucesso!" })
}

// search photos by title
const searchPhotos = async (req, res) => {
    const { query } = req.query
    // "i" ignora o case sensitive
    const photos = await Photo.find({ title: new RegExp(query, "i") }).exec()
    res.status(200).json(photos)
}

// internal functions -->
const checkPhotoExists = async ({ id }, res) => {
    const photo = await Photo.findById(mongoose.Types.ObjectId(id))
    // check if photo exists
    if (photo) {
        return photo
    } else {
        res.status(404).json({ errors: ["Foto não encontradaa."] })
        return false
    }

}


module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
    commentPhoto,
    searchPhotos
}