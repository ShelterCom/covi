import React from 'react'
import { Link } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'

function Navbar () {
  return (
    <div>
      <ReactBootstrap.Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <ReactBootstrap.Navbar.Brand><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/'>India's_Covi19_Tracker</Link></ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/country'>World Map</Link></ReactBootstrap.Nav.Link>
        <ReactBootstrap.Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <ReactBootstrap.Navbar.Collapse id='responsive-navbar-nav'>
          <ReactBootstrap.Nav className='ml-auto'>
            <ReactBootstrap.Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/countryStats'>World Stats</Link></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/precaution'>Precautions</Link></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/symptoms'>Symptoms</Link></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/app'>Aarogya Setu</Link></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/news'>News</Link></ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  )
}

export default Navbar
