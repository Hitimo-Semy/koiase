import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import EndPage from "./endpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4/>}/>
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </Router>
  );
}

export default App;
