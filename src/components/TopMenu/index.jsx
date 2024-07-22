import Logo from "../../assets/Logo.png";
import { BsChatRightDots } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { BsCardList } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function TopMenu() {
   return (
      <>
         <div className="flex items-center justify-around bg-sky-500 h-40">
            <img className="cursor-pointer w-40 h-20" src={Logo} alt="Logo" />
         </div>

         <div className="bg-sky-200 w-full bg-white shadow-md z-10">
            <ul className="flex flex-wrap items-stretch items-center justify-center md:flex-nowrap">
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <IoHomeOutline className="text-white" />
                     <Link className="text-white" to="/inicio">Inicio</Link>

                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <BsCardList className="text-white" />
                     <p className="text-white">Campanhas</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <IoHomeOutline className="text-white" />
                     <p className="text-white">Comunicados</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 items-center justify-center cursor-pointer">
                  <div className="flex items-center justify-center gap-5">
                     <IoHomeOutline className="text-white" />
                     <p className="text-white">Meus Titulos</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <IoHomeOutline className="text-white" />
                     <p className="text-white">Termos de uso</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <IoHomeOutline className="text-white" />
                     <p className="text-white">Cadastro</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <IoHomeOutline className="text-white" />
                     <p className="text-white">Ganhadores</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <IoHomeOutline className="text-white" />
                     <p className="text-white">Entrar em contato</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <IoHomeOutline className="text-white" />
                     <p className="text-white">Fazer Login</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <BsChatRightDots color="white" />
                     <p className="text-white">Suporte</p>
                  </div>
               </li>
               <li className="flex py-2 px-4 hover:bg-yellow-400 justify-center cursor-pointer">
                  <div className="flex items-center gap-5">
                     <BsChatRightDots color="white" />
                     <Link className="text-white" to="/painel-do-administrador">Adm</Link>
                  </div>
               </li>
            </ul>
         </div>
      </>
   );
}
