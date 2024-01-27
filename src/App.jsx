import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactUs from './components/ContactUs/ContactUs'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactUs/>
      </main>
    </>
  )
}

export default App
