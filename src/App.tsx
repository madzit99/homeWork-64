import { Route, Routes } from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar"
import About from "./Containers/About";
import Contacts from "./Containers/Contacts";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
