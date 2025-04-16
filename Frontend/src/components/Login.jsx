import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Login = () => {
   const location=useLocation();
    const navigate =useNavigate();
    const from=location.state?.from?.pathname||"/"; 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      
      // Check if response contains user data
      if (res.data) {
        toast.success('Successfully logged in!');
        navigate(from,{replace:true});
        document.getElementById("my_modal_3").close();// Close the modal and reload the page
        setTimeout(()=>{
          
          window.location.reload(); 
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        },3000);
       
      }
    } catch (err) {
      console.log(err);
      toast.error('There was an error logging in. Please try again.');
      setTimeout(()=>{},3000);
    }
  };

  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type="email"
                placeholder="enter your email"
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input 
                type="password"
                placeholder="enter your password"
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
