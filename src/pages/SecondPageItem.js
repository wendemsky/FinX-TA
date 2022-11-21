import React from 'react'
import './SecondPageItem.css'

const SecondPageItem = ({ posts, loading }) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return <ul className='list-group mb-4'>
        {posts.map( post => (
            <li key={post.id} className="list-group-item list-group-item-dark" style={{zIndex: '-1'}}>
                <h1 className='list-title'>{post.id}. {post.title}</h1>
                <p className='list-text'>{post.body}</p>
            </li>
        ))}
    </ul>
}

export default SecondPageItem
