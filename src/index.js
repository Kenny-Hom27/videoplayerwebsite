import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar'


const API_KEY = "AIzaSyCX_J5mm35cszd4wRJlG3-Kik2TssjqY0o"

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
