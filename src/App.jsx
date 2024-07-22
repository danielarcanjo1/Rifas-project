import TopMenu from "./components/TopMenu";
import AdminPanel from "./pages/AdminPanel";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
   const [showMenu, setShowMenu] = useState(true);

   return (
      <>
         <BrowserRouter>
         {showMenu && <TopMenu />}
            <Routes>
               <Route path="inicio" element={<Home />} />
               <Route path="painel-do-administrador" element={<AdminPanel onHideMenu={setShowMenu} />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
