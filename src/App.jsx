import './App.css'
import Cards from './components/Cards'
import Footer from './components/footer'
import MaisProcurados from './components/MaisProcurados'
import NavBar from './components/NavBar'
import Slide from './components/Slide'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slide />
      <Cards />
      <MaisProcurados />
      <Footer />
    </div>
  )
}

export default App
