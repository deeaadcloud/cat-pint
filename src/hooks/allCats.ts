import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios'
import { Icard } from '../models';
import { getFavItems } from '../utils/getFavItems';


export function useAllCats() {

    const favCat = getFavItems()
    const [allcats, setAllcats] = useState<Icard[]>([])
    const [favorite, setFavorite] = useState([] as Icard[])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    

    async function fetchCats() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<Icard[]>(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&order=ASC&key=3025c025-5c33-4e14-8b15-7689518b602a`)
            setAllcats(response.data)
            setLoading(false)
            
        }
        catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }

    }
    
    const addCats = (favorite: Icard) => {
        setFavorite(prev => {
            const isCatInFav = prev.find(cat => cat.id === favorite.id);
            if (isCatInFav) {
                return prev.map(cat =>
                    cat.id === favorite.id
                        ? { ...favorite }
                        : favorite
                );

            }
            return [...prev, { ...favorite }];

        });
    };
    const removeCats = (id: string) => {
        alert('Вы действительно хотите удалить котека?')
        let i = favCat.findIndex((el: { id: string; }) => el.id === id)
        const favCard = favCat[i] 
        if (id) {
            setFavorite(favCat => favCat.filter((favCard) => favCard.id !== id))
        }
    }
    
    
    useEffect(() => {
        setFavorite(favCat)
    }, [])
    useEffect(() => {
        fetchCats()
    }, [])

    return { allcats, loading, error, favorite, addCats, removeCats }
}