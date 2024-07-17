"use client"

import "./globals.css"
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { WelcomeCard } from "./components/WelcomCard";
export default function Home() {



  return (<>
    <div className="h-screen bg-slate-300 w-full" style={{ backgroundImage: `url(/background2.jpg)`, backgroundSize: "cover" }}>
          <AppBar />
        <div className="h-full flex justify-center items-center ">
          <WelcomeCard/>
        </div>

    </div>
    <Footer/>
  </>

  );
}
