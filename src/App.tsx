import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import './App.css';
import Home from "./components/home/Home";
import Pages from "./components/pages/Pages";
import Header from "./components/common/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom" 

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

  return <>
    {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}
    {/* <Alert>
      Hello <span>World</span>
    </Alert> */}
    <Router>
      <Header/>
      <Routes>

      </Routes>
    </Router>
    <Home></Home>
    <Pages></Pages>

    </>
}

export default App;