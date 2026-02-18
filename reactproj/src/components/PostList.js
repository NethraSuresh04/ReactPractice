import React, { useEffect, useState } from 'react'

function PostList() {
  let apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  let [posts, setPosts] = useState([]);
  
  function handledelete(delItem) {
    posts = [...posts.filter((delId) => delId.id !== delItem)];
    setPosts(posts);
  }

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network issue!!');
        }
        else {
          console.log("Data fetch from URL is successful")
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log("Oops there is an issue with the url")
      })
  }, [])
  return (
    <>
      <h1 className='display-1'>Posts</h1>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td><button className='btn btn-danger' onClick={()=>handledelete(post.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PostList