import React, { useState, useEffect } from 'react'
import Comment from '../Comment/Comment';
import { useParams } from "react-router"
import InitContentApiService from '../../services/init-content-api-service';
import '../../css/Post.css'
import ProfilePic from '../ProfilePic/ProfilePic'
import { Link } from 'react-router-dom';

function Post() {
    let { id } = useParams()
    const [comments, setComments] = useState([])
    const [post, setPost] = useState({})

    const getComments = async () => {
        const comm = await InitContentApiService.getPostComments(id)
        setComments(comm)
    };

    const getPost = async () => {
        const p = await InitContentApiService.getPost(id)
        setPost(p)
    }

    useEffect(() => {
        getComments()
        getPost()
    }, [])

    console.log(post)

    return (
        <section className='post-wrapper'>

            <h2>{post.title}</h2>
            <div className='post-user-wrapper'>
                <ProfilePic className='post-profile-pic' />
                <Link to={`/user/${post.user_id}`} className='post-name-wrapper'>
                    <p>{post.username}</p>
                    <p>{post.fullname}</p>
                </Link>
            </div>
            <div className='post-info-wrapper'>
                <div className='post-link-wrapper'>
                    <a _target='blank' href={post.live_link} alt='view live project'><p>Live Project</p></a>
                    <a _target='blank' href={post.repository} alt='view projects repository'><p>Repository</p></a>
                </div>
                <p>Tech stack: {post.tech_stack}</p>

            </div>

            <div className='placeholder'>
                <h1>PLACEHOLDER</h1>
            </div>


            {comments.length ? comments.map(c => <Comment key={c.id} {...c} />) : null}
        </section>
    )
}

export default Post
