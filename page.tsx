import Header from "./components/Header";
import About from "./components/about";
import Info from "./components/info";

export default function Home() {
  return (
        <div><h1><u><b>HELLO WORLD OF NEXT.JS</b></u> </h1>
            <Header />
              <main>
                <About/>
                <Info/>
              </main>
            </div>
  )
};

