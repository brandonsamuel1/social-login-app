import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const Dashboard = ({ currentUser }) => {
    return (
        < div className="min-h-screen flex justify-center items-center" >
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome</h1>
                    <p>{currentUser}</p>
                </div>
                <div className="text-center mt-6">
                    <Link to='/'><button onClick={() => auth.signOut()} className="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">LOGOUT</button></Link>
                </div>

            </div>
        </div >
    )
}

export default Dashboard;