import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import LocationScreen from "./screens/PackagesScreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import ProfileScreen from "./screens/Profilescreen";
import AdminScreen from "./screens/AdminScreen";
import AboutScreen from "./screens/AboutScreen";
import Footer from "./components/Footer";
import ContactScreen from "./screens/ContactScreen";
import BookPackage from "./screens/BookPackage";
import BookingsScreen from "./screens/BookingsScreen";
import { AddNewPackageScreen } from "./screens/AddNewPackageScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingScreen />} />
          <Route path="/home" exact element={<HomeScreen />} />
          <Route path="/home" exact element={<LocationScreen />} />
          <Route path="/contact" exact element={<ContactScreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/profile" exact element={<ProfileScreen />} />
          <Route path="/admin" exact element={<AdminScreen />} />
          <Route
            path="/admin/new-package"
            exact
            element={<AddNewPackageScreen />}
          />
          <Route path="/bookings" exact element={<BookingsScreen />} />
          <Route path="/about" exact element={<AboutScreen />} />

          <Route path="/package/:id" exact element={<BookPackage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
