import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {

    const [booksdb, setbooksdb] = useState([]);
    const [search, setsearch] = useState("");
    const [filterBooks,setfilterBooks]=useState("");
    const [booknotfound, setbooknotfound] = useState("");

    const getData = async (find) => {
        const books = await axios.get(" https://render.com/docs/web-services#port-binding")
        setbooksdb(books.data.Allbooks)
        setfilterBooks(books.data.Allbooks)
        // console.log(books.data.Allbooks)
    }

    const handleSearch = async (e) => {
        setsearch(e.target.value);
    }

    const findBook = async () => {
        if(search.trim===""){
            setbooknotfound("Please Enter book name")
            setfilterBooks([]);
            return;
        }
        
        const searchBook=await axios(" https://render.com/docs/web-services#port-binding")

        const found=filterBooks.filter((book)=>{
            return book.title.toLowerCase().includes(search.toLowerCase());
        })


        if(found.length===0){
            setbooknotfound("No book found");
        } else if(found.length>0){
            setbooknotfound("")
            setfilterBooks(found)
        } 
        console.log(booknotfound)
        console.log(filterBooks)
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        // console.log(search)
    }, [search])


    return (
        <div>
            <div className="w-full h-screen bg-[url('../bg.jpg')] bg-cover bg-center">
                <nav className="w-full flex justify-between h-20 bg-[#3D74B6]">
                    <img src="../logo.png" className="w-20 ml-10"></img>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex"><input type="text" onChange={handleSearch} value={search} name="search" placeholder="Search Book..." className="h-10 mt-5 mr-0 text-black font-semibold py-0 focus:outline-none bg-gray-200 border-gray-300 border-2 px-20 rounded-l-4xl"></input>
                        <button onClick={findBook} className="text-white px-2 h-10 mt-5 border-1 rounded-r-2xl cursor-pointer ml-0 bg-yellow-500 hover:bg-yellow-600">Search</button></div>
                        {
                        setbooknotfound && (
                            <p className="text-xl font-semibold text-red-500 shadow-4xl shadow-red-500">{booknotfound}</p>
                        )
                        }
                    </div>
                    <div className="flex gap-20">
                        <Link to="/admin" className="flex items-center text-gray-200 font-semibold mr-10">Admin</Link>
                        <Link to="/" className="flex items-center text-gray-200 font-semibold mr-10">Home</Link>
                        <Link to="/feature" className="flex items-center text-gray-200 font-semibold mr-10">Feature</Link>
                        <Link to="/contact" className="flex items-center text-gray-200 font-semibold mr-10">Contact</Link>
                    </div>
                </nav>
                <div className="flex">
                    {filterBooks && filterBooks.map((book, ind) => {
                        return (
                            <div key={ind} className="bg-white w-64 h-[350px] flex flex-col items-center p-4 m-5 shadow-lg rounded-lg">
                                <div className="w-full h-48 items-center flex flex-col">
                                    <img src={book.image} className="h-full w-full object-contain"></img>
                                    <p className="mt-5 font-semibold text-xl text-[#f50039]">{book.title}</p>
                                    <p className="text-green-600 text-xl mt-2">₹{book.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}