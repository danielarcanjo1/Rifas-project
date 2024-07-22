
import CurrentCampaing from "../../components/CurrentCampaign";
import Winners from "../../components/Winners";

export default function Home() {
   



   return (
      <div className="flex h-screen bg-sky-100">
         <div className="flex flex-col  gap-10 p-4 w-1/5 border-4 ">
            <h1 className="text-xl">Ultimos ganhadores</h1>
            <div className="flex flex-col gap-4">
                <Winners name="Wilton Daniel Arcanjo Silva"/>
                <Winners name="mayra remigio venancio"/>
                <Winners name="ROSA MARIA ARCANJO SILVA"/>
            </div>
         </div>
         <div className="p-4 w-3/5 border-4 ">
            <h1 className="text-3xl text">Campanhas</h1>
            <CurrentCampaing />
         </div>
         <div className="p-4 w-1/5 border-4 ">
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
