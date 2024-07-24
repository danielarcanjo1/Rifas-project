import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { FaRankingStar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { useEffect,useState } from "react";
import PropTypes from "prop-types";
import Dasboard from "../../components/AdminPanelComponents/Dasboard";


export default function AdminPanel({ onHideMenu }) {
   useEffect(() => {
      onHideMenu(false);

      return () => {
         onHideMenu(true);
      };
   }, [onHideMenu]);

   const [selectedItem, setSelectedItem] = useState("")

   function handleSelectItem(item){
       setSelectedItem(item)
   }

   return (
      <div className="bg-black w-screen h-screen">
         <div className="header fixed left-0 top-0 w-full h-16 bg-gray-900 p-4">
            <h1 className="text-2xl text-white">LOGO</h1>
         </div>

         <div className="fixed left-0 top-16 h-full w-64 bg-gray-900">
            <ul>
               <li 
                  onClick={() => handleSelectItem("Dashboard")}
                  className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Dashboard" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  
                  <IoHomeOutline />
                  Dashboard
               </li>
               <li 
               onClick={() => handleSelectItem("Campanhas")}
               className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Campanhas" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  <CiViewList />
                  Campanhas
               </li>
               <li 
               onClick={() => handleSelectItem("Pedidos")}
               className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Pedidos" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  <IoCartOutline />
                  Pedidos
               </li>
               <li onClick={() => handleSelectItem("Relatorios")}
                  className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Relatorios" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  <GrDocumentText />
                  Relatorios
               </li>
               <li onClick={() => handleSelectItem("Ranking")}
                  className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Ranking" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  <FaRankingStar />
                  Ranking
               </li>
               <li onClick={() => handleSelectItem("Clientes")}
                  className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Clientes" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  <FaUsers />
                  Clientes
               </li>
               <li onClick={() => handleSelectItem("Usuarios")}
                  className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Usuarios" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  <FaRegUser />
                  Usuarios
               </li>
               <li onClick={() => handleSelectItem("Gateway")}
                  className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Gateway" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  <FaMoneyBillTransfer />
                  Gateway de pagamento
               </li>
               <li onClick={() => handleSelectItem("Config")}
                  className={`flex items-center gap-4 text-white p-4 cursor-pointer ${ selectedItem ==="Config" ? "bg-purple-500": "hover:bg-purple-500"}`}>
                  <FaGear />
                  Configurações
               </li>
            </ul>
         </div>
         <div className="fixed top-16 left-64 w-full h-full pl-44 pt-8">
            <Dasboard />
         </div>
      </div>
   );
}

AdminPanel.propTypes = {
   onHideMenu: PropTypes.func,
};
