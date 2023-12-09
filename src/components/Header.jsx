import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import  youtube from "../assets/images/youtubeIcon.png"
import  user from "../assets/images/userIcon.png"
import  notification from "../assets/images/notificationIcon.png"; 
import { toggleMenu } from "../redux/appSlice";
const Header = () => {
     const dispatch = useDispatch(); 
     const handleSideBar = ()=>{
          dispatch(toggleMenu())
     }
  return (
    <div className="flex justify-between items-center w-full h-20">
        <div className="w-[15%] lg:w-[10%]  flex justify-evenly items-center " >
        <GiHamburgerMenu className="w-4 sm:w-9 h-4 sm:h-9 cursor-pointer" onClick={handleSideBar} />
         <img className=" w-4 sm:w-9 h-4 sm:h-9" src={youtube}/>
        </div>
        <div className="w-[70%] sm:w-1/2 lg:w-[40%] flex justify-around items-center">
         <input style={{backgroundImage: `${CiSearch}`}} className=" w-[70%] sm:w-[80%] border-gray-400 border-2 rounded-full placeholder:text-slate-400 px-5 " type="text" placeholder="Search"/>
         <button  className="border-2 border-gray-400 w-[25%] sm:w-[20%] lg:w-[15%]  rounded-lg "> Search </button>
        </div>
        <div  className="w-[15%] lg:w-[10%] flex justify-evenly items-center" >
           <img className=" w-4 sm:w-6 h-4 sm:h-6 object-cover" src={user}/>
           <img className=" w-4 sm:w-6 h-4 sm:h-6 object-cover" src={notification}/>
        </div>
    </div>
  )
}

export default Header