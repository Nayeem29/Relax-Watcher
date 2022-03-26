import './App.css';
import Header from './Components/Header/Header';
import Conceptual from './Components/Question-Section/Conceptual';
import Shop from './Components/ShopContent/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Conceptual></Conceptual>
    </div>
  );
}

export default App;
