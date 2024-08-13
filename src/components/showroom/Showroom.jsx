import React from 'react'
import OffPlan from './OffPlan'

const Showroom = () => {
  return (
    <section className="flex flex-col w-full h-[450px] border border-blue-500">
      <h2 className='w-full text-center font-bold text-white font-bona text-xl p-2'>Hot 🔥 Off-Plan Projects</h2>
      <OffPlan />
    </section>
  )
}

export default Showroom