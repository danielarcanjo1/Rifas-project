

import Winners from "../../components/Winners";

export default function Home() {
   



   return (
      
      <div className="flex flex-col justify-center items-center  w-full bg-sky-100 ">
         <div className="p-4 border ">
            <h1 className="text-3xl text">Campanhas</h1>
      
          
         </div>
         <div className="flex flex-col  gap-10 p-4  border-4 ">
            <h1 className="text-xl">Ultimos ganhadores</h1>
            <div className="flex flex-col gap-4">
                <Winners name="Wilton Daniel Arcanjo Silva"/>
                <Winners name="mayra remigio venancio"/>
                <Winners name="ROSA MARIA ARCANJO SILVA"/>
            </div>
         </div>
         
         <div className="p-4  border ">
            <h1 className="text-xl">Campanhas encerradas</h1>
            <p>Wilton Daniel Arcanjo Silva</p>
            <p>Wilton Daniel Arcanjo Silva</p>
            <p>Wilton Daniel Arcanjo Silva</p>
            <p>Wilton Daniel Arcanjo Silva</p>
            <p>Wilton Daniel Arcanjo Silva</p>
            <p>Wilton Daniel Arcanjo Silva</p>
         </div>
      </div>
   );
}
