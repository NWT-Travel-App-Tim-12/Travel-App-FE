import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/Homescreen";
import { Layout } from "./components/Layout";
import LocationScreen from "./screens/PackagesScreen";
import Registerscreen from "./screens/Registerscreen";
import { LoginScreen } from "./screens/LoginScreen";
import ProfileScreen from "./screens/Profilescreen";
import AdminScreen from "./screens/AdminScreen";
import AboutScreen from "./screens/AboutScreen";
import Footer from "./components/Footer";
import BookingsScreen from "./screens/BookingsScreen";
import { AddNewPackageScreen } from "./screens/AddNewPackageScreen";
import { AddNewRegionScreen } from "./screens/AddNewRegionScreen";
import { AddNewBookingScreen } from "./screens/AddNewBookingScreen";
import { AddNewAgencyScreen } from "./screens/AddNewAgencyScreen";
import { AddNewCurrencyScreen } from "./screens/AddNewCurrencyScreen";
import { Session } from "./api/sessionStorage";
import React, { useState } from "react";
import PaymentScreen from "./screens/PaymentScreen";

export const UserContext = React.createContext({
  user: null,
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState(Session.getUser());
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route index element={<LandingScreen />} />
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/location" element={<LocationScreen />} />
                    <Route path="/register" element={<Registerscreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/admin" element={<AdminScreen />} />
                    <Route
                      path="/admin/new-package"
                      element={<AddNewPackageScreen />}
                    />
                    <Route
                      path="/admin/new-region"
                      element={<AddNewRegionScreen />}
                    />
                    <Route
                      path="/admin/new-agency"
                      element={<AddNewAgencyScreen />}
                    />
                    <Route
                      path="/admin/new-currency"
                      element={<AddNewCurrencyScreen />}
                    />
                    <Route path="/bookings" element={<BookingsScreen />} />
                    <Route path="/about" element={<AboutScreen />} />
                    <Route
                      path="/package/:id"
                      element={<AddNewBookingScreen />}
                    />
                    <Route path="/payment/:bookingId" element={<PaymentScreen/>}></Route>
                  </Routes>
                </Layout>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
