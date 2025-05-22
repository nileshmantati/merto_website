// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Header />} />
        {/* <Route path="step-3" element={<StepThree />} /> */}
      </Routes>
    </div>
  );
}

export default App;
