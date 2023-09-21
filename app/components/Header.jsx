import React from 'react'

export default function Header() {
  return (
    <>
      <header className="w-3/5 h-fit py-2 px-8 bg-white/70 top-8 absolute rounded-full">
          <nav> 
          {/* <h1 className="text-2xl font-bold text-skyblue">Logo</h1>  */}
          {/* use loop for the menu items */}
          <ul className="flex justify-around">
            {navs.map((navItem, idx) => (
              <li className="py-2 px-6 rounded-full text-gray-600 hover:bg-white hover:text-black hover:shadow-xl duration-300 cursor-pointer" key={idx} >
                {navItem.title}
              </li>
            ))}
          </ul>
        </nav> 
        </header>
     </>
  )
}


const navs = [
    { url: "#home", title: "Home" },
    { url: "#about", title: "About" },
    { url: "#experience", title: "Experience" },
    { url: "#project", title: "Project" },
    { url: "#social", title: "Social" },
    { url: "#contact", title: "Contact" },
];