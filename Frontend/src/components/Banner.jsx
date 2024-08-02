

import banner from '../image/banner.jpg'


const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-24 flex flex-col md:flex-row">
       {/* left */}
        <div className="md:w-1/2 w-full md:mt-40 mt-12 order-2 md:order-1 ">
          <div className="space-y-8">
            {/* heading */}
            <h1 className=" text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something
              <span className="text-orange-400"> new everyday!!!</span>
            </h1>
            {/* paragraph */}
            <p className="md:text-xl ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            {/* email input */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          {/* button */}
          <button className="btn btn-active mt-6 text-white bg-orange-400 hover:bg-orange-500 hidden md:block">Send Email</button>
          <button className="btn btn-sm md:hidden mt-4 text-white bg-orange-400 hover:bg-orange-500 ">Send Email</button>
        </div>
        {/* right */}
        <div className="md:w-1/2 w-full order-1">
         <img className='md:mt-40 md:ml-8 mt-24' src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
