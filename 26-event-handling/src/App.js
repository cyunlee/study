
import './App.css';
import ColorEx from './components/ex/ColorEx';
import HandlerEx from './components/ex/HandlerEx';
import ShowAndVanish from './components/ex/Show';


function App() {
  return (
    <div className="App">
      <HandlerEx />
      <hr />
      <ColorEx />
      <hr />
      <ShowAndVanish />
    </div>
  );
}

export default App;
