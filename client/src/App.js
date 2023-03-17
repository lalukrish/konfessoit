import "./App.css";
import Cards from "./components/cards";
import Form from "./components/form";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Getall from "./components/Getall";

function App(props) {
  return (
    <>
      {/* <Header /> */}

      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Cards />} />
          <Route path="/form" element={<Form />} />
          <Route path="/getall" element={<Getall />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
