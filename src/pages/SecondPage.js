import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SecondPageItem from './SecondPageItem';
import Pagination from './Pagination';

const SecondPage = () => {
  const [posts, setPost] =  useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect (() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPost(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='page2'>
      <div className="wrapper">

        <h1 style={{fontSize: '3rem', fontWeight: '500', marginBottom: '20px'}} >Place Holder API - Posts</h1>
        <SecondPageItem posts={currentPosts} loading={loading}  />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />


      </div>
    </div>
  )
}

export default SecondPage
