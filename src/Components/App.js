// Website link
// https://demo.theme-sky.com/merto/home-furniture/?color=brown&vertical_menu_style=inside&store_notice=1
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import Header from './Header';
import Homeslider from './Homeslider';
import Facilities from './Facilities';
import Week_sales from './Week_sales';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Header />} />
        {/* <Route path="step-3" element={<StepThree />} /> */}
      </Routes>
      <Homeslider />
      <Facilities />
      <Week_sales />
    </div>
  );
}

export default App;
