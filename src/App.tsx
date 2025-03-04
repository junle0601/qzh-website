import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Home from "./components/home/Home";
import Pages from "./components/pages/Pages";
import Header from "./components/common/Header";
import cardContainer from "./components/home/card-container";
import Aim from "./components/home/aim";
import JiuJiu from "./components/home/jiujiu";
import Modal from "./components/Modal/Modal";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
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
      <Route path="/" Component={Home}></Route>
      </Routes>
    </Router>
    
    </>
}

export default App;