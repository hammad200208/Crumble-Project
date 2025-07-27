import './App.css'
import Card from './components/Card'
import Customer from './components/Customer'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import KahaniCrumble from './components/KahaniCrumble'

function App() {
  return (
    <>
      <Header />
      <Home />
      <KahaniCrumble />
      <Card />
      <Customer />
      <Faqs />
      <Footer />
    </>
  )
}

export default App
