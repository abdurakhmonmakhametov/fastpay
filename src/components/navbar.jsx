import { navigationLinks } from "../util/constatnts"
import { logo } from "../assets"
import { menu } from "../assets" 
import { close } from "../assets"
import { useState } from "react"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState('home');

  const toggleHandler = () => {
    setToggleNav(prev => !prev)
  }

  const activeHandler = (id) => {
	setActive(id)
  }

  return (
		<div className='flex items-center justify-between py-6'>
			<a href='/'>
				<img
					src={logo}
					alt='logo'
					className='w-[130px] h-[35px] cursor-pointer z-40'
				/>
			</a>

			<ul
				className={`items-center justify-end flex-1 hidden list-none sm:flex sidebar ${
					toggleNav ? 'sidebar-open ' : 'sidebar-close'
				}`}
			>
				{navigationLinks.map((item) => (
					<li
						key={item.id}
						className={`
							${active === item.id ? 'text-white' : 'text-lightWhite'}
							font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite 
							sm:mr-6 md:mr-10 last:mr-0 hover:text-white transition-all duration-500
							`}
						onClick={() => activeHandler(item.id)}
					>
						<a href={`#${item.id}`}>{item.title}</a>
					</li>
				))}
			</ul>

			<div className='flex items-center justify-end flex-1 sm:hidden'>
				<img
					src={toggleNav ? close : menu}
					alt='nav'
					className={`w-[30px] h-[30px] object-contain z-40 transition-transform duration-300 ${
						toggleNav
							? 'rotate-180 opacity-100'
							: 'rotate-0 opacity-100'
					}`}
					onClick={toggleHandler}
				/>
			</div>
		</div>
  );
}

export default Navbar