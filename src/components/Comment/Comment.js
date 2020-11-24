import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns';

function Comment(props) {
    const d = new Date(props.date_created)
    console.log(d)
    return (
        <div className='comment-wrapper'>
            <div className='comment-data-wrapper'>
                <Link to={`/user/${props.user_id}`}>
                    <p className='comment-username'>{props.username}</p>
                </Link>
                <p className='comment-date-created'>{format(d, 'MMM dd yyyy')}</p>
            </div>
            <p className='comment-body'>{props.text}</p>
        </div>
    )
}

export default Comment
