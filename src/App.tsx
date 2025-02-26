import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import './App.css';
import Home from "./components/Home";

function App(){
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
];

const handleSelectItem = (item: string) => {
  console.log(item)
}

  return <div>
    {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}
    {/* <Alert>
      Hello <span>World</span>
    </Alert> */}
    <Home></Home>
    </div>
}

export default App;