import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../components/App";
import LogInPage from "../components/pages/LogInPage";
import SignUpPage from "../components/pages/SignUpPage";
import HomePage from "../components/pages/HomePage";
import AccountPage from "../components/pages/AccountPage";
import AboutPage from "../components/pages/AboutPage";
import ContactUsPage from "../components/pages/ContactUsPage";
import BookingPage from "../components/pages/BookingPage";
import OffersPage from "../components/pages/OfferPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/offers" element={<OffersPage />} />
    </Route>
  )
);

export { router };
