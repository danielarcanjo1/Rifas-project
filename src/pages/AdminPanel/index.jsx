import { useState, useEffect } from "react";
import NewCampaignForm from "../../components/NewCampaignFrom";
import PropTypes from "prop-types";

export default function AdminPanel({ onHideMenu }) {
   const [showForm, setShowForm] = useState(false);
   useEffect(() => {
      onHideMenu(false);

      return () => {
         onHideMenu(true);
      };
   }, [onHideMenu]);

   return (
      <div className="bg-black w-screen h-screen p-6">
         <h1 className="text-center text-3xl text-white">
            Painel do Administrador
         </h1>
         <div className="p-2 bg-white mt-10 w-40 h-40 rounded-md">
            <button
               className="bg-yellow-300 text-xl p hover:text-yellow-500"
               onClick={() => setShowForm(true)}
            >
               Criar Campanha
            </button>
         </div>
         {showForm && <NewCampaignForm />}{" "}
      </div>
   );
}

AdminPanel.propTypes = {
   onHideMenu: PropTypes.func,
};
