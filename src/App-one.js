// https://www.youtube.com/watch?v=0ZJgIjIuY7U
// jsonplaceholder.typicode.com

import React, { useState, useEffect } from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  // rerenders only when resourceType changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item => {
      return <pre>{JSON.stringify(item)}</pre>
    })}
  </>
  )
}

export default App;
