import React from 'react'
import { useLocation, useNavigate } from 'react-router'
const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    function pathRouteMatch(route) {
        if (route === location.pathname) {
            return true
        }
    }
  return (
      <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
          <header className=' flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img className=' h-10 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Realtor.com_logo.png" onClick={()=>navigate("/")} alt="" />
            </div>
            <div>
                <ul className='flex space-x-10'>
                      <li className={` block cursor-pointer py-3 text-sm font-semibold text-gray-400  border-b-4 ${pathRouteMatch("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}  >
                          home
                      </li>
                      
                      <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-4 ${pathRouteMatch("/Offers") && "text-black border-b-red-500"}`} onClick={()=>navigate("/Offers")} >
                          offers
                      </li>
                      
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400  border-b-4 ${pathRouteMatch("/Signin") && "text-black border-b-red-500"}`} onClick={()=>navigate("/Signin")} >sign In</li>
                </ul>
            </div>
        </header>
      </div>
  )
}

export default Header