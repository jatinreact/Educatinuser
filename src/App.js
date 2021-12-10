import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Support from "./Components/Support/Support";
import AskedQuestion from "./Components/AskedQuestion/AskedQuestion";
import Resources from "./Components/Resources/Resources";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Search_chapter from "./Components/Search_chapter/Search_chapter";
import Otp from "./Components/Otp_Verify/Otp";
import Contact from "./Components/Contact/Contact";

////admin

import AdminHome from "./Components/Admin/AdminHome/AdminHome";
import AdminLogin from "./Components/Admin/AdminRegister/AdminLogin";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/faq" component={AskedQuestion} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Search_chapter" component={Search_chapter} />
        <Route exact path="/Otp" component={Otp} />
        <Route exact path="/contact" component={Contact} />

        {/* //admin */}
        <Route exact path="/adminHome" component={AdminHome} />
        <Route exact path="/adminLogin" component={AdminLogin} />
      </Switch>
    </>
  );
}

export default App;
