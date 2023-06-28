import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Inbox } from "./pages/Inbox";
import { EmailDetails } from "./pages/EmailDetails";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";

function App() {
  return (
    <div>
      <h1>Tushar Anekar's mail box</h1>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Inbox />}></Route>
          <Route path="/emails/:emailId" element={<EmailDetails />}></Route>
          <Route path="/spam" element={<Spam />}></Route>
          <Route path="/trash" element={<Trash/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
