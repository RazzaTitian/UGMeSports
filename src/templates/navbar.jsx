"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { oxygen } from "./font";
import Link from "next/link";
import { ButtonPrimary } from "./buttons";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { BsList, BsXLg } from "react-icons/bs";
import { useEffect, useState } from "react"

const LoginButton = ({ onScroll, children }) => {
  return (
    <button
      id="login-button"
      className={
        (onScroll > 200 ? "lg:text-teal-secondary lg:outline-teal-secondary " : "lg:text-white lg:outline-white ") +
        oxygen +
        "py-3 px-6 outline outline-teal-secondary text-teal-secondary hover:outline-teal-secondary rounded-md bg-transparent hover:bg-teal-secondary active:bg-[#1F8383] transition-colors hover:text-white"
      }
    >
      {children}
    </button>
  );
};

const EXCEPT_RENDER = ["/login", "/register"];

const DropdownComponent = ({ title, onScroll, onOpenChange, isOpen, children }) => {
  return (
    <Dropdown radius="sm" onOpenChange={(isOpen) => onOpenChange(isOpen)} placement="bottom-end">
          <DropdownTrigger >
            <div
              className={
                (onScroll > 200 ? "lg:text-primary-dark " : "lg:text-white ") +
                oxygen +
                "cursor-pointer flex items-center gap-2 transition-all hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-lg"
              }
            >
              <p>{title}</p>
              <FiChevronDown
                size={20}
                className={"transition-transform " + (isOpen ? "rotate-180" : "")}
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu variant="flat">
            {children}
          </DropdownMenu>
        </Dropdown>
  )
}

const MyNavbar = () => {

  const [isInitiativeOpen, setIsInitiativeOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect (() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    })
  }, [])

  const path = usePathname()

  if (EXCEPT_RENDER.includes(path)) {
    return null;
  }


  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBlurred={false}
      classNames={{
        base: (scrollPos > 200 ? "lg:py-0 lg:bg-white " : "lg:py-4 lg:bg-transparent ") + "bg-white fixed py-0 border-b border-slate-200/50 transition-all shadow-lg drop-shadow-sm",
        wrapper: "max-w-[1300px]",
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          icon={isMenuOpen ? <BsXLg size={30} />  : <BsList size={30} />}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-fit aspect-square flex lg:hidden hover:bg-slate-200/50 text-teal-secondary h-min p-2"/>
        <NavbarBrand className="hidden sm:block">
          <Link href="/">
            <p
              className={
                (scrollPos > 200 ? "lg:text-primary-dark ":"lg:text-white " ) +
                oxygen +
                "text-3xl font-bold transition-colors text-primary-dark"
              }
            >
              ShoreLab
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-0" justify="end">
        <NavbarItem>
          <Link
            href="/"
            className={
              (scrollPos > 200 ? "lg:text-primary-dark ":"lg:text-white " ) +
              oxygen +
              "transition-colors text-primary-dark hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-lg"
            }
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            className={
              (scrollPos > 200 ? "lg:text-primary-dark ":"lg:text-white " ) +
              oxygen +
              "transition-colors text-primary-dark hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-lg"
            }
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Dropdown radius="sm" onOpenChange={(isOpen) => setIsInitiativeOpen(isOpen)} placement="bottom-end">
          <DropdownTrigger >
            <div
              className={
                (scrollPos > 200 ? "lg:text-primary-dark " : "lg:text-white ") +
                oxygen +
                "cursor-pointer flex items-center gap-2 transition-all text-primary-dark hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-lg"
              }
            >
              <p>Initiatives</p>
              <FiChevronDown
                size={20}
                className={"transition-transform " + (isInitiativeOpen ? "rotate-180" : "")}
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu variant="flat">
            <DropdownItem
              key="shorelab-academy"
              href="/initiatives/shorelab-academy"
              className={oxygen + "text-teal-secondary data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
              ><span className="text-lg">ShoreLab Academy</span></DropdownItem>
            <DropdownItem
              key="projects"
              href="/initiatives/projects"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">Other Projects</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent
            onScroll={scrollPos}
            title="Community"
            isOpen={isCommunityOpen}
            onOpenChange={setIsCommunityOpen}>
              <DropdownItem
              key="shoresnap"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">ShoreSnap</span></DropdownItem>
              <DropdownItem
              key="shorelab-insight"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">ShoreLab Insight</span></DropdownItem>
          </DropdownComponent>
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent
            onScroll={scrollPos}
            title="Information"
            isOpen={isInformationOpen}
            onOpenChange={setIsInformationOpen}>
              <DropdownItem
              key="contact"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">Contact</span></DropdownItem>
              <DropdownItem
              key="partnership"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">Partnership</span></DropdownItem>
              <DropdownItem
              key="career"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">Career</span></DropdownItem>
          </DropdownComponent>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/login">
            <LoginButton onScroll={scrollPos} size="sm">Login</LoginButton>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/register">
            <ButtonPrimary size="sm">Register</ButtonPrimary>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className={oxygen + "text-primary-dark p-0 gap-0 h-fit"}>
        <NavbarMenuItem className="flex">
          <Link onClick={() => setIsMenuOpen(false)} href="/" className="w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-4 border-b border-slate-200">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex">
          <Link  onClick={()=>setIsMenuOpen(false)} href="/about" className="w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-4 border-b border-slate-200">
            About Us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex flex-col">
          <button onClick={() => setIsInitiativeOpen(!isInitiativeOpen)} className="flex justify-between items-center w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-4 border-b border-slate-200">
            <div>
              Initiatives
            </div>
            <FiChevronDown size={25} className={(isInitiativeOpen ? "rotate-180 " : " ") + " transition-transform"} />
          </button>
          <Link onClick={()=>setIsMenuOpen(false)} href="/initiatives/shorelab-academy" className={(isInitiativeOpen ? "block ": "hidden ") + "w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-8 border-b border-slate-200"}>
            ShoreLab Academy
          </Link>
          <Link onClick={()=>setIsMenuOpen(false)} href="/initiatives/projects" className={(isInitiativeOpen ? "block ": "hidden ") + "w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-8 border-b border-slate-200"}>
            Other Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex flex-col">
          <button onClick={() => setIsCommunityOpen(!isCommunityOpen)} className="flex justify-between items-center w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-4 border-b border-slate-200">
            <div>
              Community
            </div>
            <FiChevronDown size={25} className={(isCommunityOpen ? "rotate-180 " : " ") + " transition-transform"} />
          </button>
          <Link onClick={()=>setIsMenuOpen(false)} href="#" className={(isCommunityOpen ? "block ": "hidden ") + "w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-8 border-b border-slate-200"}>
            ShoreSnap
          </Link>
          <Link onClick={()=>setIsMenuOpen(false)} href="#" className={(isCommunityOpen ? "block ": "hidden ") + "w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-8 border-b border-slate-200"}>
            ShoreLab Insight
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex flex-col">
          <button onClick={() => setIsInformationOpen(!isInformationOpen)} className="flex justify-between items-center w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-4 border-b border-slate-200">
            <div>
              Information
            </div>
            <FiChevronDown size={25} className={(isInformationOpen ? "rotate-180 " : " ") + " transition-transform"} />
          </button>
          <Link onClick={()=>setIsMenuOpen(false)} href="#" className={(isInformationOpen ? "block ": "hidden ") + "w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-8 border-b border-slate-200"}>
            Contact
          </Link>
          <Link onClick={()=>setIsMenuOpen(false)} href="#" className={(isInformationOpen ? "block ": "hidden ") + "w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-8 border-b border-slate-200"}>
            Partnership
          </Link>
          <Link onClick={()=>setIsMenuOpen(false)} href="#" className={(isInformationOpen ? "block ": "hidden ") + "w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-8 border-b border-slate-200"}>
            Career
          </Link>
        </NavbarMenuItem>
        
      </NavbarMenu>
    </Navbar>
  );
};

export default MyNavbar;
