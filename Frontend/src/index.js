import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactTab from "./components/routes/contactTab/ContactTab";
import WelcomeTab from "./components/routes/welcomeTab/WelcomeTab";
import Footer from "./components/const/footer/Footer";
import AttractionsTab from "./components/routes/attractionsTab/AttractionsTab";
import HotelTab from "./components/routes/hotelTab/HotelTab";
import RestaurantTab from "./components/routes/restaurantTab/RestaurantTab"
import SalaryTab from "./components/routes/salaryTab/SalaryTab";
import SpaTab from './components/routes/spaTab/SpaTab';
import NavigationBar from "./components/const/navigationBar/NavigationBar";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <NavigationBar />
    <Routes>
      <Route path="/" element={<WelcomeTab />} />
      <Route path="contact" element={<ContactTab />} />
      <Route path="attractions" element={<AttractionsTab />} />
      <Route path="hotel" element={<HotelTab />} />
      <Route path="restaurant" element={<RestaurantTab />} />
      <Route path="salary" element={<SalaryTab />} />
      <Route path="spa" element={<SpaTab />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  rootElement
);
