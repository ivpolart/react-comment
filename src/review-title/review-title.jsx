import React from 'react';
import './review-title.css';


    const ReviewTitle = () => {
        return (
            <div className="reviews-title">
                <div className="reviews-title-left">
                    <h3>Последние отзывы</h3>
                    <a href="#">Все отзывы</a>
                </div>
                <div className="reviews-title-icons">
                    <div className="reviews-title-icons-left">
                        <img src="like.png" />
                        <p>131</p>
                    </div>
                    <div className="reviews-title-icons-right">
                        <img src="comment.png" />
                        <p>14</p>
                    </div>
                </div>
            </div>
        );
    }
export default ReviewTitle;