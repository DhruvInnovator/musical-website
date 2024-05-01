"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive ={setActive} active={active} item="Home">

          
          
        </MenuItem>
        <MenuItem setActive ={setActive} active={active} item="Our course">

        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/bmt">Basic music theory</HoveredLink>
            <HoveredLink href="/adv">Advanced Composition</HoveredLink>
            <HoveredLink href="/song">Songwriting</HoveredLink>
            <HoveredLink href="/prod">Music Production</HoveredLink>
          </div>

        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/online">Online Music Lessons</HoveredLink>
            <HoveredLink href="/live">Live Virtual Classes</HoveredLink>
            <HoveredLink href="/theory">Music Theory Courses</HoveredLink>
            <HoveredLink href="/workshop">Performance Workshops</HoveredLink>
            
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}


export default Navbar