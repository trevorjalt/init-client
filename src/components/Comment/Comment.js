import React, { useState, useEffect } from 'react'

function Comment(props) {
    //GET PACKAGE TO FORMAT DATE FROM TREVOR
    return (
        <div className='comment-wrapper'>
            <div className='comment-data-wrapper'>
                <p className='comment-username'>{props.username}</p>
                <p className='comment-date-created'>{props.date_created}</p>
            </div>
            <p className='comment-body'>{props.text}</p>
        </div>
    )
}

export default Comment
