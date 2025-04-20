import './App.css';
import MobileDetails from './Redux/MobileDetails';
import { store } from './Redux/store';

function App() {
  
return(
  <div className='App'>
    <header>
  <h1>redux saga learning</h1>
<MobileDetails/>
</header>
</div>
)
}

export default App;
