import Image from "next/image";
import Navbar from "./header/components/navbar";
import About from "./about/about";
import Header from "./header/page";

export default function Home() {
  return (
    <main>
      <header>
      <div>
        <div>
          
          <Header />
          <About />
        </div>
      
      </div>
    </header>
    </main>
  );
}
