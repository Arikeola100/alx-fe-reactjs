import './App.css'
import WelcomeMessage from "./components/WelcomeMessage"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile"
import Counter from './components/Counter'

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
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
      <div>
      <Counter/>
      </div>
    </>
  )
}

export default App
