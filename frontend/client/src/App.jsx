import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventPage'
import Footer from './components/footer'
import NotesPage from './pages/NotesPage'
import MarketplacePage from './pages/MarketplacePage'
import ProfilePage from './pages/ProfilePage'
import UpdateEventPage from './pages/UpdateEventPage'
import UpdateItemPage from './pages/UpdateItemPage'
import UpdateNotePage from './pages/UpdateNotePage'




function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path='/events' element={<EventsPage/>}></Route>
          <Route path='/notes' element={<NotesPage/>}></Route>
          <Route path='/marketplace' element={<MarketplacePage/>}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
          <Route path='/events/update/:id' element={<UpdateEventPage/>}></Route>
          <Route path='/marketplace/update/:id' element={<UpdateItemPage/>}></Route>
          <Route path='/notes/update/:id' element={<UpdateNotePage/>}></Route>
       </Routes>
       <Footer/>  
    </Router>
    
  )
}

export default App
