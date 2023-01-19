import { useAllCats } from '../../hooks/allCats';
import { Loading } from '../loading/loading';
import { Error } from '../error/error';
import { Card } from '../card/cat-card';
import React from 'react';



export function MainPage (){
    const {loading,error,allcats,favorite,addCats, removeCats} = useAllCats()
    //Передача данных в локальное хранилище
    const isMounted = React.useRef(false)
    React.useEffect(() => {
        if (isMounted.current) {
            const allBody = JSON.stringify(favorite);
            localStorage.setItem('favorite', allBody)
        }
        isMounted.current = true
    }, [favorite])
    //Отрисовка компоненты Главная
    return (
        <div className="main">
          {loading && <Loading/>}
          {error && <Error/>}
          { allcats.map(card => <Card card={card} key={card.id} onFavorite={addCats} onRemove={removeCats}/>)}
        </div>
    );
}

