import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavigationBar from "./components/NavigationBar";
import StargazingGuide from "./pages/StargazingGuide";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/stargazing" element={<StargazingGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
