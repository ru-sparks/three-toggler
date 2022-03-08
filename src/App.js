import logo from './logo.svg';
import './App.css';
import ClassicToggle from './ClassicToggle';
import HookToggle from './HookToggle';
import HookToggleUseToggle from './HookToggleUseToggle';
function App() {
  return (
    <div className="App">
      <ClassicToggle></ClassicToggle>
      <p>Uses classic React state</p>
      <HookToggle></HookToggle>
      <p>Uses Hook state</p>
      <HookToggleUseToggle on="😎" off="🙂"></HookToggleUseToggle>
      <p>Uses custom Hook</p>
    </div>
  );
}

export default App;
