import { useState } from 'react'
import './App.css'
import Content from './Content';

function App() {

  return (
    <div className="App">
      <h1>mind milk</h1>
      <h2>write your thoughts</h2>

      <label for="font">Font: </label>
      <select name='font'>
        <option>Helvetica</option>
      </select>
      <Content/>
    </div>
  )
}

export default App
