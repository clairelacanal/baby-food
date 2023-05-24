
import './App.css';
import CreateAccountForm from './Components/Auth/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import CardPots from './Components/Recettes/Components/CartesPots/CartesPots';
import CardDme from './Components/Recettes/Components/CartesDME/CartesDme';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CreateAccountForm/>
      <CardPots/>
      <CardDme/>
    </div>
  );
}

export default App;
