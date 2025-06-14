// Website link
// https://demo.theme-sky.com/merto/home-furniture/?color=brown&vertical_menu_style=inside&store_notice=1
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import Homepage from './Homepage';
import Shoppage from './Shoppage';
import Productpage from './Productpage';
import Blogpage from './Blogpage';
import Aboutuspage from './Aboutuspage';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/shoppage" element={<Shoppage />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/aboutuspage" element={<Aboutuspage />} />
      </Routes>
    </div>
  );
}

export default App;
