import React, { useState } from 'react'
import ProfilePic from '../ProfilePic/ProfilePic'
import { Link } from 'react-router-dom';
import '../../css/FollowList.css'

function FollowList(props) {
    //TRUE IS FOLLOWERS 
    //FALSE IS FOLLOWING
    const [toggleFollow, setToggleFollow] = useState(true)

    const usersArr = toggleFollow ? props.followers : props.following

    const followList = usersArr.map((f, index) => {
        return (
            <div className='follow-item-wrapper' key={index} >
                <Link to='/portfolio' className='follow-item-inner-wrapper'>
                    <div className='follow-wrapper-left'>
                        <ProfilePic />
                        <div className='follow-name-wrapper'>
                            <h4>{f.username}</h4>
                            <p>{f.name}</p>
                        </div>
                    </div>
                    {toggleFollow ? <button>Follow</button> : <button>Unfollow</button>}
                </Link>
            </div>
        )
    })

    return (
        <section>
            {toggleFollow ? <h2>Followers</h2> : <h2>Following</h2>}
            <div className='toggle-button-wrapper'>
                <button onClick={() => setToggleFollow(true)}>Followers</button>
                <button onClick={() => setToggleFollow(false)}>Following</button>
            </div>
            <div className='follow-list'>
                {followList}
            </div>
        </section>
    )
}

FollowList.defaultProps = {
    followers: [
        {
            username: 'Really Son Goku',
            name: 'Kakarot'
        },
        {
            username: 'The Strongest Ever',
            name: 'Vegeta'
        },
        {
            username: 'ProfessorGo',
            name: 'Gohan'
        },
        {
            username:
                'Time Traveller Trunks',
            name: 'Trunks'
        },
        {
            username: 'Really Son Goku',
            name: 'Kakarot'
        },
        {
            username: 'The Strongest Ever',
            name: 'Vegeta'
        },
        {
            username: 'ProfessorGo',
            name: 'Gohan'
        },
        {
            username:
                'Time Traveller Trunks',
            name: 'Trunks'
        },
        {
            username: 'Really Son Goku',
            name: 'Kakarot'
        },
        {
            username: 'The Strongest Ever',
            name: 'Vegeta'
        },
        {
            username: 'ProfessorGo',
            name: 'Gohan'
        },
        {
            username:
                'Time Traveller Trunks',
            name: 'Trunks'
        }
    ],

    following: [
        {
            username: 'ProfessorGo',
            name: 'Gohan'
        },
        {
            username:
                'Time Traveller Trunks',
            name: 'Trunks'
        },
        {
            username: 'Really Son Goku',
            name: 'Kakarot'
        },
        {
            username: 'The Strongest Ever',
            name: 'Vegeta'
        },
        {
            username: 'ProfessorGo',
            name: 'Gohan'
        },
        {
            username:
                'Time Traveller Trunks',
            name: 'Trunks'
        },
        {
            username: 'Really Son Goku',
            name: 'Kakarot'
        },
        {
            username: 'The Strongest Ever',
            name: 'Vegeta'
        },
        {
            username: 'ProfessorGo',
            name: 'Gohan'
        },
        {
            username:
                'Time Traveller Trunks',
            name: 'Trunks'
        }
    ]
}

export default FollowList
