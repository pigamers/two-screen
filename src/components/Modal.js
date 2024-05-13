import React from 'react'

export default function Modal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "modalContainer") onClose();
  }

  if (!visible) return null;

  const detail = JSON.parse(localStorage.getItem('selected show'));
  return (
    <div className="fixed font-mono inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-7 rounded w-2/5">
        <div className='flex gap-10 justify-center items-center flex-row-reverse '>
          <button id='modalContainer' onClick={handleOnClose} className="mb-2 text-5xl">×</button>
          <h1 className="font-semibold text-center text-xl text-gray-700">
            Fill Out the Details to Book a Ticket
          </h1>
        </div>
        <br />
        <div className="flex flex-col">
          <label className="font-semibold mb-3 leading-none">Name -</label>
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 cursor-not-allowed"
            value={detail.show.name}
          />
          <label className="font-semibold mb-3 leading-none">Rating -</label>
          <input
            type='text'
            className="border border-gray-700 p-2 rounded mb-5 cursor-not-allowed"
            value={detail.show.rating.average}
          />
          <label className="font-semibold mb-3 leading-none">Country Name -</label>
          <input
            type='text'
            className="border border-gray-700 p-2 rounded mb-5 cursor-not-allowed"
            value={detail.show.network.country.name}
          />
          <label className="font-semibold mb-3 leading-none">Your Name -</label>
          <input
            type='text'
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder='Enter your Name here'
          />
          <label className="font-semibold mb-3 leading-none">Contact Number -</label>
          <input
            type='tel'
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder='Contact Number'
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
            Book Now!!
          </button>
        </div>
      </div>
    </div >
  )
}
