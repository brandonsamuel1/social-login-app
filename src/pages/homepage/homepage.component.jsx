import React from "react";
import { Link } from "react-router-dom";

import './homepage.styles.scss'

const Home = () => {
    return (
        <div class="min-h-screen flex justify-center items-center">
            <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome</h1>
                    <p>SOCIAL LOGIN APP</p>
                </div>
                <div class="text-center mt-6">
                    <Link to='/register'><button class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">REGISTER</button></Link>
                </div>
                <div class="text-center mt-6">
                    <Link to='/login'><button class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">LOGIN</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;