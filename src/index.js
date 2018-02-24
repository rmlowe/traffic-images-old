import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import XMLParser from 'react-xml-parser';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         images: [],
         selectedVideo: null,
         theText: 'not yet loaded'
      };

      this.imageSearch('');
   }

   imageSearch(term) {
      fetch('Traffic_Camera_Locations_En.xml')
         .then((response) => response.text())
         .then((responseText) => {
            this.setState({
               images: new XMLParser().parseFromString(responseText).children,
               selectedVideo: null,
               theText: new XMLParser().parseFromString(responseText).children.length.toString()
            });
         });
      // YTSearch({key: API_KEY, term: term}, (videos) => {
      //    this.setState({
      //       videos: videos,
      //       selectedVideo: videos[0]
      //    });
      // });
   }

   render() {
      const imageSearch = _.debounce((term) => { this.imageSearch(term) }, 300);

      return (
         <div>
            <SearchBar onSearchTermChange={imageSearch} />
            <div>{this.state.theText}</div>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
               onImageSelect={selectedVideo => this.setState({selectedVideo}) }
               images={this.state.images} />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));
