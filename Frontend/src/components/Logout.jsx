import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth(); // Corrected the spelling here

    const handleLogout = () => {
        try {
            setAuthUser(null); // Clear the authUser state
            localStorage.removeItem("Users"); // Remove user data from localStorage
            toast.success("Logged out successfully"); 
           
        setTimeout(()=>{
            window.location.reload(); 
        },3000);
            
        } catch (error) {
            toast.error("Error: " + error.message);
            setTimeout(()=>{},3000); // Display error toast if something goes wrong
        }
    };

    return (
        <div>
            <button
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
