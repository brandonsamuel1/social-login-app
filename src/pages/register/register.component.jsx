import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div class="min-h-screen flex justify-center items-center">
            <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 class="text-3xl font-bold text-center mb-4">Register An Account</h1>
                    <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">Enter credentials to register</p>
                    <div class="space-x-4">
                        <button class="border-2 border-green-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-green-600 transition duration-300">Google</button>
                        <button class="border-2 border-blue-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-600 transition duration-300">Facebook</button>
                        <button class="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">Github</button>
                    </div>
                    <br />
                    <p>or</p>
                </div>
                <br />
                <div class="space-y-4">
                    <input type="text" placeholder="Full Name" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Confirm Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                </div>
                <div class="text-center mt-6">
                    <button class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">REGISTER</button>
                    <p class="mt-4 text-sm">Already Have An Account? <Link to='/login'><span class="underline cursor-pointer"> Sign In</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;