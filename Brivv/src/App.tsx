import { useState } from "react";
import TopNav from "./components/layouts/TopNav";
import { Routes, Route } from "react-router";
import Messages from "./pages/Messages";
import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard";
import Settings from "./Settings";
import PersonalInfo from "./pages/PersonalInfo";
import Security from "./pages/Security";
import Notification from "./pages/Notification";
import Payment from "./pages/Payment";
import Privacy from "./pages/Privacy";
import PropertyDetails from "./pages/PropertyProfile";

import SplashScreen from "./pages/SplashScreen";
import Properties from "./Properties";
import AuthPage from "./pages/AuthPage";
import ConfirmEmail from "./components/Auth/ConfirmEmail";
import AuthLayout from "./components/Auth/AuthLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import CallBack from "./components/Auth/CallBack";

// import PersonalInfo from './pages/PersonalInfo'
function App() {
  const [active, setActive] = useState<"login" | "register">("login");
  return (
    <Routes>
      <Route index element={<SplashScreen />} />
      <Route path="/" element={<TopNav />}>
        <Route path="/messages" element={<Messages />} />
        <Route path="/discover" element={<PropertyDetails />} />
        <Route path="/properties" element={<Marketplace />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route
          index
          element={<AuthPage active={active} setActive={setActive} />}
        />
        <Route path="confirm-email" element={<ConfirmEmail />} />
        <Route path="callback" element={<CallBack />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
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
