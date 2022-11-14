import React from 'react';

const InfoCard = ({card}) => {
   const {title, icon, description, bgClass} = card
   console.log(card.icon)
    return (
        <div className={`card card-side shadow-xl p-1 text-white ${bgClass}`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {description}
          
        </div>
      </div>
    );
};

export default InfoCard;