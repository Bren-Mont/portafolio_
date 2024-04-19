"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <div className="flex justify-end bg-amber-100">
    <nav className={'fixed bg-transparent p-4 '}>
        
          <ul className="space-y-6 pl-4 md:flex text-end md:space-x-7 md:space-y-0 p-2 text-fuchsia-800">
            <li >
              <Link href={"/about"} className="block">
                Acerca de mí
              </Link>
            </li>
            <li >
              <Link href={"/"} className="block">
                Experiencia
              </Link>
            </li>
            <li >
              <Link href={"/"} className="block">
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href={"https://walink.co/42c8e4"}
                
              >
                Hablemos
              </Link>
            </li>
          </ul>
    </nav>
    </div>
  );
}
