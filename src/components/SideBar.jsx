import { useSelector } from "react-redux"

const SideBar = () => {
    const isMenuOpen = useSelector((state)=>state.app.isMenuOpen); 
    if(!isMenuOpen){
         return ;
    }
  return (
    <div className="w-[30%] px-2 lg:w-[15%] lg:px-9 bg-slate-100 border-2 border-black ">
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>Youtub Music</li>
        </ul>


        <h1 className="font-bold my-4">You</h1>
        <ul>
            <li>Your Channel</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch Later </li>
            <li>Downloads </li>
        </ul>

        <h1 className="font-bold my-4">Subscription </h1>
        <ul>
            <li>Mr Beast</li>
            <li>Ted X</li>
            <li>Nat Geo</li>
            <li>Movies</li>
            <button>Show More </button>
        </ul>
        <h1 className="font-bold my-4">Explore </h1>
        <ul>
            <li>Trending</li>
            <li>Music</li>
            <li>Games</li>
            <li>News</li>
            <li>Sports</li>
            <li>Podcast</li>
        </ul>
    </div>
  )
}

export default SideBar