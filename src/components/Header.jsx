import logo from "./icons/Logo.png";
import { FaAlignJustify } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function Header() {
  return (
    <header className="text-slate-700 grid grid-cols-2 w-full md:w-4/6 xl:w-4/5 md:m-auto">
      <div className="flex m-6 md:m-4">
        <picture>
          <img src={logo} className="w-5 mr-4"></img>
        </picture>
        <h1>MARCA</h1>
      </div>
      <div className="m-6 ml-auto md:m-4 md:hidden">
        <button
          className="block"
          id="boton"
          onClick={() => {
            const opciones = document.querySelector("#opciones");
            const navegacion = document.querySelector("#navegacion");
            const navegacion1 = document.querySelector("#navegacion1");
            const navegacion2 = document.querySelector("#navegacion2");
            const navegacion3 = document.querySelector("#navegacion3");
            const boton = document.querySelector("#boton");
            const boton1 = document.querySelector("#boton1"); 
            const livnav2 = document.querySelector("#livnav2");
            const nav2 = document.querySelector('#nav2');

            opciones.removeAttribute("class"),
              opciones.setAttribute(
                "class",
                "col-start-1 col-end-3 text-center"
              ),
              navegacion.setAttribute("class", " hover:text-white hover:bg-slate-700 px-24 py-3 block"),
              navegacion1.setAttribute("class", " hover:text-white hover:bg-slate-700 px-24 py-3 block"),
              navegacion2.setAttribute("class", " hover:text-white hover:bg-slate-700 px-24 py-3 block"),
              navegacion3.setAttribute("class", " hover:text-white hover:bg-slate-700 px-24 py-3 block"),
              boton.setAttribute("class", "hidden"),
              boton1.setAttribute("class", "block"),
              nav2.setAttribute("class","hidden block z-10 group-hover:block px-24 py-3"),
              livnav2.setAttribute("class","group");
          }}
        >
          <FaAlignJustify></FaAlignJustify>
        </button>

        <button
          className="hidden"
          id="boton1"
          onClick={() => {
            const opciones = document.querySelector("#opciones");
            const boton = document.querySelector("#boton");
            const boton1 = document.querySelector("#boton1");

            opciones.setAttribute("class", "hidden ml-auto md:flex xl:flex"),
              boton1.setAttribute("class", "hidden"),
              boton.setAttribute("class", "block");
          }}
        >
          <BsXLg></BsXLg>
        </button>
      </div>
      <ul id="opciones" className="hidden ml-auto mr-0 my-auto md:flex xl:flex col-end">
        <li>
          <a id="navegacion" href="#" className="block px-6 py-1 hover:text-white hover:bg-slate-700">
            Home
          </a>
        </li>
        <li>
          <a id="navegacion1" href="#" className="block px-6 py-1 hover:text-white hover:bg-slate-700">
            About
          </a>
        </li>
        <li id="linav2" className="group" >
          <a id="navegacion2" href="#" className="block  px-6 py-1 hover:text-white hover:bg-slate-700">
            Services
          </a>
          <ul id="nav2" className="group-hover:visible invisible absolute z-10">
            <li>
              <a href="#" className="block px-6 py-1 hover:text-white hover:bg-slate-700">
              Service 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-1 hover:text-white hover:bg-slate-700">
              Service 2
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-1 hover:text-white hover:bg-slate-700">
              Service 3
              </a>
            </li>
          </ul>
        </li>
        <li >
          <a id="navegacion3" href="#" className="block px-6 py-1 hover:text-white hover:bg-slate-700">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
