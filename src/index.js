import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import _ from 'lodash'

const API_KEY = "AIzaSyCX_J5mm35cszd4wRJlG3-Kik2TssjqY0o"

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.videoSearch(this.state.term)
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar videoSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
