"use client";

import Image from "next/image";
import Link from "next/link";
import { RiSearchLine, RiShoppingCartLine, RiUserLine } from "react-icons/ri";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useOutSideAlerter } from "@/app/hooks/useOtsideAlerter";

import Nav from "./Nav";

const Header = () => {

  const {isShow, ref, setIsShow} = useOutSideAlerter(false);

  const onToggleMenu = () => setIsShow(!isShow);

  return (
    <header
      className="padding-container max-container flexBetween py-3 w-[90%] bg-white/80 
		mx-auto fixed top-12 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg gap-2 backdrop-blur-[3px]"
    >
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" height={122} width={122} />
      </Link>

      <Nav
        containerStyle={
          isShow
            ? "flex flex-col justify-center p-12 fixed top-20 bg-white shadow-lg rounded-lg transition-all duration-300 right-0"
            : "hidden lg:flex gap-14 "
        }
        linkStyle={
          isShow
            ? "uppercase my-4 text-sm font-bold relative hover:text-secondary "
            : "uppercase text-sm font-bold relative hover:text-secondary"
        }
        underlineStyle={
          isShow ? "absolute left-0 top-[100%] h-[2px] bg-secondary w-[100%]" :
          "absolute left-0 top-[100%] h-[2px] bg-secondary w-[100%]"
        }
        theref={ref}
      />

      <div className="flex gap-4 lg:gap-6">
        {!isShow ? (
          <CgMenuRight
            className="lg:hidden inline-block cursor-pointer medium-15 hover:text-secondary"
            onClick={onToggleMenu}
          />
        ) : (
          <CgClose
            className="lg:hidden inline-block cursor-pointer medium-15 hover:text-secondary"
            onClick={onToggleMenu}
          />
        )}

        <Link href={"/"}>
          <RiSearchLine />
        </Link>
        <Link href={"/"}>
          <RiShoppingCartLine />
        </Link>
        <Link href={"/"}>
          <RiUserLine />
        </Link>
      </div>
    </header>
  );
};

export default Header;
