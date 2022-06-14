import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Layout from "./components/layout/Layout";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Trainers from './components/pages/Trainers';
import Blog from './components/pages/Blog';
import BasicForm from "./components/Forms/BasicForm";
import Footer from "./components/pages/Footer";
import Auth from "./components/pages/Auth";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  return (
    <Fragment>
      <Layout>
        {!isAuth && <Auth />}
        {/* <SignIn /> */}
        <Routes>
          <Route path="/" element={isAuth && <Home />} exact />
          
          <Route path="/about" element={ isAuth &&<About />} />
          <Route path="/trainee" element={isAuth &&<Trainers />} />
          <Route path="/blog" element={isAuth &&<Blog />} />
          <Route path="/basicform" element={isAuth &&<BasicForm />} />
        </Routes>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
