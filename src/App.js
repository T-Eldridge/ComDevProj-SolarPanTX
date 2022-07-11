import './App.css';
import Greet from './Components/navigation';
import Footer from './Components/footer';
import About from './Components/about';
import Value from './Components/value';
import Last from './Components/last';
import Pannels from './Components/pannels';
import Cost from './Components/cost';
import Contact from './Components/contact';

function App() {
  return (
    <div>
      
      <div className='App'>
        <header className='Navigation'><Greet />   
        </header>
        <div ><About/>
        </div>
        <div ><Value/>
        </div> 
        <div ><Last/>
        </div> 
        <div ><Pannels/>
        </div> 
        <div ><Cost/>
        </div> 
        <div ><Contact/>
        </div>
        <footer className='Footer'><Footer/>
        </footer>
      </div>
      

      
    </div>
  );
}

export default App;
