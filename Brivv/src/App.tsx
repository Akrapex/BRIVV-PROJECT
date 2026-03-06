import TopNav from "./components/layouts/TopNav";
import { Routes, Route } from "react-router";
import Messages from "./pages/Messages";
import Marketplace from "./pages/Marketplace";
// import Discover from './pages/Discover'
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashnoard";
import Settings from "./Settings";
import PersonalInfo from "./pages/PersonalInfo";
import Security from "./pages/Security";
import Notification from "./pages/Notification";
import Payment from "./pages/Payment";
import Privacy from "./pages/Privacy";
import Education from "./Education";

import LoginAndRegistration from "./components/LoginAndRegistration";

// import PersonalInfo from './pages/PersonalInfo'
function App() {
  return (
    <Routes>
      <Route path="/" element={<TopNav />}>
        <Route index element={<Marketplace />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/discover" element={<Education />}></Route>
      </Route>
      <Route
        path="/login"
        element={<LoginAndRegistration />}
      ></Route>
      <Route path="/profile" element={<Profile />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/setting" element={<Settings />}>
        <Route path='/setting/personal-info' element={<PersonalInfo/>} />

        <Route path="/setting/security" element={<Security />} />
        <Route path="/setting/notification" element={<Notification />}/>
        <Route path="/setting/payment" element={<Payment/>}/>
        <Route path="/setting/privacy" element={<Privacy/>}/>
      </Route>
    </Routes>
  );
}

export default App;
