import "./index.css";
import Main from "./components/Main.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayingVideo from "./components/Playing-Video";
function App() {
  return (
    <div className="App w-full min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/itemId" element={<PlayingVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
