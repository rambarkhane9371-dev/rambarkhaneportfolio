import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RamBarkhaneLuxury from "./components/RamBarkhaneLuxury";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RamBarkhaneLuxury />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
