import Navbar from "./components/Navbar";
import Props from "./components/react property/props/Prop";
import Usestates from "./components/react property/hooks/Usestates";
function App() {
  return (
    <div>
      <Navbar title="Changer" home="Home" Aboutus="About us" />
      {/* <Props title="Props In React" description="Description" /> */}
      <Usestates header="Enter your text here"/>
    </div>
  );
}
export default App;
