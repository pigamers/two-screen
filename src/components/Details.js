import React, { useState } from 'react'
import Modal from './Modal';

export default function Details() {
    const [showModal, setShowModal] = useState(false);

    const handleOnClose = () => setShowModal(false);

    const detail = JSON.parse(localStorage.getItem('selected show'));
    // console.log(detail);
    const activeLink = detail.show.officialSite;
    return (
        <div className="flex items-center font-mono border-black shadow flex-row w-full">
            <img className="w-1/3 h-screen" src={detail.show.image.original} alt="img" />
            <div className="flex flex-col justify-between p-4">
                <h5 className="mb-2 text-2xl font-bold">Name : {detail.show.name}</h5>
                <h5 className="mb-2 text-2xl font-bold">Type : {detail.show.type}</h5>
                <h5 className="mb-2 text-2xl font-bold">Language : {detail.show.language}</h5>
                <h5 className="mb-2 text-2xl font-bold">Status : {detail.show.status}</h5>
                <h5 className="mb-2 text-2xl font-bold">Rating: {detail.show.rating.average}</h5>
                <h5 className="mb-2 text-2xl font-bold">Official Site: <a href={activeLink}>{detail.show.officialSite}</a></h5>
                <h5 className="mb-2 text-2xl font-bold">Premiered: {detail.show.premiered}</h5>
                <p className="mb-3 text-3xl font-semibold">{detail.show.summary}</p>
                <button onClick={() => { setShowModal(true) }} className="w-1/2 m-auto my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book my Ticket
                </button>
                <Modal onClose={handleOnClose} visible={showModal} />
            </div>
        </div>

    )
}
