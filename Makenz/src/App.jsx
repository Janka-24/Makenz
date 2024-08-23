import TextReveal from "@/components/magicui/text-reveal";
import Header from "@/components/local/header";
import Home from "@/components/local/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yo" element={<h1>yo man</h1>} />
      </Routes>
    </Router>
  );
}
