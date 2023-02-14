
import './App.css';
import Image from "./assests/image.jpg";

function App() {
  const x=10;
  var text;
 if(x === 10)
 {
  text="equal";
 } else{
  text="not equal";
 }

  return(
  <div className="App">
    <h1>hello world</h1>
    <p> This is paragraph</p>
    <h3> {5 +50}</h3>
    <img src={Image} alt="pic" width="200px" />
    <h3>{text}</h3>
    <h2>{x>=10 ? "greater":"lesser"}</h2>
    </div>
  );
}

export default App;
