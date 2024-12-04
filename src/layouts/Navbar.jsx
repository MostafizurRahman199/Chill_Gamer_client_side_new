import React, { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useFirebaseAuth } from '../Auth/AuthProvider';
import { FaHome, FaFontAwesome, FaUserCircle, FaCode, FaTags, FaUser, FaInfoCircle, FaUserPlus, FaSignInAlt, FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';
import logo from '../assets/logoNav.png'
import { Tooltip, Button } from "@material-tailwind/react";
import { IoMdAdd } from 'react-icons/io';
import { MdAddBox } from 'react-icons/md';
import { VscOpenPreview } from 'react-icons/vsc';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';


const Navbar = () => {

  
  // ___________________________hooks

  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(location.pathname);
  const { user, logOut, loading } = useFirebaseAuth();
  const navigate = useNavigate();

  // console.log(user.photoURL);





  // ___________________________useEffect update activeLink

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);




  // ___________________________loading check

  if (loading) {
    return <div className="h-16" />; 
  }




  // ___________________________link style helper

  const getLinkStyle = (path) => `
    relative px-3 py-2 text-sm font-medium transition-colors duration-200
    ${activeLink === path 
      ? 'text-[#A91D3A]' 
      : 'text-gray-700 hover:text-[#A91D3A]'
    }
    before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
    before:bg-[#A91D3A] before:transform before:scale-x-0 before:transition-transform
    before:duration-300 hover:before:scale-x-100
    ${activeLink === path ? 'before:scale-x-100' : ''}
  `;




  // ___________________________logout handler


  const handleLogout = async () => {
    try {
      await logOut();
   
      // toast.success('Logout successful!');
      navigate('/');
     
    } catch (error) {
      console.error('Logout error:', error);
    }
  };





  // ___________________________getProfileImage helper function

  const getProfileImage = (user) => {
    if (user.photoURL) {
        return user?.photoURL || user.photoURL;
    }
    
    if (user.providerData) {
        for (const provider of user.providerData) {
            if (provider.photoURL) {
                return provider?.photoURL;
            }
        }
    }
    
    return 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  };








  // ___________________________ProfileImage component

  const ProfileImage =  ({ user }) => {


    const [imageError, setImageError] = React.useState(false);
    // const [imageUrl, setImageUrl] = React.useState(null);

    const imageUrl = !imageError ? getProfileImage(user) : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    console.log(imageUrl);



    // const imageUrl =   getProfileImage(user) ;

    // useEffect(() => {
    //   setImageUrl(getProfileImage(user));
    // }, [user]);

    // setImageUrl(user?.photoURL);
    console.log(imageUrl);

    return (

      <Tooltip className='cursor-pointer bg-[#151515] text-white' content={`Hi ${user.displayName || 'User'}! `}>
     
        <img
            className="h-8 w-8 rounded-full object-cover border border-gray-200 cursor-pointer hover:scale-110 transition-transform duration-200"
            src={imageUrl}
            alt={user.displayName || 'Profile'}
           
            onError={() => setImageError(true)}
            />
        </Tooltip>
    );
  };






  return (
    <nav className="bg-white/80 backdrop-blur-md fixed  shadow-lg w-full top-0 z-50">
      <div className="w-full mx-auto px-2 sm:px-2 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Updated for better mobile display */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                className="block md:hidden lg:block h-10 w-auto sm:h-10"
                src={logo}
                alt="Logo"
              />
              <span className="text-3xl sm:text-3xl md:text-xl lg:text-3xl text-md font-bold bg-gradient-to-r from-[#A91D3A] to-[#151515] bg-clip-text text-transparent truncate">
              Chill Gamer
              </span>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
            <Link to="/" className={getLinkStyle('/')} onClick={() => setActiveLink('/')}>
              <FaHome className="inline-block mr-1" /> Home
            </Link>
            <Link to="/allReviews" className={getLinkStyle('/allReviews')} onClick={() => setActiveLink('/allReviews')}>
              <VscOpenPreview className="inline-block mr-1"/> All Reviews
            </Link>
           {
            user && (
              <>
              <Link to="/addReview" className={getLinkStyle('/addReview')} onClick={() => setActiveLink('/addReview')}>
                <MdAddBox className="inline-block mr-1"/> Add Review
              </Link>

              <Link to="/myReview" className={getLinkStyle('/myReview')} onClick={() => setActiveLink('/addReview')}>
                <FaUser className="inline-block mr-1" /> My Review
              </Link>

              <Link to="/gameWatchList" className={getLinkStyle('/gameWatchList')} onClick={() => setActiveLink('/gameWatchList')}>
                <IoGameControllerOutline className="inline-block mr-1" /> Game WatchList
              </Link>

              <Link to="/my-profile" className={getLinkStyle('/my-profile')} onClick={() => setActiveLink('/my-profile')}>
                <CgProfile className="inline-block mr-1" /> Profile
              </Link>


              </>
           )}
           
          </div>



          {/* User Profile/Login Button - Updated for mobile */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {user ? (
              <div className="flex items-center gap-2 lg:gap-4">
              
                <div className='flex flex-col lg:flex lg:flex-row items-center justify-center lg:gap-2'>
                <ProfileImage user={user} />
                 
                 {/* <span className="hidden md:block text-sm font-medium text-gray-700">
                   {user.email?.split('.')[0] || user.email?.split('@')[0] || 'User'}
                 </span> */}
                </div>
                
             
  
                <button
                  onClick={handleLogout}
                  className="bg-[#151515]  px-6 py-2 rounded-3xl text-white font-semibold transition-transform hover:scale-105 shadow-2xl  hover:bg-[#A91D3A] "
                    >
                      Logout
                    </button>

              </div>
            ) : (
              <>
              <Link
                to="/login"
               className=" px-6 py-2 rounded-3xl text-white font-bold transition-transform hover:scale-105 shadow-2xl bg-[#A91D3A] "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-[#151515]    px-6 py-2 rounded-3xl text-white font-bold transition-transform hover:scale-105 shadow-2xl"
              >
                Register
              </Link>
              </>
            )}
          </div>




          {/* Mobile menu button - Updated styling */}
          <div className="md:hidden flex items-center ml-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>




   
      <div 
        className={`
          md:hidden fixed  top-16 bg-white shadow-lg
          transform transition-all duration-300 ease-in-out z-100
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
        `}
      >
      
        <div className="absolute inset-0 bg-blue-50" />
        
      
        <div className="relative px-4 pt-2 pb-3 space-y-2">
          <Link 
            to="/" 
            className={`block ${getLinkStyle('/')}`}
            onClick={() => {
              setActiveLink('/');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaHome className="inline-block mr-1" /> Home
          </Link>

          <Link 
            to="/allReviews" 
            className={`block ${getLinkStyle('/allReviews')}`}
            onClick={() => {
              setActiveLink('/allReviews');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaTags className="inline-block mr-1" /> All Reviews
          </Link>
       { 
       
       user && <>
           <Link 
            to="/addReview" 
            className={`block ${getLinkStyle('/addReview')}`}
            onClick={() => {
              setActiveLink('/addReview');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaUser className="inline-block mr-1" /> Add Review
          </Link>


           <Link 
            to="/myReview" 
            className={`block ${getLinkStyle('/myReview')}`}
            onClick={() => {
              setActiveLink('/myReview');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaUser className="inline-block mr-1" /> My Review
          </Link>

           <Link 
            to="/gameWatchList" 
            className={`block ${getLinkStyle('/gameWatchList')}`}
            onClick={() => {
              setActiveLink('/gameWatchList');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaUser className="inline-block mr-1" /> Game WatchList
          </Link>
       
           <Link 
            to="/my-profile" 
            className={`block ${getLinkStyle('/my-profile')}`}
            onClick={() => {
              setActiveLink('/my-profile');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaUser className="inline-block mr-1" /> Profile
          </Link>
       
       
       </>
          
          
          
          }
         

             { user && <div className="flex justify-center"><ProfileImage user={user} /></div>} 
             {/* { user && <div className=" text-gray-700 break-words">
                    {user.email?.split('.')[0] || user.email || 'User'}
                  </div>}  */}

          {
            user && (
              <button
              onClick={handleLogout}
              className="bg-[#151515]  px-6 py-2 rounded-3xl text-white font-semibold transition-transform hover:scale-105 shadow-2xl  hover:bg-[#A91D3A] "
            >
              Logout
            </button>
            )
          }
          
          {/* Add login button for mobile */}
          {!user && (
            <Link 
            to="/login" 
            className={`block ${getLinkStyle('/login')}`}
            onClick={() => {
              setActiveLink('/login');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaSignInAlt className="inline-block mr-1" /> Login
          </Link>
          )}

          {!user && (
             <Link 
             to="/register" 
             className={`block ${getLinkStyle('/register')}`}
             onClick={() => {
               setActiveLink('/register');
               setIsMobileMenuOpen(false);
             }}
           >
             <FaUserPlus className="inline-block mr-1" /> Register
           </Link>
          )}
        </div>
      </div>

      {/* {user && (
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-2 text-center">
          <p className="text-purple-800 font-medium">
            Welcome, {user.displayName || 'User'}!
          </p>
        </div>
      )} */}
    </nav>
  )
}

export default Navbar