import './App.css';
import React from 'react';
import Error404 from './components/Error404';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoList from './components/PhotoList';
import apiKey from './config';
import axios from 'axios';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

class App extends React.Component {

  state = {
    photos: [],
    sunsets: [],
    waterfalls: [],
    rainbows: [],
    loading: true,
  };
  
  componentDidMount() {
    this.performSearch();
    this.performSearch('sunsets');
    this.performSearch('rainbows');
    this.performSearch('waterfalls');
  }
  
  performSearch = (query) => {
    const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    axios.get(flickrUrl)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      if (query === 'sunsets') {
        this.setState({
          sunsets: response.data.photos.photo,
          loading: false
        })};
      if (query === 'rainbows') {
        this.setState({
          rainbows: response.data.photos.photo,
          loading: false
        })};
      if (query === 'waterfalls') {
        this.setState({
          waterfalls: response.data.photos.photo,
          loading: false
        })};
        
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      });
    
  }

  render() {
    
    console.log(this.state.photos)
    return (
      
      <div>
      <BrowserRouter>
        <h1>React Gallery</h1>
        <SearchForm onSearch={this.performSearch} />
        <Navigation />        
        {
          (this.state.loading) ? 
            <p>Loading...</p>
          : <Routes>                
              <Route exact path="/" element={<PhotoList data={this.state.photos} />} />
              <Route path="/sunsets" element={<PhotoList data={this.state.sunsets} />} />
              <Route path="/waterfalls" element={<PhotoList data={this.state.waterfalls} /> }/>
              <Route path="/rainbows" element={<PhotoList data={this.state.rainbows} />}/>
              <Route path="/:query" element={<PhotoList data={this.state.photos}  />} />
              <Route path="*" element={<Error404 />} />
            </Routes> 
        }
        </BrowserRouter>
      </div>
      
    );
    
  }
}

export default App;
