"use client";

import React, { useEffect } from "react";

export function ThemeProvider({children}: {children: React.ReactNode}){
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme")
        if(savedTheme){
          document.documentElement.classList.toggle("dark", savedTheme === "dark")
        }
        else {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
          document.documentElement.classList.toggle("dark", prefersDark)
        }
      }, [])
    
    return <>{children}</>
}