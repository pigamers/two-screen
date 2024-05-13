import React from 'react';
import Head from './Head';
import axios from 'axios';
import { Link } from 'react-router-dom';

const api = "https://api.tvmaze.com/search/shows?q=all"

export default function Home() {
    const [info, setInfo] = React.useState(null);

    React.useEffect(() => {
        axios.get(api).then((response) => {
            setInfo(response.data);
            // console.log(response.data);
        });
    }, []);

    if (!info) return null;

    return (
        <>
            <Head />
            <div className='font-mono'>
                {info.map((item) => {
                    return (
                        <div className='flex flex-row justify-center p-5' key={item?.show?.id}>
                            <div className="w-1/4 rounded border-2 border-black overflow-hidden shadow-lg p-3">
                                <img src={item.show.image?.medium} className="w-full" alt="img" />
                                <h2 className="font-bold text-xl mb-2 text-center my-4">Score - {item.score}</h2>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Name : {item.show.name}</div>
                                    <div className="font-bold text-lg mb-2">Type : {item.show.type}</div>
                                    <div className="font-bold text-lg mb-2">Language : {item.show.language}</div>
                                    <div className="font-bold text-lg mb-2">Status : {item.show.status}</div>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <Link to={`/details/${item.show.id}`}>
                                        <button onClick={() => {
                                            localStorage.setItem('selected show', JSON.stringify(item))}} 
                                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )
}
