import TopNav from "./components/layouts/TopNav";
import { Routes, Route } from "react-router";
import Messages from "./pages/Messages";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashnoard";
import Settings from "./Settings";
import PersonalInfo from "./pages/PersonalInfo";
import Security from "./pages/Security";
import Notification from "./pages/Notification";
import Payment from "./pages/Payment";
import Privacy from "./pages/Privacy";
import PropertyDetails from "./pages/PropertyProfile"

import LoginAndRegistration from "./pages/AuthPage";
import SplashScreen from "./pages/SplashScreen";
import Properties from "./Properties";
import AuthPage from "./pages/AuthPage";

// import PersonalInfo from './pages/PersonalInfo'
function App() {
  return (
    <Routes>
      <Route index element={<SplashScreen />} />
      <Route path="/" element={<TopNav />}>
        <Route path="/messages" element={<Messages />} />
        <Route path="/discover" element={<PropertyDetails />} />
        <Route path="/properties" element={<Marketplace />} />
      </Route>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/profile" element={<Profile />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/add-new-property" element={<Properties />} />
      <Route path="/setting" element={<Settings />}>
        <Route path="/setting/personal-info" element={<PersonalInfo />} />
        <Route path="/setting/security" element={<Security />} />
        <Route path="/setting/notification" element={<Notification />} />
        <Route path="/setting/payment" element={<Payment />} />
        <Route path="/setting/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}

export default App;
