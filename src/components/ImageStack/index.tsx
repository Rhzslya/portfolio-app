import React from "react";
import { motion } from "framer-motion";
import { backgroundVariants } from "@/utils/FramerMotionStyle";

const ImageStack = () => {
  return (
    <div className="image-stack row-span-3 col-start-4 relative">
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)] pointer-events-none"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <div className="grid grid-cols-10 grid-rows-10 gap-3">
        <div className="col-span-2 row-span-2 group">
          <svg
            fill="#1a1919"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:fill-white transition-colors duration-300"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.064"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>{" "}
            </g>
          </svg>
        </div>
        <div className="col-start-3 row-start-4 group">
          <svg
            fill="#1a1919"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="transition-colors duration-300 group-hover:[fill:#f5de19]"
          >
            <g id="SVGRepo_iconCarrier">
              <g id="5151e0c8492e5103c096af88a51e7e7e">
                <path
                  d="M218.195,257.521c0,64.719,4.624,119.1-27.309,151.283c-17.961,18.105-46.301,28.772-81.17,28.772 
        c-57.192,0-88.947-27.862-109.215-66.416c19.512-12.459,39.452-24.502,59.775-36.154c8.292,23.188,36.291,49.258,67.888,33.21 
        c20.027-10.18,17.715-41.04,17.715-74.537c0-69.549,0-149.78,0-212.528c-0.063-1.044-0.125-2.087,0.732-2.214 
        c23.866,0,47.728,0,71.585,0C218.195,134.832,218.195,198.069,218.195,257.521z M399.727,215.462 
        c-18.247-7.814-40.928-17.058-46.488-33.952c-6.233-18.934,4.396-34.533,16.231-39.841c26.023-11.688,57.038,7.556,63.463,27.301 
        c19.583-11.657,39.103-23.384,56.826-36.896c-20.826-34.584-51.354-59.342-107.003-57.561 
        c-30.64,0.979-53.657,10.652-70.841,25.088c-16.771,14.085-29.721,33.854-31.737,61.989 
        c-6.025,84.212,56.988,105.708,110.695,129.137c16.93,7.385,35.751,14.842,43.54,29.517c16.061,30.282-12.389,50.26-36.898,52.397 
        c-39.336,3.427-65.858-19.587-81.175-43.54c-19.133,11.86-39.938,22.045-58.298,34.683c25.537,44.908,67.409,73.98,132.831,73.793 
        c66.74-0.188,116.219-32.366,120.281-92.977C516.677,262.216,454.956,239.105,399.727,215.462z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-6 group">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#1a1919"
            className="group-hover:[fill:#44a8b3] transition-colors duration-300"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_tailwind</title>
              <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"></path>
            </g>
          </svg>
        </div>
        <div className="col-span-2 row-span-2 col-start-6 row-start-2 group">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#1a1919"
            className="transition-colors duration-300 group-hover:[fill:#53C1DE]"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>react</title>{" "}
              <rect width="24" height="24" fill="none"></rect>{" "}
              <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"></path>{" "}
            </g>
          </svg>
        </div>
        <div className="col-start-7 row-start-5 group">
          <svg
            fill="#1a1919"
            className="group-hover:[fill:#13aa52] transition-colors duration-300"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>mongodb</title>{" "}
              <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>{" "}
            </g>
          </svg>
        </div>
        <div className="col-span-2 row-span-2 col-start-8 row-start-7 group">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#1a1919"
            className="group-hover:[fill:#007acc] transition-colors duration-300"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_typescript</title>
              <path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"></path>
            </g>
          </svg>
        </div>
        <div className="col-start-5 row-start-10 group">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z"
                fill="#1a1919"
                className="group-hover:[fill:#E76F00] transition-colors duration-300"
              ></path>{" "}
              <path
                d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z"
                fill="#1a1919"
                className="group-hover:[fill:#E76F00] transition-colors duration-300"
              ></path>{" "}
              <path
                d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z"
                fill="#1a1919"
                className="group-hover:[fill:#5382A1] transition-colors duration-300"
              ></path>{" "}
              <path
                d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z"
                fill="#1a1919"
                className="group-hover:[fill:#5382A1] transition-colors duration-300"
              ></path>{" "}
              <path
                d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z"
                fill="#1a1919"
                className="group-hover:[fill:#5382A1] transition-colors duration-300"
              ></path>{" "}
              <path
                d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z"
                fill="#1a1919"
                className="group-hover:[fill:#5382A1] transition-colors duration-300"
              ></path>{" "}
              <path
                d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z"
                fill="#1a1919"
                className="group-hover:[fill:#5382A1] transition-colors duration-300"
              ></path>{" "}
              <path
                d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z"
                fill="#1a1919"
                className="group-hover:[fill:#5382A1] transition-colors duration-300"
              ></path>
            </g>
          </svg>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-9 group">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_firebase</title>
              <path
                d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z"
                fill="#1a1919"
                className="group-hover:[fill:#ffc24a] transition-colors duration-300"
              ></path>
              <path
                d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z"
                fill="#1a1919"
                className="group-hover:[fill:#ffa712] transition-colors duration-300"
              ></path>
              <path
                d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z"
                fill="#1a1919"
                className="group-hover:[fill:#f4bd62] transition-colors duration-300"
              ></path>
              <path
                d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z"
                fill="#1a1919"
                className="group-hover:[fill:#ffa50e] transition-colors duration-300"
              ></path>
              <polygon
                points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601"
                fill="#1a1919"
                className="group-hover:[fill:#f6820c] transition-colors duration-300"
              ></polygon>
              <path
                d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0"
                fill="#1a1919"
                className="group-hover:[fill:#fde068] transition-colors duration-300"
              ></path>
              <path
                d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z"
                fill="#1a1919"
                className="group-hover:[fill:#fcca3f] transition-colors duration-300"
              ></path>
              <path
                d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z"
                fill="#1a1919"
                className="group-hover:[fill:#eeab37] transition-colors duration-300"
              ></path>
            </g>
          </svg>
        </div>
        <div className="col-start-10 row-start-10 group">
          <svg
            viewBox="-13 0 282 282"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g
                fill="#1a1919"
                className="group-hover:[fill:#8CC84B] transition-colors duration-300"
              >
                {" "}
                <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"></path>{" "}
                <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div className="col-start-9 row-start-1 group">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z"
                fill="#1a1919"
                className="group-hover:[fill:#EE513B] transition-colors duration-300"
              ></path>{" "}
              <path
                d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z"
                fill="#070606"
                className="group-hover:fill-white transition-colors duration-300"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="col-start-4 row-start-2 group">
          <svg
            viewBox="0 0 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z"
                  fill="#1a1919"
                  className="group-hover:[fill:#563D7C] transition-colors duration-300"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z"
                  fill="#070606"
                  className="group-hover:fill-white transition-colors duration-300"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div className="col-start-6 row-start-8 group">
          <svg
            fill="#1a1919"
            className="group-hover:fill-white transition-colors duration-300"
            viewBox="0 0 14 14"
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M 12.915756,6.853144 12.411981,6.54153 c -0.004,-0.04905 -0.0087,-0.0981 -0.01443,-0.146573 l 0.432797,-0.403944 c 0.04386,-0.04097 0.06348,-0.101562 0.05194,-0.160423 -0.01154,-0.05886 -0.05309,-0.10791 -0.109064,-0.128685 L 12.219821,5.49474 c -0.01385,-0.0479 -0.02828,-0.09521 -0.04328,-0.143111 l 0.345083,-0.479538 c 0.0352,-0.04847 0.04213,-0.11195 0.01962,-0.167925 -0.02251,-0.05598 -0.07329,-0.09522 -0.132147,-0.105026 l -0.58341,-0.09521 c -0.0225,-0.04443 -0.04616,-0.08771 -0.0704,-0.130993 l 0.245251,-0.538398 c 0.02481,-0.05482 0.0202,-0.118298 -0.01385,-0.168503 -0.03405,-0.0502 -0.08944,-0.07906 -0.150036,-0.07675 l -0.592065,0.02077 c -0.03058,-0.03809 -0.06175,-0.07617 -0.09348,-0.113681 l 0.136187,-0.577061 c 0.01385,-0.05886 -0.0035,-0.120029 -0.04617,-0.162732 -0.0427,-0.0427 -0.103872,-0.06001 -0.162155,-0.04616 l -0.576485,0.136187 c -0.03751,-0.03174 -0.07559,-0.0629 -0.113681,-0.09348 l 0.02078,-0.592066 c 0.0023,-0.06001 -0.02712,-0.117143 -0.07675,-0.150036 -0.04963,-0.03289 -0.113681,-0.03866 -0.167925,-0.01385 L 9.62651,2.242428 C 9.58323,2.218768 9.53937,2.195108 9.495517,2.172028 L 9.400297,1.588618 C 9.390497,1.529178 9.351247,1.478976 9.295272,1.456471 9.239292,1.433961 9.176397,1.440891 9.127924,1.476091 L 8.648384,1.821165 C 8.601064,1.806165 8.553744,1.791735 8.50585,1.777885 L 8.298685,1.224483 C 8.277905,1.167933 8.228855,1.126383 8.17,1.114841 8.11114,1.103301 8.050548,1.122941 8.009577,1.166781 L 7.6056333,1.600154 C 7.5571603,1.594954 7.5081093,1.589764 7.4590596,1.585724 L 7.1474462,1.081949 C 7.1157078,1.031167 7.0597328,1.000006 6.9997184,1.000006 c -0.060014,0 -0.1159894,0.03116 -0.1471508,0.08194 L 6.5409543,1.585721 c -0.04905,0.004 -0.0981,0.0092 -0.1471508,0.01443 L 5.9898603,1.166777 C 5.9488893,1.122917 5.8882974,1.103297 5.8294371,1.114837 5.7705771,1.126377 5.7215265,1.167927 5.7007523,1.224479 L 5.4935871,1.777881 c -0.047896,0.01385 -0.095215,0.02828 -0.1425342,0.04328 L 4.8715145,1.476082 c -0.04905,-0.0352 -0.112527,-0.0427 -0.167925,-0.01962 -0.055398,0.02308 -0.095215,0.07329 -0.1044482,0.132147 l -0.095215,0.58341 c -0.043857,0.02251 -0.087713,0.04616 -0.130993,0.0704 L 3.8345345,1.997169 c -0.054821,-0.02481 -0.1182977,-0.01962 -0.1685021,0.01385 -0.050204,0.03347 -0.079057,0.09002 -0.076749,0.150036 l 0.020774,0.592066 c -0.038086,0.03058 -0.076172,0.06174 -0.1136811,0.09348 L 2.9193145,2.710417 c -0.058283,-0.01385 -0.1200289,0.004 -0.1621544,0.04616 -0.042126,0.04213 -0.060014,0.103871 -0.046165,0.162732 L 2.8471816,3.49637 c -0.031738,0.03751 -0.0629,0.07502 -0.093484,0.113681 L 2.1616322,3.589281 c -0.060014,-0.0017 -0.1165665,0.02712 -0.150036,0.07675 -0.03347,0.04963 -0.038663,0.113682 -0.01385,0.168503 l 0.2452512,0.538398 c -0.023659,0.04328 -0.047319,0.08656 -0.070402,0.130993 l -0.5834095,0.09521 c -0.059437,0.0098 -0.1090646,0.04905 -0.1321471,0.105026 -0.023083,0.05598 -0.015581,0.118874 0.01962,0.167925 l 0.3450829,0.479538 c -0.015004,0.04732 -0.02943,0.09521 -0.04328,0.143111 L 1.225061,5.701905 c -0.055975,0.02078 -0.097523,0.06982 -0.1090646,0.128685 -0.011541,0.05886 0.00808,0.119452 0.051935,0.160423 l 0.4327964,0.403944 c -0.00519,0.04905 -0.010387,0.09752 -0.014427,0.146573 l -0.503774,0.311614 c -0.050781,0.031738 -0.081943,0.087136 -0.081943,0.147728 0,0.06059 0.031161,0.115989 0.081943,0.14715 l 0.5037751,0.311614 c 0.00404,0.04905 0.00923,0.0981 0.014427,0.146573 L 1.1679325,8.010153 c -0.043857,0.04097 -0.063477,0.101563 -0.051935,0.160423 0.011541,0.05886 0.05309,0.107333 0.1090646,0.128685 l 0.5534023,0.207165 c 0.01385,0.0479 0.028276,0.09579 0.04328,0.143111 L 1.47666,9.129075 c -0.035201,0.04905 -0.042703,0.11195 -0.01962,0.167348 0.023082,0.0554 0.073287,0.09522 0.1321471,0.105026 l 0.5834095,0.09521 c 0.022505,0.04443 0.046165,0.08771 0.070402,0.130993 l -0.2452512,0.537821 c -0.024814,0.05482 -0.01962,0.118298 0.01385,0.168503 0.033469,0.0502 0.090599,0.07906 0.150036,0.07675 l 0.5920654,-0.02077 c 0.030584,0.03866 0.061746,0.07617 0.093484,0.113681 l -0.1361865,0.577061 c -0.01385,0.05886 0.00346,0.119452 0.046165,0.162155 0.042703,0.0427 0.1038711,0.06001 0.1621544,0.04616 l 0.5770618,-0.13561 c 0.037509,0.03174 0.075595,0.0629 0.1136811,0.09348 l -0.020774,0.592643 c -0.00231,0.06001 0.027122,0.117143 0.076749,0.150036 0.049627,0.03289 0.1136812,0.03866 0.1685021,0.01327 l 0.5383986,-0.245251 c 0.04328,0.02424 0.087136,0.04732 0.130993,0.0704 l 0.095215,0.58341 c 0.00981,0.05944 0.04905,0.109642 0.1050253,0.132147 0.055975,0.02251 0.1188747,0.01558 0.167925,-0.01904 l 0.4795383,-0.34566 c 0.047319,0.015 0.095215,0.02943 0.1431113,0.04328 l 0.2071652,0.553402 c 0.020774,0.05598 0.069824,0.09752 0.1286848,0.109065 0.05886,0.01154 0.1194518,-0.0081 0.1604232,-0.05194 l 0.4039432,-0.432796 c 0.048473,0.0058 0.098101,0.01039 0.1471508,0.01443 l 0.3116134,0.503775 c 0.031161,0.05078 0.087136,0.08194 0.1471507,0.08194 0.060014,0 0.1159895,-0.03116 0.1471508,-0.08194 l 0.3116134,-0.503775 c 0.04905,-0.004 0.0981,-0.0092 0.1465737,-0.01443 l 0.4039436,0.432796 c 0.04097,0.04386 0.101562,0.06348 0.160423,0.05194 0.05886,-0.01154 0.107333,-0.05309 0.128685,-0.109065 l 0.207165,-0.553402 c 0.0479,-0.01385 0.09579,-0.02828 0.143111,-0.04328 l 0.479538,0.34566 c 0.04847,0.0352 0.11195,0.04213 0.167348,0.01904 0.0554,-0.02308 0.09522,-0.07329 0.105026,-0.132147 l 0.09521,-0.58341 c 0.04386,-0.02308 0.08771,-0.04674 0.130993,-0.0704 l 0.538398,0.245251 c 0.05482,0.02481 0.118298,0.0202 0.167925,-0.01327 0.04963,-0.03347 0.07906,-0.09002 0.07675,-0.150036 l -0.02078,-0.592643 c 0.03809,-0.03058 0.07617,-0.06174 0.113682,-0.09348 l 0.577061,0.13561 c 0.05828,0.01385 0.120029,-0.0035 0.162155,-0.04616 0.04213,-0.0427 0.06001,-0.103871 0.04617,-0.162155 l -0.13561,-0.577061 c 0.03174,-0.03751 0.0629,-0.07502 0.09348,-0.113681 l 0.592066,0.02077 c 0.06001,0.0023 0.117143,-0.02655 0.150036,-0.07675 0.03289,-0.0502 0.03866,-0.113682 0.01327,-0.168503 L 11.757006,9.627652 c 0.02366,-0.04328 0.04732,-0.08714 0.0704,-0.130993 l 0.58341,-0.09521 c 0.05944,-0.0092 0.109065,-0.04905 0.132147,-0.105026 0.02308,-0.05598 0.01558,-0.118874 -0.01962,-0.167348 L 12.17826,8.649537 c 0.015,-0.04732 0.02943,-0.09521 0.04328,-0.143111 l 0.553402,-0.207165 c 0.05598,-0.02135 0.09752,-0.06982 0.109065,-0.128685 0.01212,-0.05886 -0.0075,-0.119452 -0.05194,-0.160423 L 12.399271,7.606209 c 0.0052,-0.04905 0.0098,-0.09752 0.01443,-0.146573 l 0.503775,-0.311614 c 0.05078,-0.03116 0.08194,-0.08714 0.08194,-0.14715 0,-0.06001 -0.03116,-0.11599 -0.08194,-0.147728 z m -3.371772,4.178504 c -0.192162,-0.04155 -0.314499,-0.231402 -0.273527,-0.42414 0.04097,-0.192739 0.230824,-0.315653 0.422986,-0.273527 0.192738,0.04097 0.315076,0.230824 0.273527,0.423563 -0.04155,0.192739 -0.230825,0.315076 -0.422986,0.274104 z M 9.372597,9.874062 C 9.19717,9.836552 9.024628,9.947922 8.987119,10.12393 L 8.80823,10.958938 c -0.552248,0.250445 -1.1645106,0.389517 -1.8102428,0.389517 -0.6601587,0 -1.2862707,-0.145996 -1.8483289,-0.407405 L 4.9707691,10.106618 C 4.9332601,9.931191 4.7607186,9.819241 4.5852919,9.85675 L 3.848384,10.014865 C 3.7116203,9.874062 3.5846667,9.724026 3.4675232,9.565911 l 3.5852849,0 c 0.040394,0 0.067516,-0.0075 0.067516,-0.04443 l 0,-1.268382 c 0,-0.03693 -0.027122,-0.04443 -0.067516,-0.04443 l -1.0485213,0 0,-0.803847 1.1339264,0 c 0.1032941,0 0.5534023,0.02943 0.6970907,0.604761 0.045011,0.176581 0.1442651,0.752488 0.2117821,0.936571 0.06752,0.206588 0.34162,0.619187 0.63419,0.619187 l 1.786584,0 c 0.0202,0 0.04213,-0.0023 0.06463,-0.0063 -0.124069,0.168502 -0.259678,0.327771 -0.406252,0.476653 L 9.372597,9.873485 Z m -4.9581154,1.140274 c -0.1921616,0.04155 -0.3820149,-0.08137 -0.4229863,-0.274104 -0.040971,-0.192739 0.081366,-0.382592 0.2735273,-0.42414 0.1921615,-0.04097 0.3820149,0.08137 0.4229863,0.274104 0.040971,0.192739 -0.081366,0.382592 -0.2735273,0.42414 z M 3.0543469,5.499357 C 3.1339819,5.6794 3.0531969,5.890605 2.8731495,5.970239 2.6931062,6.049869 2.4830557,5.969039 2.4028442,5.788465 2.3232092,5.608421 2.4039942,5.397794 2.5840416,5.317582 2.7640848,5.237372 2.9741353,5.318782 3.0543469,5.499357 Z M 2.6365542,6.490172 3.4040464,6.149128 C 3.5679319,6.076418 3.6417958,5.884257 3.569086,5.719794 l -0.1581149,-0.357778 0.6214956,0 0,2.802212 -1.2545324,0 C 2.6688696,7.781636 2.6105864,7.37827 2.6105864,6.961054 c 0,-0.159269 0.00866,-0.316807 0.024814,-0.471459 z m 3.3683097,-0.271796 0,-0.825776 1.4807405,0 c 0.076749,0 0.5401296,0.08829 0.5401296,0.435105 0,0.287954 -0.3554698,0.390671 -0.6480401,0.390671 l -1.37283,0 z m 5.3799471,0.743255 c 0,0.109642 -0.004,0.21813 -0.01212,0.325463 l -0.450109,0 c -0.04501,0 -0.06348,0.02943 -0.06348,0.07386 l 0,0.206588 c 0,0.486463 -0.274682,0.592643 -0.514739,0.619188 C 10.115269,8.2127 9.861362,8.09094 9.830201,7.950711 9.695168,7.191298 9.470114,7.029144 9.114644,6.748692 9.556096,6.468817 10.01486,6.05564 10.01486,5.502238 10.01486,4.904979 9.605146,4.528735 9.326426,4.344652 8.934601,4.086706 8.501227,4.03477 8.384661,4.03477 l -4.6551578,0 C 4.3608148,3.330182 5.2160204,2.8316 6.183753,2.649826 L 6.7325388,3.225733 C 6.8566071,3.355572 7.0620411,3.360189 7.19188,3.236123 L 7.8058737,2.648675 c 1.2862703,0.23948 2.3757633,1.040442 3.0030293,2.139168 l -0.420101,0.949263 c -0.07271,0.164463 0.0017,0.356624 0.165617,0.429334 l 0.809041,0.35951 c 0.01385,0.143688 0.02135,0.289108 0.02135,0.435681 z M 6.7331159,2.160477 C 6.8750731,2.024291 7.1007042,2.029484 7.2368908,2.172017 7.3730774,2.314551 7.3673068,2.540759 7.2247728,2.676369 7.0828156,2.812555 6.8571844,2.807362 6.7209979,2.664829 6.5848113,2.522295 6.5905819,2.296664 6.7331159,2.160477 Z m 4.1710031,3.356192 c 0.07963,-0.180044 0.290262,-0.261409 0.470305,-0.181775 0.180043,0.07963 0.260832,0.290839 0.181197,0.470883 -0.07963,0.180043 -0.290262,0.261409 -0.470305,0.181774 -0.180043,-0.07963 -0.260832,-0.290839 -0.181197,-0.470882 z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageStack;
