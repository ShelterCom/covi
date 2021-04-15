import React from 'react'
import { Link } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'

function Navbar () {
  return (
    <div>
      <ReactBootstrap.Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Link style={{ padding: '6px', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }} to='/'>India's_Covi19_Tracker</Link>
        <Link style={{ padding: '6px', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }} className='lessblue' to='/country'>World Map</Link>
        <ReactBootstrap.Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <ReactBootstrap.Navbar.Collapse id='responsive-navbar-nav'>
          <ReactBootstrap.Nav className='ml-auto'>
            <Link style={{ padding: '6px', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }} className='lessblue' to='/countryStats'>World Stats</Link>
            <Link style={{ padding: '6px', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }} className='lessblue' to='/precaution'>Precautions</Link>
            <Link style={{ padding: '6px', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }} className='lessblue' to='/symptoms'>Symptoms</Link>
            <Link style={{ padding: '6px', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }} className='lessblue' to='/app'>Aarogya Setu</Link>
            <Link style={{ padding: '6px', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }} className='lessblue' to='/news'>News</Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  )
}

export default Navbar
