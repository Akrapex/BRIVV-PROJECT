import TopNav from './components/TopNav'
import {Routes,Route} from "react-router"
import Messages from './pages/Messages'
import Marketplace from './pages/Marketplace'
// import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashnoard'
import Settings from './Settings'
import Security from './pages/Security'
import Education from './Education'
function App() {


  return (
    <Routes>
      <Route path="/" element={<TopNav />}>
        <Route index element={<Marketplace />}></Route>
        <Route path='messages' element={<Messages />}></Route>
        <Route path='discover' element={<Education />}></Route>
      </Route>
      <Route path='profile' element={<Profile/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
      <Route path='setting' element={<Settings/>}>
        <Route index element={<Security/>}/>
        <Route path='security' element={<Security/>}/>
      </Route>
    </Routes>
  );
}

export default App
