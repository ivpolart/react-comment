import React from 'react';
import './post-list-item.css';




const PostListItem = ({name, date, review}) => {
    return (
        <div className="review-content">
            <div className="review-top">
                <h3>{name}</h3>
                <p>{date}</p>
            </div>
            <div className="review-content-bottom">
                <div className="review-content-triangle"><div className="review-content-triangle-2"></div></div>
                <div className="review-content-square">
                    <p>{review} </p>
                </div>
            </div>
        </div>
    )
}


export default PostListItem;