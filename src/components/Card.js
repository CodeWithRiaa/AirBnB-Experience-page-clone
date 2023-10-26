import React from 'react'
import star from '../images/star.png';

const Card = (props) => {
    // console.log(props);
    let badgeText 

    if (props.personsCard.OpenSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.personsCard.Location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <article className='card'>
            { badgeText && <div className="card_badge">{badgeText}</div>}

            <img src={require(`../images/${props.personsCard.CoverImg}`)}
                 alt='person'
                 className='person-photo'
            />

            <div className='card_status'>
                <img src={star}
                    alt='star'
                    className='star-photo'
                />
                
                <span>{props.personsCard.Stats.Rating}</span>
                <span className='gray'>({props.personsCard.Stats.ReviewCount})  • </span>
                <span className='gray'>{props.personsCard.Location}</span>
            </div>

            <p className='card_title'>{props.personsCard.Title}</p>

            <p className='card_price'><b>From ${props.personsCard.Price}</b> / person</p>    
            
        </article>
    )
}

export default Card


