import React, { useState, useEffect } from 'react'
import Comment from '../Comment/Comment';
import { useParams } from "react-router"
import InitContentApiService from '../../services/init-content-api-service';
import '../../css/Post.css'

function Post() {
    let { id } = useParams()
    const [comments, setComments] = useState([])

    const getComments = async () => {
        const comm = await InitContentApiService.getPostComments(id)
        setComments(comm)
    };

    useEffect(() => {
        getComments()
    }, [])


    return (
        <section className='post-wrapper'>

            <h1>Post title</h1>



            {comments.length ? comments.map(c => <Comment key={c.id} {...c} />) : null}
        </section>
    )
}

export default Post
