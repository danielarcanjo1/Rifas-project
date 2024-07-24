import { BsMegaphone } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";



export default function Dasboard() {

    return (
    <div className="Dashboard">
        <h1 className="text-white text-3xl">Dasboard</h1>
        <div className="pt-6">
            <div className="GanhadoresCompradores flex gap-14">
                <div className="bg-gray-900 w-1/3 h-28 rounded-lg p-4">
                    <p className="text-white text-sm">BUSCAR GANHADOR</p>
                    <div className="flex gap-4 items-end">
                        <div className="flex flex-col gap-1">
                            <label  className="text-white" htmlFor="campaignSelect">Selecione a campanha</label>
                            <select className="p-1 text-white max-w-48 border border-white rounded-md h-8 bg-gray-700" name="campaignSelect" id="campaignSelect">
                                <option value="">Selecione a campanha</option>
                                <option value="2">Edição 382 - Ford Fiesta mais honda cg titan 150 mais 5.000 no pix</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label  className="text-white" htmlFor="drawnNumber">Numero Sorteado</label>
                            <input className="p-2 text-white bg-gray-700 border border-white rounded h-8 outline-none" type="text" id="drawnNumber" />
                        </div>
                        <div className="flex items-end">
                            <button className="bg-purple-500 w-16 h-8  rounded-md text-white hover:bg-purple-600 hover:scale-110">Buscar</button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 w-1/3 h-28 rounded-lg p-4">
                <p className="text-white text-sm">RANKING DE COMPRADORES</p>
                    <div className="flex gap-4 items-end">
                        <div className="flex flex-col gap-1">
                            <label  className="text-white" htmlFor="campaignSelect">Selecione a campanha</label>
                            <select className="p-1 text-white max-w-48 border border-white rounded-md h-8 bg-gray-700" name="campaignSelect" id="campaignSelect">
                                <option value="">Selecione a campanha</option>
                                <option value="2">Edição 382 - Ford Fiesta mais honda cg titan 150 mais 5.000 no pix</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                      
                        <div className="flex items-end">
                            <button className="bg-purple-500 w-16 h-8  rounded-md text-white hover:bg-purple-600 hover:scale-110">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex gap-16">
                <div className="Campanhas flex items-center gap-5 w-64 h-20 bg-gray-800 p-2 rounded-md">
                    <div className="Icon rounded-full w-10 h-10 p=2 flex items-center justify-center bg-green-500">
                        <BsMegaphone />
                    </div>
                    <div className="text-white">
                        <p>Campanhas</p>
                        <p>7</p>
                    </div>
                </div>
                <div className="Campanhas flex items-center gap-5 w-64 h-20 bg-gray-800 p-2 rounded-md">
                    <div className="Icon rounded-full w-10 h-10 p=2 flex items-center justify-center bg-orange-500">
                        <FaUsers />
                    </div>
                    <div className="text-white">
                        <p>Compradores</p>
                        <p>7</p>
                    </div>
                </div>
                <div className="Campanhas flex items-center gap-5 w-64 h-20 bg-gray-800 p-2 rounded-md">
                    <div className="Icon rounded-full w-10 h-10 p=2 flex items-center justify-center bg-blue-500">
                        <IoBagCheckOutline />
                    </div>
                    <div className="text-white">
                        <p>Pedidos</p>
                        <p>7</p>
                    </div>
                </div>
                <div className="Campanhas flex items-center gap-5 w-64 h-20 bg-gray-800 p-2 rounded-md">
                    <div className="Icon rounded-full w-10 h-10 p=2 flex items-center justify-center bg-sky-300">
                        <MdAttachMoney />
                    </div>
                    <div className="text-white">
                        <p>Faturamento</p>
                        <p>7</p>
                    </div>
                </div>
                
                
            </div>
            <div className="mt-10">
                <p className="text-white">Ultimos pedidos</p>
                <div className="Lsita">

                </div>
            </div>
        </div>
    </div>
  )
}
