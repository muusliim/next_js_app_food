import Image from "next/image"
import Link from "next/link"
import {RiSearchLine, RiShoppingCartLine, RiUserLine} from 'react-icons/ri'
import { CgClose, CgMenuRight } from 'react-icons/cg'

import Nav from "./Nav"

const Header = () => {
	return (
		<header className="padding-container max-container flexBetween py-3 w-[90%] bg-white/30 
		mx-auto fixed top-12 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-md  shadow-lg">
				<Link href={'/'} >
						<Image src={'/logo.png'} alt="logo" height={122} width={122}/>
				</Link>

				<Nav containerStyle={"hidden lg:flex gap-14 transition-all duration-500"}
						 linkStyle={"uppercase text-sm font-semibold relative hover:text-secondary transition-all"}
						 underlineStyle={"absolute left-0 top-[100%] h-[2px] bg-secondary w-[100%]"}
				/>

				<div className="flex gap-4 lg:gap-6">
					<CgMenuRight className="lg:hidden inline-block cursor-pointer medium-15 hover:text-secondary"/>
					<CgClose className="lg:hidden inline-block cursor-pointer medium-15 hover:text-secondary"/>
					<Link href={'/'}><RiSearchLine/></Link>
					<Link href={'/'}><RiShoppingCartLine/></Link>
					<Link href={'/'}><RiUserLine/></Link>
				</div>
		</header>
	)
}

export default Header