import TopNav from './components/layouts/TopNav'
import {Routes,Route} from "react-router"
import Messages from './pages/Messages'
import Marketplace from './pages/Marketplace'
// import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashnoard'
import Settings from './Settings'
import Security from './pages/Security'
import Education from './Education'

import LoginAndRegistration from './components/LoginAndRegistration'

// import PersonalInfo from './pages/PersonalInfo'
function App() {


  return (
    <Routes>
      <Route path="/" element={<TopNav />}>
        <Route index element={<Marketplace />}></Route>
        <Route path='messages' element={<Messages />}></Route>
        <Route path='discover' element={<Education />}></Route>
        <Route path='/loginandregistration' element={<LoginAndRegistration/>}></Route>
      </Route>
      <Route path='profile' element={<Profile/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
      <Route path='setting' element={<Settings/>}>
        {/* <Route index element={<PersonalInfo/>} />
        <Rout path='Personal Info' element={<PersonalInfo/>} /> */}
        <Route index element={<Security/>}/>
        <Route path='security' element={<Security/>}/>
      </Route>
    </Routes>
  );
}

export default App
