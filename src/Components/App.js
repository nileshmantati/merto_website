// Website link
// https://demo.theme-sky.com/merto/home-furniture/?color=brown&vertical_menu_style=inside&store_notice=1
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Shoppage from './Shoppage';
import Productpage from './Productpage';
import Blogpage from './Blogpage';
import Aboutuspage from './Aboutuspage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/shoppage" element={<Shoppage />} />
          <Route path="/productpage" element={<Productpage />} />
          <Route path="/blogpage" element={<Blogpage />} />
          <Route path="/aboutuspage" element={<Aboutuspage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
