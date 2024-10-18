    import React, { useState, useEffect } from 'react'
    import User from '../../assets/images/user.svg'
    import Post from '../../assets/images/post.svg'
    import Comment from '../../assets/images/Comment.svg'

    function Users() {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [userId, setUserId] = useState(null)
    const [postId, setPostId] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setUsers(data))
    }, [])

    useEffect(() => {
        if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json()).then(data => setPosts(data))
        }
    }, [userId])

    useEffect(() => {
        if (postId) {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res => res.json()).then(data => setComments(data))
        }
    }, [postId])

    return (
        <div className='m-20 flex justify-between'>
        <ul className='p-5 h-[95vh] overflow-y-auto border-[2px] space-y-5 border-white rounded-md w-[32%]'>
        <div className='flex items-center justify-center gap-[15px] bg-purple-400 p-5 font-bold text-[25px]'>
          <img src={User} alt="user" width={30} height={30}/>
          <h2>Users</h2>
        </div>
        {users.map(item => (
          <li key={item.id} className='bg-white w-full p-5 rounded-md'>
            <strong className='font-normal'><span className='font-bold'>ID</span>: {item.id}</strong>
            <h2 className='font-normal'><span className='font-bold'>Name</span>: {item.name}</h2>
            <p className='font-normal'><span className='font-bold'>Email</span>: {item.email}</p>
            <p className='font-normal'><span className='font-bold'>Phone</span>: {item.phone}</p>
            <button onClick={() => setUserId(item.id)} className='w-full mt-5 py-2 rounded-xl hover:bg-transparent border-[2px] border-green-500 hover:border-[2px] duration-300 text-white hover:text-green-500 bg-green-500 text-[25px] font-bold'>Show Posts</button>
          </li>
        ))}
      </ul>
        
      <ul className='p-5 h-[95vh] overflow-y-auto border-[2px] space-y-5 border-white rounded-md w-[32%]'>
        <div className='flex items-center gap-[15px] justify-center bg-purple-400 p-5 font-bold text-[25px]'>
          <img src={Post} alt="Post" width={30} height={30}/>
          <h2>Posts</h2>
        </div>
        {posts.map(item => (
          <li key={item.id} className='bg-white p-5 rounded-md'>
            <strong className='font-normal'><span className='font-bold'>ID</span>: {item.id}</strong>
            <div className='font-normal'><strong className='font-bold'>User  ID</strong>: {item.userId}</div>
            <h2 className='font-normal'><span className='font-bold'>Title</span>: {item.title}</h2>
            <p className='font-normal'><span className='font-bold'>Body</span>: {item.body}</p>
            <button onClick={() => setPostId(item.id)} className='w-full py-2 rounded-xl hover:bg-transparent border-[2px] border-green-500 hover:border-[2px] duration-300 text-white hover:text-green-500 mt-5 bg-green-500 text-[25px] font-bold'>Show Comments</button>
          </li>
        ))}
      </ul>
        
      <ul className='p-5 h-[95vh] overflow-y-auto border-[2px] space-y-5 border-white rounded-md w-[32%]'>
        <div className='flex items-center gap-[15px] justify-center bg-purple-400 p-5 font-bold text-[25px]'>
          <img src={Comment} alt="Comment" width={30} height={30}/>
          <h2>Comments</h2>
        </div>
        {comments.map(item => (
          <li key={item.id} className='bg-white p-5 rounded-md'>
            <strong className='font-normal'><span className='font-bold'>ID</span>: {item.id}</strong>
            <div className='font-normal'><strong className='font-bold'>Post ID</strong>: {item.postId}</div>
            <h2 className='font-normal'><span className='font-bold'>Name</span>: {item.name}</h2>
            <p className='font-normal'><span className='font-bold'>Email</span>: {item.email}</p>
            <p className='font-normal'><span className='font-bold'>Body</span>: {item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
