import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <main >
      <section className="section-1">
        <Header/>
        <Hero/>
        <Footer/>
      </section>  
    </main>
  );
}

export default App;