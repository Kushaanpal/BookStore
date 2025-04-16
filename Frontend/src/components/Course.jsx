import React, { useEffect, useState } from 'react'

import Cards from './Cards'
import {Link} from "react-router-dom";
import axios from 'axios';


const Course = () => {
    const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try{
                const res=await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            }catch(error)
            {
                console.log(error);
            }
        };
        getBook();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you{" "}
                <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className="mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maxime nobis quasi nostrum officiis saepe mollitia ex neque impedit aspernatur aut, et animi? Doloremque voluptatem quod, tempore dolore temporibus atque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at architecto quisquam doloremque labore accusantium consequuntur sequi! Cumque, pariatur dolor corrupti reiciendis repellendus blanditiis sunt totam laborum quisquam, obcaecati quis!
            </p>
           <Link to="/"> 
           <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>
                    Back
            </button>
           </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item)=>{
                return <Cards key={item.id} item={item} />
            })}
        </div>
    </div>
    </>
  );
}

export default Course;
