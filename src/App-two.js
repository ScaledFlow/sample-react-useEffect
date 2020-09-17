// https://www.youtube.com/watch?v=0ZJgIjIuY7U
// jsonplaceholder.typicode.com

import React, { useState, useEffect } from 'react';

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [windowHeight, setwindowHeigth] = useState(window.innerHeight);

const handleResizeWidth = () => {
  setwindowWidth(window.innerWidth)
}

const handleResizeHeight = () => {
  setwindowHeigth(window.innerHeight)
}

useEffect(() => {
  window.addEventListener('resize', handleResizeWidth)
}, [])

useEffect(() => {
  window.addEventListener('resize', handleResizeHeight)
}, [])

  return (
  <div>
    <h2>{windowWidth}</h2>
    <h2>{windowHeight}</h2>
  </div>
)
}

export default App;
