import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Comment(props) {
    //GET PACKAGE TO FORMAT DATE FROM TREVOR
    return (
        <div className='comment-wrapper'>
            <div className='comment-data-wrapper'>
                <Link to={`/user/${props.user_id}`}>
                    <p className='comment-username'>{props.username}</p>
                </Link>
                <p className='comment-date-created'>{props.date_created}</p>
            </div>
            <p className='comment-body'>{props.text}</p>
        </div>
    )
}

export default Comment
