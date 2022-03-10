import logo from './logo.svg';
import './App.css';
import ClassicToggle from './ClassicToggle';
import HookToggle from './HookToggle';
import HookToggleUseToggle from './HookToggleUseToggle';


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function App() {
  return (
    <div className="App">
      <ClassicToggle></ClassicToggle>
      <p>Uses classic React state</p>
      <HookToggle></HookToggle>
      <p>Uses Hook state</p>
      <HookToggleUseToggle on="😎" off="🙂"></HookToggleUseToggle>
      <p>Uses custom Hook + props</p>
      <HookToggleUseToggle on={String.fromCharCode(0xD83D, 0xDE00)} off={String.fromCharCode(0xD83D, 0xDE4F)}></HookToggleUseToggle>
      <p>Uses custom Hook + props + surrogate pair</p>
      <HookToggleUseToggle on={String.fromCharCode(0xD83D, getRandom(0xDE00,0xDE50))} off={String.fromCharCode(0xD83D, getRandom(0xDE00,0xDE50))}></HookToggleUseToggle>
      <p>Uses custom Hook + props + random surrogate pair</p>
    </div>
  );
}


function surrogateCalculator(codepoint){
  // constant
  const LEAD_OFFSET = 0xD800 - (0x10000 >> 10);
  const SURROGATE_OFFSET = 0x10000 - (0xD800 << 10) - 0xDC00;

  // computations
  const lead = LEAD_OFFSET + (codepoint >> 10);
  const trail = 0xDC00 + (codepoint & 0x3FF);
  return [lead,trail];
}

function printSurrogatePair(codePoint){
  let [lead,trail] = surrogateCalculator(codePoint);
  let outputText = 'The UTF16 surrogate pair for '+codePoint+' is \\u'+lead.toString(16).toUpperCase()+'\\u'+trail.toString(16).toUpperCase()+' ('+String.fromCodePoint(codePoint)+')';
  console.log(outputText);
}

export default App;
