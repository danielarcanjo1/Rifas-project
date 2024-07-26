import { useState } from "react";
export default function CreateCampaignForm() {
   const [selectedItem, setSelectedItem] = useState("Dados");

   function handleSelectItem(item) {
      setSelectedItem(item);
   }
   return (
      <div className="mt-10 p-4 rounded-md bg-gray-900 w-fit ">
         <div className="tabs ">
            <ul className="flex gap-1 text-white bg-gray-900">
               <li
                  onClick={() => handleSelectItem("Dados")}
                  className={`${
                     selectedItem === "Dados"
                        ? "bg-purple-500"
                        : "hover:bg-purple-500"
                  } py-2 px-8 border cursor-pointer`}
               >
                  Dados
               </li>
               <li
                  onClick={() => handleSelectItem("Imagens")}
                  className={`${
                     selectedItem === "Imagens"
                        ? "bg-purple-500"
                        : "hover:bg-purple-500"
                  } py-2 px-8 border cursor-pointer`}
               >
                  Imagens
               </li>
               <li
                  onClick={() => handleSelectItem("Descontos")}
                  className={`${
                     selectedItem === "Descontos"
                        ? "bg-purple-500"
                        : "hover:bg-purple-500"
                  } py-2 px-8 border cursor-pointer`}
               >
                  Descontos
               </li>
               <li
                  onClick={() => handleSelectItem("Ranking de compradores")}
                  className={`${
                     selectedItem === "Ranking de compradores"
                        ? "bg-purple-500"
                        : "hover:bg-purple-500"
                  } py-2 px-8 border cursor-pointer`}
               >
                  Ranking de compradores
               </li>
               <li
                  onClick={() => handleSelectItem("Barra de Progresso")}
                  className={`${
                     selectedItem === "Barra de Progresso"
                        ? "bg-purple-500"
                        : "hover:bg-purple-500"
                  } py-2 px-8 border cursor-pointer`}
               >
                  Barra de Progresso
               </li>
               <li
                  onClick={() => handleSelectItem("Ganhador")}
                  className={`${
                     selectedItem === "Ganhador"
                        ? "bg-purple-500"
                        : "hover:bg-purple-500"
                  } py-2 px-8 border cursor-pointer`}
               >
                  Ganhador
               </li>
               <li
                  onClick={() => handleSelectItem("Cotas premiadas")}
                  className={`${
                     selectedItem === "Cotas premiadas"
                        ? "bg-purple-500"
                        : "hover:bg-purple-500"
                  } py-2 px-8 border cursor-pointer`}
               >
                  Cotas premiadas
               </li>
            </ul>
         </div>
         <div className="DateForm flex flex-col mt-6 gap-4 w-full text-white">
            <div className="titleField w-full flex flex-col gap-2">
               <label htmlFor="campaignTitle">Titulo</label>
               <input
               className="p-2 rounded-lg bg-gray-800"
                  type="text"
                  name="campaignTitle"
                  id="campaignTitle"
                  placeholder="Nome da campanha"
               />
            </div>
            <div className="subTitleField flex flex-col gap-2">
               <label htmlFor="campaignSubTitle">Titulo</label>
               <input
               className="p-2 rounded-lg bg-gray-800"
                  type="text"
                  name="campaignSubTitle"
                  id="campaignSubTitle"
                  placeholder="ex: Campanhha do milhão"
               />
            </div>
            <div className="titleField flex flex-col gap-2">
               <label htmlFor="descriptionText">Descrição</label>
               <textarea
               className="p-2 h-32 rounded-lg bg-gray-800"
                  name="descriptionText"
                  id="descriptionText"
                  placeholder="Descrição da campanha"
               ></textarea>
            </div>
            <div className="selectTypeOfCampaign flex flex-col gap-2 ">
               <label htmlFor="selectTypeOfCampaign">Tipo da campanha</label>
               <select className="p-2 w-52 rounded-lg bg-gray-800" name="selectTypeOfCampaign " id="selectTypeOfCampaign">
                  <option value="">Automatica</option>
                  <option value="">Escolha manual</option>
               </select>
            </div>
            <div className="DateAndHourCampaign flex flex-col w-52 gap-2">
               <label htmlFor="DateAndHourCampaign">
                  Data e hora da campanha
               </label>
               <input
                  className="p-2 w-52 rounded-lg bg-gray-800"
                  type="datetime-local"
                  name="DateAndHourCampaign"
                  id="DateAndHourCampaign"
               />
            </div>
            <div className="privateCampaign flex flex-col gap-2">
               <label htmlFor="">Campanha Privada ?</label>
               <div className="privateCampaignButton">
                  <button className="p-2 bg-white text-black">Não</button>
                  <button className="p-2 bg-gray-700">Sim</button>
               </div>
            </div>
            <div className="featuredCampaign flex flex-col gap-2">
               <label htmlFor="">Campanha Em destaque ?</label>
               <div>
                  <button className="p-2 bg-white text-black">Não</button>
                  <button className="p-2 bg-gray-700">Sim</button>
               </div>
            </div>
            <div className="numberOfNumbers flex flex-col gap-2 w-52">
               <label htmlFor="">Quantidade de numeros</label>
               <select className="p-2 w-52 rounded-lg bg-gray-800" name="" id="">
                  <option value="">10</option>
                  <option value="">100</option>
                  <option value="">1000</option>
                  <option value="">10000</option>
                  <option value="">100000</option>
                  <option value="">1000000</option>
               </select>
            </div>
            <div className="quotaValue flex flex-col gap-2">
              <label htmlFor="">Valor por cota</label>
              <input className="p-2 rounded-lg bg-gray-800" type="text" name="" id=""/>
            </div>
            <div className="timeToPay flex flex-col gap-2">
              <label htmlFor="">Tempo para Pagamento</label>
              <select className="flex flex-col p-2 w-full rounded-lg bg-gray-800" name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="limitValue flex flex-col gap-2">
              <label htmlFor="">Valor limite por usuario</label>
              <input  className="p-2 rounded-lg bg-gray-800" type="text" name="" id="" />
            </div>
            <div className="minimunQuantity flex flex-col gap-2">
              <label htmlFor="">Quantidade minima de compra</label>
              <input className="p-2 rounded-lg bg-gray-800" type="text" name="" id="" />
            </div>
            <div className="maximunQuantity flex flex-col gap-2">
              <label htmlFor="">Quantidade maxima de compra</label>
              <input className="p-2 rounded-lg bg-gray-800" type="text" name="" id="" />
            </div>
            <div className="displayStatus flex flex-col gap-2">
              <label htmlFor="">Status de Exibição</label>
              <select className="p-2 rounded-lg bg-gray-800"name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="campaignStatus flex flex-col gap-2">
                  <label htmlFor="">Status da campanha</label>
                  <select className="p-2 rounded-lg bg-gray-800" name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
            </div>
         </div>
         <button className="bg-purple-500 p-2 rounded-md mt-10 text-white w-36">Salvar</button>
      </div>
   );
}
