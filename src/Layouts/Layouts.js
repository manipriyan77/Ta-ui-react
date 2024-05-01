import React from 'react'
import Header from './Header/Header'
import Sidebar from './SideBar/Sidebar'
import Dashboard from '../Pages/Dashboard/Dashboard'
import './Layouts.scss'

export default function Layouts() {
  return (
    <>
      <div className='layout'>
        <Header />
        <div className='main'>
          <Sidebar />
          <Dashboard />
        </div>
      </div>

    </>
  )
}
