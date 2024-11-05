import About from './About'
import './App.css'
import Contact from './Contact'
import Experience from './Experience'
import ResponsiveNavbar from './Header'
import Home from './Home'

function App() {

  return (
    <>
      <ResponsiveNavbar/>
      <Home/>
      <About/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
