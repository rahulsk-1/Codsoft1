import React from 'react'
import { BrowserRouter,Router, Route,Routes } from 'react-router-dom'
import Nav from './nav/nav'
import About from './about/About'
import Skills from './skills/Skills'
import Contact from './contact/Contact'
import Projects from './projects/Projects'
import Background from './background/Background'
import MyStats from './mystats/MyStats'
const App = () => {
  return (
  
      // 
      <BrowserRouter>
      <Nav></Nav>
      <Background></Background>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contacts' element={<Contact></Contact>}></Route>
        </Routes>
        <MyStats></MyStats>
        
      </BrowserRouter>
 
  )
}

export default App
