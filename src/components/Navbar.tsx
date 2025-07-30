"use client";
import React, { useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    const navItems = [
        {
        name: "Home",
        link: "/",
        },
        {
        name: "Projects",
        link: "/projects",
        },
        {
        name: "Contact",
        link: "/contact"
        },
    ];

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}>
            <FloatingNav navItems={navItems} />
        </div>
    )
}

export default Navbar