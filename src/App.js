import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componets/pages/home';
import Company from './componets/pages/company';
import Contact from './componets/pages/contact';
import NewProject from './componets/pages/newproject';
import Projects from './componets/pages/projects';

import Container from './componets/layout/Container';
import NavBar from './componets/layout/NavBar'
import Footer from './componets/layout/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass='min-heigth'>
        <Routes>

          <Route exact path='/' element={<Home />} />

          <Route path='/projects' element={<Projects />}/>

          <Route path='/company' element={<Company />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/newproject' element={<NewProject />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
