import "./App.css";
import Circuit from "./components/Circuit";
import Employee from "./components/Employee";
import MultiState from "./components/MultiState";
import Spread from "./components/Spread";

/*let a = "Apples";
a = "Mangoes";
let b = "Banana";*/

const user = {
  name: "Shiva",
  city: "Hyderabad",
  area: "Ameerpet",
};

const myCar = {
  model: "Maruti",
  year: "2022",
  dealer: "Nixon",
  color: "red",
};
function App() {
  return (
    <div className="App">
      {/*<ChildComponent car={myCar} />

      <UseEffect />
      <TernaryOperator />
      <ClickEvent />
      <EventListeners /> 
      <h2>Welcome to React</h2>
      <FormExample />
      <SampleArray /> 
      <SampleArrayObject /> 
      <NestedObjects /> 
      <TempLit /> 
      <UserPage /> 
      <Employee /> 
      <Circuit />
      <Spread />  */}
      <MultiState />
    </div>
  );
}

export default App;
