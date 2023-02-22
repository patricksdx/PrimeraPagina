import logo from "./icons/Logo.png";
import { FaAlignJustify } from "react-icons/fa";

function Header() {
  return (
    <div className="text-slate-700 grid grid-cols-2 w-full md:w-4/6 xl:w-4/5 md:m-auto">
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
            const boton = document.querySelector("#boton");
            const boton1 = document.querySelector("#boton1");

            opciones.removeAttribute("class"),
              boton.setAttribute("class", "hidden"),
              boton1.setAttribute("class", "block");
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
          <FaAlignJustify></FaAlignJustify>
        </button>
      </div>
      <ul id="opciones" className="hidden ml-auto md:flex xl:flex">
        <li className="w-full p-4 rounded-lg hover:text-white hover:bg-slate-700">
          <a href="#">Home</a>
        </li>
        <li className="w-full p-4 rounded-lg hover:text-white hover:bg-slate-700">
          <a href="#">About</a>
        </li>
        <li className="w-full p-4 rounded-lg hover:text-white hover:bg-slate-700">
          <a href="#">Services</a>
        </li>
        <li className="w-full p-4 rounded-lg hover:text-white hover:bg-slate-700">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
