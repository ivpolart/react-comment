import React from 'react';
import './services.css';


    const Services = () => {
        return (
            <div className="services">
                <div className="services-head">
                    <p>Услуг</p>
                    <div className="border-1"></div>
                </div>
                <div className="services-content">
                    <div className="services-content-list">
                        <div id="first-service"><h3>Ручное бронирование</h3></div>
                        
                        <p>11</p>
                    </div>
                    <div className="services-content-list">
                        <div id="second-service"><h3>Пакетные туры</h3></div>
                        
                        <p>3</p>
                    </div>
                    <div className="services-content-list">
                        <div id="thirth-service"><h3>Отели</h3></div>
                        
                        <p>1</p>
                    </div>
                </div>
                
                <div className="services-summ">
                    <div class="services-summ-content">
                        <h3>Всего</h3>
                        <p>15</p>
                    </div>
                </div>
            </div>
        );
    }

    export default Services;