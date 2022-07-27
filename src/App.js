import './App.css';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <SearchForm />
      <Navigation />
      <PhotoList />
      <NotFound />
    </div>
  );
}

export default App;

