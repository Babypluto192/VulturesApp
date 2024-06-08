import React from 'react';
import {IMySection2} from "@/interfaces/IMySection2";
import Link from "next/link";

const VulturesNewsSection = ({description1, imageurl1, caption1, id}:IMySection2) => {

    return (


        <div lang={'ru'}
             className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-2 mb-10 ml-3">
            <a href="#">
                <img className="rounded-t-lg" src={"http://localhost:4000" + imageurl1} alt={caption1}/>
            </a>
            <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{caption1}</h5>

                <p className="mb-3 font-normal text-gray-700 whitespace-nowrap overflow-hidden">{description1}</p>
                <Link href={"/news/" + id}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Читать подробнее
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>



    );
};

export default VulturesNewsSection;