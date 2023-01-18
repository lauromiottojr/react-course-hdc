import { useState, useEffect } from "react"

import { collection, orderBy, query, onSnapshot, where } from "firebase/firestore"

import { db } from '../firebase/config'

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            if (cancelled) {
                return;
            }

            setLoading(true)
            const collectionRef = await collection(db, docCollection)

            try {
                let userQuery
                userQuery = await query(collectionRef, orderBy('createAt', 'desc'))
                await onSnapshot(userQuery, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error.message)
                setLoading(false)
            }
        }
        loadData()
    }, [docCollection, search, uid, cancelled])

    useEffect(() => {
        setCancelled(true)
    }, [])
    return { documents, loading, error }
}