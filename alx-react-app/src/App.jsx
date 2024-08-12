import './App.css'
import WelcomeMessage from "./components/WelcomeMessage"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile"

function App() {

  return (
    <>
      
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
      <div>
      <UserProfile name = "Blessing Ajayi" age = "25" Bio = "loves reading and outdoor camping." />
      </div>
    </>
  )
}

export default App
