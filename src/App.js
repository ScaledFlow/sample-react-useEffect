// https://www.youtube.com/watch?v=0ZJgIjIuY7U
// jsonplaceholder.typicode.com

import React, { useState, useEffect } from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts');

  // rerenders only when resourceType changes
  // return runs first and is for cleanup code
  // return can be used to unsubscript from an api for example
  useEffect(() => {
    console.log('resource changed')

    return () => {
      console.log('return from resource change')
    }
  }, [resourceType])

  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
  </>
  )
}

export default App;
