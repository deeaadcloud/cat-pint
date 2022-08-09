import React, { useState } from "react";
import { Icard } from "../../models";
import './main.css'

interface CardProps {
    card: Icard
    onFavorite(favorite: Icard):void
    onRemove(id:string):void
}

//отрисовка карточек
export const Card: React.FC<CardProps> = (props: CardProps) => {
    const [favorite, setFavorite] = useState('')
    const btnClassName = favorite ? 'active' : ''
    const btnClasses = ['likeBtn', btnClassName]
    return (
        <div className="wrapper_cart">
            <img src={props.card.url} alt="" />
            <button
                onClick={() => {if (favorite!==props.card.id){
                    setFavorite(props.card.id)
                    props.onFavorite(props.card)
                    console.log('котик добавлен')
                }
                else{ 
                    setFavorite('')
                    props.onRemove(props.card.id)
                }
            
            }}
                
                className={btnClasses.join(' ')}>
            </button>
        </div>
    )
}