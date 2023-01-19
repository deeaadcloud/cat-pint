import { useAllCats } from '../../hooks/allCats';
import { Error } from '../error/error';
import { FavoriteCard } from './favoiteCard';
import { Icard } from '../../models';
import React from 'react';





export function Favorite(){
    const {error,favorite,removeCats, addCats} = useAllCats()
    const isMounted = React.useRef(false)
    React.useEffect(() => {
        if (isMounted.current) {
            const allBody = JSON.stringify(favorite);
            localStorage.setItem('favorite', allBody)
        }
        isMounted.current = true
    }, [favorite])
    return (
        <div className="main">
          {error && <Error/>}
          { favorite.map((card: Icard) => <FavoriteCard card={card} key={card.id} onRemove={removeCats} onFavorite={addCats}/>)}
        </div>
    );
}