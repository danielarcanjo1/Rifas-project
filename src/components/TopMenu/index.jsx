import { BsChatRightDots } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { BsCardList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { LuUserPlus2 } from "react-icons/lu";
import { GiPodiumWinner } from "react-icons/gi";
import { IoIosLogIn } from "react-icons/io";

import { useState } from "react";

export default function TopMenu() {
   const [showMenu, setShowMenu] = useState(true);
   const [selectedItem, setSelectedItem] = useState("");

   function handleMenu() {
      setShowMenu(!showMenu);
   }

   function handleItemSelected(item) {
      setSelectedItem(item);
   }

   return (
      <>
         <header className="flex items-center justify-between bg-sky-500 h-32 px-14">
            <CiMenuBurger
               onClick={handleMenu}
               className="cursor-pointer text-white w-6 h-6 hover:scale-110"
            />
            <h1 className="bg-sky-500 text-3xl text-white">Sua Logo</h1>
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110">
               <BsChatRightDots className="cursor-pointer text-white w-4 h-4 " />
               <p className="text-white">Suporte</p>
            </div>
         </header>

         {showMenu && (
            <div className="bg-sky-300 w-68 shadow-md z-10">
               <ul className="flex flex-col items-center items-stretch md:flex-nowrap">
                  <li
                     onClick={() => handleItemSelected("inicio")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "inicio"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <Link className="text-white" to="/inicio">
                        <div className="flex items-center gap-5">
                           <IoHomeOutline className="text-white" />
                           Inicio
                        </div>
                     </Link>
                  </li>
                  <li
                     onClick={() => handleItemSelected("campanhas")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "campanhas"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <div className="flex items-center gap-5">
                        <BsCardList className="text-white" />
                        <p className="text-white">Campanhas</p>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("comunicados")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "comunicados"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <div className="flex items-center gap-5">
                        <IoMegaphoneOutline className="text-white" />
                        <p className="text-white">Comunicados</p>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("meus titulos")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "meus titulos"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <div className="flex items-center justify-center gap-5">
                        <BsCardList className="text-white" />
                        <p className="text-white">Meus Títulos</p>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("termos de uso")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "termos de uso"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <div className="flex items-center gap-5">
                        <FaRegHandshake className="text-white" />
                        <p className="text-white">Termos de uso</p>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("cadastro")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "cadastro"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <div className="flex items-center gap-5">
                        <LuUserPlus2 className="text-white" />
                        <Link className="text-white" to="/cadastrar">
                           Cadastro
                        </Link>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("ganhadores")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "ganhadores"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <div className="flex items-center gap-5">
                        <GiPodiumWinner className="text-white" />
                        <p className="text-white">Ganhadores</p>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("entrar")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "entrar"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <div className="flex items-center gap-5">
                        <IoIosLogIn className="text-white" />
                        <Link to="/login" className="text-white">
                           Entrar
                        </Link>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("adm")}
                     className={`flex py-2 px-4 justify-center cursor-pointer ${
                        selectedItem === "adm"
                           ? "bg-yellow-400"
                           : "hover:bg-yellow-400"
                     }`}
                  >
                     <Link className="text-white" to="/painel-do-administrador">
                        <div className="flex items-center gap-5">
                           <BsChatRightDots color="white" />
                           Adm
                        </div>
                     </Link>
                  </li>
               </ul>
            </div>
         )}
      </>
   );
}
