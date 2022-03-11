import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4">Register An Account</h1>
                    <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">Enter credentials to register</p>
                </div>
                <div className="space-y-4">
                    <input type="text" placeholder="Full Name" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Confirm Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                </div>
                <div className="text-center mt-6">
                    <button className="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">REGISTER</button>
                    <p className="mt-4 text-sm">Already Have An Account? <Link to='/login'><span className="underline cursor-pointer"> Sign In</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;