import './App.scss';
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Header />
      <Options />
      <Modal />
    </div>
  );
}

export default App;
