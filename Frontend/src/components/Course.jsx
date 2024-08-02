import Navbar from "./Navbar"
// import list from '../../public/list.json'
import Cards from "./Cards"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import axios from "axios"

const Course = () => {
 const [book , setBook] = useState([]);

 const  handleApi = async () =>{
try {
  const result = await axios.get("http://localhost:8000/api/v1/book");
 
  setBook(result.data);
  console.log(result.data);
} catch (error) {
  console.log(error.message);
}  
 }

 useEffect(() =>{
  handleApi();
 } , [] )

  return (
    <>
    <Navbar/>

      <div className="max-w-screen-2xl container mx-auto px-5 md:px-20">
        <div className="pt-28 text-center justify-center">
      <h1 className="md:text-3xl text-2xl font-bold text-center">We're delighted to have you <span className="text-orange-400"> Here! :)</span></h1>
       <p className="mt-4 "> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!</p>
         <Link to="/"><button className=" bg-orange-400 text-white px-3 py-1 rounded-md mt-4 hover:bg-orange-500 ">Back Home</button></Link>   
        </div> 
        <div className= " mt-4 grid grid-cols-1 md:grid-cols-4">
            {
                book.map((item) => (
                    <Cards item={item} key={item.id} />
                ))
            }
        </div>
        </div> 
     <Footer/>
    </>
  )
}

export default Course
