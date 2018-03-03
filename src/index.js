import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import XMLParser from 'react-xml-parser';
import SearchBar from './components/search_bar';
import ImageList from './components/image_list';
import VideoDetail from './components/video_detail';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         images: [],
         selectedImage: null,
         theText: 'not yet loaded'
      };

      this.imageSearch('');
   }

   imageSearch(term) {
      fetch('Traffic_Camera_Locations_En.xml')
         .then((response) => response.text())
         .then((responseText) => {
            const images = new XMLParser().parseFromString(responseText).children;
            const results = images.filter(image => image.getElementsByTagName('description')[0].value.toLowerCase().includes(term.toLowerCase()));
            this.setState({
               images: results,
               selectedImage: null,
               theText: results.length.toString()
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
            <ImageList
               onImageSelect={selectedImage => this.setState({selectedImage}) }
               images={this.state.images} />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));
