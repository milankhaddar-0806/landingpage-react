import Home from './Components/Home.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration:1000
});


function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App