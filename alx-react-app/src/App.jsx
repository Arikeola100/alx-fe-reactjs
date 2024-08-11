import './App.css'
import UserProfile from "./components/UserProfile"
import WelcomeMessage from "./components/WelcomeMessage"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
function App() {

  return (
    <>
     <div>
     <UserProfile name = "Blessing" age = "25" Bio = "loves reading and outdoor camping." />
     </div>
      <div>
      <WelcomeMessage />
      </div>
      <div>
      <Header />
      </div>
      <div>
      <MainContent />
      </div>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default App
