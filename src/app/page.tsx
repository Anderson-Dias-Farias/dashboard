import BodyDash from "@/Components/Body";
import Graficos from "@/Components/Graficos";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Header/Sidebar";
import { GetDadosApi } from "@/Components/Utils/GetDadosApi";

export default async function Home() {
  const DadosApi = await GetDadosApi();

  return (
    <main className="flex-col flex w-full h-full justify-center items-center">
      <Header />
      <BodyDash>
        <Sidebar />
        <Graficos dadosApi={DadosApi} />
      </BodyDash>
    </main>
  );
}
