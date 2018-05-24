import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'


const API_KEY = "AIzaSyCX_J5mm35cszd4wRJlG3-Kik2TssjqY0o"


class App extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term: 'dogs'}, (videos) => {
      this.setState({videos})
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
