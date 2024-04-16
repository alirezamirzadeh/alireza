"use clinet"
import React from 'react'
import SideProjectProduct from './SideProjectProduct'

function SideProjects() {
  return (
    <div>
      <h3 className='mb-4 text-xl font-medium'>Side-Projects</h3>
      <div className='grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
        <SideProjectProduct />
        <SideProjectProduct />
        <SideProjectProduct />
        <SideProjectProduct />

      </div>
    </div>
  )
}

export default SideProjects