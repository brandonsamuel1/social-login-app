import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome</h1>
                    <p>SOCIAL LOGIN APP</p>
                </div>
                <div className="text-center mt-6">
                    <Link to='/register'><button className="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">REGISTER</button></Link>
                </div>
                <div className="text-center mt-6">
                    <Link to='/login'><button className="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">LOGIN</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;