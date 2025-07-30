"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>
                
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                        title="Algochurn"
                        href="https://algochurn.com"
                        src="https://assets.aceternity.com/demos/algochurn.webp"
                        description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                        title="Tailwind Master Kit"
                        href="https://tailwindmasterkit.com"
                        src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                        description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                        title="Moonbeam"
                        href="https://gomoonbeam.com"
                        src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                        description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        
                    </div>
                </MenuItem>

                <Link href={'/contact'}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar