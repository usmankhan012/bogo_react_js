import './App.css';
import './Responsive.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';


function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />

    </>
  );
}

export default App;
