import * as React from 'react'
const title = 'React'
function getTitle(title) {
  return title
}
function App() {
  return (
    <div>
      <h1>Hello {getTitle(title)}</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text'></input>
    </div>

  );
}

export default App;