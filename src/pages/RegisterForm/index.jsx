export default function Registerform() {
   return (
      <>
         <form className="flex flex-col gap-2 w-full h-full bg-zinc-200 m-auto p-4 rounded">
            <div className="flex flex-col gap-2 bg-white rounded p-4">
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Nome
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     CPF
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Data de nascimento
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Email
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Senha
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Repita sua senha
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Telefone
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Confirme seu telefone
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4">
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     CEP
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Logradouro
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Número
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Bairro
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Complemento
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     UF
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Cidade
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="">
                     Ponto de referência
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                  />
               </div>
            </div>
            <button className="bg-zinc-400 p-2 rounded mt-4">Cadastrar</button>
         </form>
      </>
   );
}
