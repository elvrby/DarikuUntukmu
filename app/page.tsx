import MobileComponent from "./components/header";
import Gameboy from "./components/gameboy";

export default function Home() {
  return (
    <main className="h-screen w-full justify-center items-center">
      <div className="z-50 md:hidden">
        {" "}
        <MobileComponent></MobileComponent>
      </div>

      {/* <Index></Index> */}
      <div className="-z-10">
        <Gameboy></Gameboy>
      </div>
    </main>
  );
}
