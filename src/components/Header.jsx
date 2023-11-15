import React,{useContext,useState} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom';
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import {SlMenu} from "react-icons/sl";
import {IoIosSearch} from "react-icons/io";
import {RiVideoAddLine} from "react-icons/ri";
import {FiBell} from "react-icons/fi";
import {CgClose} from "react-icons/cg";
import {Context } from "../context/contextApi";
import Loader from "../shared/Loader";


const Header = () => {


    const [searchQuery, setSearchQuery]= useState("");
    const {loading,mobileMenu,setMobileMenu}=useContext(Context)
    
    const navigate=useNavigate();
    function handleSearch(){
      if(searchQuery?.length>0){
        navigate(`/searchResult/${searchQuery}`);
      }
    }

    function searchQueryHandler(event){
      
        if(event.key=== "Enter")
        {
          handleSearch();
        }
    };   

    const mobileMenuToggle=()=>{
        setMobileMenu(!mobileMenu);
       
    };
    
    const {pathname}=useLocation();
    const pageName=pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 py-2   px-5 md:px-10  bg-gray-800">

      {loading && <Loader /> }

      <div className="flex justify-end h-5 items-center">
        {pageName !=="video" && (
            <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 p-2 w-10 rounded-full 0  hover:bg-[#303030]/[0.6] " onClick={mobileMenuToggle}>
                {mobileMenu ? ( <CgClose className="text-white text-xl " /> ) :
                             (<SlMenu className="text-white text-xl h-6" /> )}
            </div>
        )}
 
        <Link to="/" className="flex justify-between h-5 items-center">
        <img className="h-6 hidden dark md:block"  src={ytLogo} alt="youtube" />
        <img className="h-6 md:hidden"  src={ytLogoMobile} alt="youtube" /> 
        
        </Link>
        </div>
          <div className="group flex items-center text-sm sm:text-base">
            <div className="flex h-5 md:h-8 md:ml-10  border-[#303030] rounded-l-3xl group-focus-within:border-blue-500  ">
            
              <input type="text"
                  className="rounded-l-full pl-6  outline-none border-r-6 border-[#303030]  bg-white/[0.1] text-white  h-5 md:h-8  w-44  md:w-64 lg:w-[500px]"
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  onKeyUp={searchQueryHandler} 
                  value={searchQuery}
                  />
                
              </div>
              <button className="w-[40px] md:w-[60px] h-5 md:h-8 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]" 
                        
                   
                    value='searchButton'  >
              <IoIosSearch className="text-white text-xl h-4 sm:h-6" values='one'  onClick={handleSearch} />

                  </button>
                   </div>

 <div className="flex items-center">
  <div className="hidden md:flex">
    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
          <RiVideoAddLine className="text-white text-xl cursor-pointer" /> 
    </div>
    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
          <FiBell className="text-white text-xl cursor-pointer" /> 
    </div>
         
  </div>
  <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://api.multiavatar.com/stefan.svg" alt="profile image" />
          </div>
 </div>
 
    </div>
  );
};

export default Header;
