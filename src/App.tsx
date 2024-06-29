import { Route, Routes } from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar";
import About from "./Containers/About";
import Contacts from "./Containers/Contacts";
import Posts from "./Containers/Posts";
import PostInfo from "./Components/PostInfo";
import AddForm from "./Containers/AddForm";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="/post/:postId" element={<PostInfo />} />
          <Route path="/new-post" element={<AddForm />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
