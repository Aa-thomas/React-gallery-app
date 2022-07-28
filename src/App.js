import './App.css';
import React from 'react';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoList from './components/PhotoList';
import apiKey from './config';
import axios from 'axios';


export default class App extends React.Component {

  state = {
    photos: []
  };
  
  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'explore') => {
    const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    axios.get(flickrUrl)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      });
  }

  render() {
    console.log(this.state.photos)
    return (
      <div>
        <SearchForm onSearch={this.performSearch} />
        <Navigation />
        <PhotoList data={this.state.photos} />
      </div>
    );
  }
}
