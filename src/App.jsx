import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/HomePage";
import { SobreNosostros } from "./pages/SobreNosotrosPage";
import { Tareas } from "./pages/TareasPage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<SobreNosostros />}/>
          <Route path="/tasks" element={<Tareas />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App
