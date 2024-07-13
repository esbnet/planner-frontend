import { Calendar, MapPin } from "lucide-react";

export function App() {
  return (
    <div className="flex justify-center items-center bg-pattern bg-no-repeat bg-center h-screen">
      <div className="space-y-10 px-6 w-full max-w-3xl text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="flex items-center gap-3 bg-zinc-900 shadow-shape px-4 rounded-xl h-16">
          <div className="flex flex-1 items-center gap-2">
            <MapPin className="text-zinc-400 size-5" />
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="text-zinc-400 size-5" />
            <input
              type="text"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <button className="bg-lime-300 px-5 py-2 rounded-lg font-medium text-lime-950">
            Planejar
          </button>
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href={"#"} className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
