import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "@components/Header";
import { Sidebar } from "@components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full">
      <Header />
      <div className="flex h-[calc(100%-64px)]">
        <div className="w-[10%] h-full bg-white border-r border-slate-300">
          <Sidebar />
        </div>
        <div className="w-[90%] h-full">
          <h1>Maincontent</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
