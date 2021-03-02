import React from 'react';
import PostListItem from '../post-list-item/post-list-item';




const PostList = ({reviews}) => {

    const elements = reviews.map((item) => {
        return (
            <div className="review">
                <PostListItem 
                name={item.name}
                date={item.date}
                review={item.review}/>
            </div>  
        )
    });

    return (
        <div>
            {elements}
        </div>
        
    )
}


export default PostList;