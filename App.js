import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  
  return (
    <div className="App">
    <header id="header">
      <AppHeader/>
    </header> 
    <main>
     <AppHero/>
     <AppAbout/>
     <AppServices/>
     <AppContact/>
    </main>
   <footer id="footer">
      <AppFooter/>
   </footer> 
    </div>
  )
}

export default App;
