import profileImg from '../img/p.jpg'; 
import { User2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const Navlinks = [{
      title: "Home",
      path: "/"
  },
  {
      title: "Projects",
      path: "/projects"
  },
  {
      title: "Contact",
      path: "/contact"
  }
  ]
  return (
    <nav className="bg-gradient2 p-4 ml-10 mr-10 rounded-xl">
      <div className="container mx-auto flex justify-between items-center h-[89px]">
        <div className="text-white font-bold text-xl hover:text-gray-900">
            <img src={profileImg} className="w-[120px] h-[120px] rounded-full"/>
            {/* Sudhir R */}
        </div>
        <div className="space-x-7 text-xl flex justify-end">
          <ul className='w-full list-none flex flex-row justify-center gap-6'>
            {
              Navlinks.map((navdata, index) => (
                <NavLink key={index} to={navdata.path}>
                    <li className='font-bold text-xl text-white'>{navdata.title}</li>
                </NavLink>
              ))
            }
          </ul>
          <User2 className='h-8 w-8' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar