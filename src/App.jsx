import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import routes from "./routes";

function App() {
  return (
    <MantineProvider className="App" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
