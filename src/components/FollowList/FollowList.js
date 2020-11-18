import React from 'react'
import ProfilePic from '../ProfilePic/ProfilePic'
import { Link } from 'react-router-dom';

function FollowList(props) {

    const arr = props.type === 'followers' ? props.followers : props.following

    // LINK SHOULD LINK TO ID OF USER THAT WAS CLICKED ON

    return (
        <section>
            {props.type === 'followers' ? <h2>Followers</h2> : <h2>Following</h2>}
            <div className='follow-list'>
                {arr.map((f, index) => {
                    return (
                        <div className='follow-item-wrapper' key={index} >
                            <Link to='/portfolio' >
                                <ProfilePic />
                                <div class='follow-name-wrapper'>
                                    <h4>{f.username}</h4>
                                    <p>{f.name}</p></div>
                            </Link>
                        </div>)
                })}
            </div>
        </section>
    )
}

FollowList.defaultProps = {
    type: 'followers',

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
    ]
}

export default FollowList
