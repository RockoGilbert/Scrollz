import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import "./index.css";
import TextBox from "./components/TextBox";



function App() {
  return (
    <div>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
      <TextBox />
    </div>
  );
}

export default App;