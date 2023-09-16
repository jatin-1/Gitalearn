import "./styles.css";
import Navbar from "./components/Navbar";
import Homeindex from "./routes/Homeindex";
import Chapterindex from "./routes/Chapterindex";
import Quotesindex from "./routes/Quotesindex";
import Aboutindex from "./routes/Aboutindex";
import Gptindex from "./routes/Gptindex";
import Signupindex from "./routes/Signupindex";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homeindex />} />
        <Route path="/Chapterindex" element={<Chapterindex />} />
        <Route path="/Quotesindex" element={<Quotesindex />} />
        <Route path="/Aboutindex" element={<Aboutindex />} />
        <Route path="/Gptindex" element={<Gptindex />} />
        <Route path="/Signupindex" element={<Signupindex />} />
      </Routes>

      {/* <Navbar /> */}
    </div>
  );
}
