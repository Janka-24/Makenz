import TextReveal from "@/components/magicui/text-reveal";
import Header from "@/components/local/header";
import Footer from "@/components/local/footer";
import Reservation from "@/components/local/reservation";
import Home from "@/components/local/home";
import About from "@/components/local/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </Router>
  );
}
