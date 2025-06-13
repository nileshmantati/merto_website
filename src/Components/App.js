// Website link
// https://demo.theme-sky.com/merto/home-furniture/?color=brown&vertical_menu_style=inside&store_notice=1
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import Homepage from './Homepage';
import Shoppage from './Shoppage';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/shoppage" element={<Shoppage />} />
      </Routes>
    </div>
  );
}

export default App;
