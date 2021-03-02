import React from 'react';
import './title.css'

const Title = () => {
    return (
        <div className="title">
            <div className="title-left">
                <img src="photo.png" />
            </div>
            <div className="title-right">
                <div>
                <h3>Вероника Ростова</h3>
                    <p>Менеджер по продажам</p> 
                </div>
            </div>
            <div className="yellow-title">
                <p className="yellow-title_top-padding">Подберу для вас самые лучшие предложения.</p>
                <p>Мои услуги абсолютно бесплатны</p>
            </div>
        </div>
    );
}

export default Title;
