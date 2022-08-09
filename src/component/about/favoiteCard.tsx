import React, { useState } from "react";
import { Icard } from "../../models";
import './../card/main.css'

interface CardProps {
    card: Icard
    onFavorite(favorite: Icard): void
    onRemove(id: string): void
}

//Отрисовка понравившихся карточек
export const FavoriteCard: React.FC<CardProps> = (props: CardProps) => {
    
    const [favorite, setFavorite] = useState(props.card.id)
    const btnClassName = favorite ? 'active' : ''
    const btnClasses = [btnClassName, 'likeBtn']
    return (
        <div className="wrapper_cart">
            <img src={props.card.url} alt="" />

            <button
                onClick={() => {
                        setFavorite(props.card.id)
                    if (favorite !== props.card.id) {
                        console.log('котик добавлен')
                    }
                    else {
                        props.onRemove(props.card.id)
                        console.log('котик удален')
                    }
                }}
                className={btnClasses.join(' ')}>
            </button>
        </div>
    )
}