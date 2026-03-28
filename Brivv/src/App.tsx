import { useState } from "react";
import TopNav from "./components/layouts/TopNav";
import { Routes, Route } from "react-router";
import Messages from "./pages/Messages";
import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Dashboard/Settings";
import PersonalInfo from "./components/Personal-info/PersonalInfo";
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
import PublicRoute from "./components/PublicRoute";
import Utilities from "./pages/Dashboard/Utilites";

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
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <AuthLayout />
          </PublicRoute>
        }
      >
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
        <Route path="properties" element={<Marketplace />} />
        <Route path="utilities" element={<Utilities />} />
        <Route path="settings" element={<Settings />}>
          <Route path="profile" element={<PersonalInfo />} />
          <Route path="account-security" element={<Security />} />
          <Route path="notification-preferences" element={<Notification />} />
          <Route path="payment-methods" element={<Payment />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Route>
      <Route path="/add-new-property" element={<Properties />} />
    </Routes>
  );
}

export default App;
