import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { animals } from './data.js';

function App() {
  return (
    <div>
      <Header greeting="Boy Howdy!"/>
      <Main animals={animals} />
      <Footer email="farmer@clayton.com"/>
    </div>
  );
}

export default App;
