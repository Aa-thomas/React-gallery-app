import './App.css';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import Photos from './components/Photos';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <SearchForm />
      <Navigation />
      <Photos />
      <NotFound />
    </div>
  );
}

export default App;
