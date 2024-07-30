import Campaign from "../../components/Campaign";

export default function Home() {
   return (
      <div className="flex flex-col justify-center items-center  w-full bg-sky-100 ">
         <div className="p-4 border ">
            <h1 className="text-3xl text">Campanhas</h1>

            <Campaign />
         </div>
         <div className="flex flex-col  gap-10 p-4  border-4 ">
            <h1 className="text-xl">Ultimos ganhadores</h1>
            <div className="flex flex-col gap-4"></div>
         </div>

         <div className="p-4  border ">
            <h1 className="text-xl">Campanhas encerradas</h1>
         </div>
      </div>
   );
}
