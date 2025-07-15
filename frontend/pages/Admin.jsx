import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate();

    const [bookData, setbookData] = useState({
        title: "",
        author: "",
        price: "",
        image: ""
    })

    const handleChanges = (e) => {
        setbookData({ ...bookData, [e.target.name]: e.target.value })
    }

    const sendData = async (e) => {
        e.preventDefault()
        const result = await axios.post("http://localhost:3000/admin", bookData)
        setbookData({
            title: "",
            author: "",
            price: "",
            image: ""
        })
    }


    return (
        <div className="flex items-center justify-center min-h-[90vh] bg-[url('https://images.ctfassets.net/nnkxuzam4k38/2SvDjcgyav5C1DOb79JKXl/d3b06db5bb6bdb4ab237f666b5b4980e/compute-ea4c57a4.png')] bg-cover bg-center h-screen">
            <div className="flex flex-col items-center w-90 h-120 rounded-2xl">
                <h1 className="text-gray-200 font-bold text-4xl pt-3">Add Books</h1>
                <form className="flex flex-col">
                    <input className="text-white font-semibold m-5 border-1 p-2 rounded-2xl" name="title" onChange={handleChanges} value={bookData.title} placeholder="Enter Title"></input>
                    <input className="text-white font-semibold m-5 border-1 p-2 rounded-2xl" name="author" onChange={handleChanges} value={bookData.author} placeholder="Enter author"></input>
                    <input className="text-white font-semibold m-5 border-1 p-2 rounded-2xl" name="price" onChange={handleChanges} value={bookData.price} placeholder="Enter Price"></input>
                    <input className="text-white font-semibold m-5 border-1 p-2 rounded-2xl" name="image" onChange={handleChanges} value={bookData.image} placeholder="Enter image link"></input>
                    <button className="mt-2 hover:cursor-pointer text-white hover:bg-pink-500 active:scale-90 rounded-2xl py-2 bg-pink-600" onClick={sendData}>Submit</button>
                </form>
                <Link to="/" className="text-cyan-400 font-semibold mt-3">Go to Home</Link>
            </div>
        </div>
    )
}