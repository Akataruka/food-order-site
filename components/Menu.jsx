"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, name: "HomePage", url: "/" },
  { id: 2, name: "Menu", url: "/menu" },
  { id: 3, name: "Working Hour", url: "/" },
  { id: 4, name: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //Temporary user state
  const user = false 

  return (
    <div>
      {open ? (
        <Image
          src="/close.png"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      ) : (
        <Image
          src="/open.png"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      )}

      {open && (<div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-96px)] flex flex-col gap-8 justify-center items-center text-3xl z-10">
        {links.map((link) => (
          <Link href={link.url} key={link.id} onClick={()=>setOpen(false)}>
            {link.name}
          </Link>
        ))}
        {!user?(
          <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>):(
        <Link href="/Orders" onClick={()=>setOpen(false)}>Orders</Link>)
        }
        <Link href="/cart" onClick={()=>setOpen(false)}>
        <CartIcon/>
        </Link>
      </div>)}
    </div>
  );
};

export default Menu;
