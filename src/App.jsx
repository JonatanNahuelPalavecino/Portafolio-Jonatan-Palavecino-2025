import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/Project/Project";
import Layout from "./components/Layout/Layout";
import "./App.scss";
import Loading from "./components/Loading/Loading";
import Auth from "./components/Auth/Auth";
import { Toaster } from "sonner";
import { ContextProvider } from "./components/Context/ContextProvider.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/sign-in" element={<Auth type={"sign-in"} />} />
              <Route path="/sign-up" element={<Auth type={"sign-up"} />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
          <Footer />
          <Loading />
          <Toaster richColors />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
