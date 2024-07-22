import { useState } from "react";

function NewCapaingForm() {
   const [nomeCampanha, setNomeCampanha] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <>
         <h1 className="text-white">Criar nova campanha</h1>
         <form className=" bg-yellow-200 flex flex-col p-4 w-52" onSubmit={handleSubmit}>
            <div>
               <label htmlFor="nomeCampanha">Nome da Campanha:</label>
               <input
                  type="text"
                  id="nomeCampanha"
                  value={nomeCampanha}
                  onChange={(e) => setNomeCampanha(e.target.value)}
               />
            </div>
          
            <button type="submit">Criar Campanha</button>
         </form>
      </>
   );
}

export default NewCapaingForm;
