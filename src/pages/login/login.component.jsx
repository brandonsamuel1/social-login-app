import React from "react";
import { Link } from "react-router-dom";

import { signInWithGoogle, signInWithFacebook } from "../../firebase/firebase";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4">Sign in to your Account</h1>
                    <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">Enter credentials to login</p>
                    <div className="space-x-4">
                        <button onClick={signInWithGoogle} className="border-2 border-green-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-green-600 transition duration-300">Google</button>
                        <button onClick={signInWithFacebook} className="border-2 border-blue-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-600 transition duration-300">Facebook</button>
                        <button className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">Github</button>
                    </div>
                    <br />
                    <p>or</p>
                </div>
                <br />
                <div className="space-y-4">
                    <input type="text" placeholder="Email Address" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                </div>
                <div className="text-center mt-6">
                    <button className="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">LOGIN</button>
                    <p className="mt-4 text-sm">Dont Have An Account? <Link to='/register'><span className="underline cursor-pointer"> Register</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;