import { useState } from "react"
import { CloseIcon, MenuIcon } from "./Icons"

function Nav() {
  const pathname = window.location.pathname
  const links = [
    {
      title: "Inicio",
      link: "/",
    },
    {
      title: "Proyectos",
      link: "/proyectos",
    },
    {
      title: "Sobre mí",
      link: "/#sobre-mi",
    },
  ]

  const [toggle, setToggle] = useState(false)
  return (
    <nav>
      <button
        className="flex gap-2 py-2 px-4 border-primary border-2 rounded-md hover:bg-primary transition hover:text-backg-400 z-20 relative md:hidden"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Cerrar" : "Menú"}
        <span>{toggle ? <CloseIcon /> : <MenuIcon />}</span>
      </button>
      <section
        className={` md:flex md:h-auto md:justify-center md:static md:w-auto fixed top-0 right-0 grid place-content-center w-screen h-full bg-backg-300 z-10 ease-in-out duration-300  ${
          toggle ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <ul className="flex flex-col gap-6 text-xl text-center font-medium md:flex-row md:items-center">
          {links.map((link) => (
            <li key={link.title}>
              <a
                className={
                  pathname === link.link
                    ? "text-primary text-4xl uppercase block md:inline py-4 px-6 md:text-lg md:px-0"
                    : "hover:text-white text-4xl uppercase transition duration-300 block md:inline py-4 px-6 hover:bg-primary rounded-md md:text-lg md:px-0 md:hover:bg-opacity-0 md:hover:text-primary"
                }
                href={link.link}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}

export default Nav
