import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Home from "./components/home/Home";
import Pages from "./components/pages/Pages";
import Header from "./components/common/Header";
import cardContainer from "./components/home/card-container";
import Aim from "./components/home/aim";
import JiuJiu from "./components/home/jiujiu";
import Modal from "./components/Modal/Modal";
import History from "./components/history/history"
import Enquiry from "./components/enquiry/enquiry"
import Footer from "./components/footer/footer"
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom" 
import { useEffect } from "react";
import Guideline from "./components/guideline/guideline";
import Newfeed from "./components/newfeed/newfeed";
import Memories from "./components/memories/memories";
import ChineseEdu from "./components/chineseEdu/chineseEdu";
import ScrollToTop from "./components/common/scrollToTop";

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
      <ScrollToTop/>
      <Header/>
      <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/guideline" Component={Guideline}></Route>
      {/* <Route path="/activity" Component={Newfeed}></Route> */}
      <Route path="/history" Component={History}></Route>
      <Route path="/enquiry" Component={Enquiry}></Route>
      <Route path="/memories" Component={Memories}></Route>
      <Route path="/chineseedu" Component={ChineseEdu}></Route>
      </Routes>
      <Footer/>
    </Router>
    
    </>
}

export default App;