import React from 'react';
import banner from "../../public/banner1.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center mt-6">
        
        {/* Text content on left (desktop) */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">New everyday</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consequuntur,
              ab maiores cupiditate quasi nesciunt provident. Minus sit nesciunt aspernatur
              mollitia doloremque suscipit possimus sunt odio inventore iure. Libero, facere.
            </p>
          </div>

          <br />

          <label className="input validator flex items-center gap-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>

          <div className="validator-hint hidden">Enter valid email address</div>
          <br />
          <button className="btn btn-active btn-secondary">Secondary</button>
        </div>

        {/* Image content on right (desktop) */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img
            src={banner}
            className="mt-12 w-102 h-80 object-cover"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
