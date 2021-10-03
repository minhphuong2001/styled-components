import './App.css';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Product heading="Choose Your Favorites" />
      <Banner />
      <Product heading="Sweet Treat For You" />
      <Footer/>
    </div>
  );
}

export default App;
