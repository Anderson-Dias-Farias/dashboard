import { ResApi } from "@/Components/Utils/Interfaces";
import { NumeroAbreviado } from "@/Components/Utils/NumeroAbreviado";

interface Props {
  dadosApi: ResApi;
}

function DadosHeader({ dadosApi }: Props) {
  return (
    <div className="w-full h-full flex max-xl:flex-wrap  gap-4 items-center justify-center">
      <div className="w-full  min-w-150 max-w-[428px] flex flex-col font-semibold items-start text-left justify-between  bg-white rounded-2xl p-6 gap-4 h-[118px] shadow-xl">
        <h1>Clientes</h1>
        <div className="w-full flex items-center justify-between">
          <h1>{dadosApi.advisor_summary.client_count}</h1>
          <div className="w-[51px] h-[22px] px-[2px] py=[10px] rounded-[10px] bg-green-100 flex items-center justify-center">
            <h1 className="text-xs font-light">+12</h1>
          </div>
        </div>
      </div>
      <div className="w-full  min-w-150 max-w-[428px] flex flex-col font-semibold items-start text-left justify-between  bg-white rounded-2xl p-6 gap-4 h-[118px] shadow-xl">
        <h1>Patrimônio Sob Custodia</h1>
        <div className="w-full flex items-center justify-between">
          <h1>{NumeroAbreviado(dadosApi.advisor_summary.average_equity)}</h1>
          <div className="w-[51px] h-[22px] px-[2px] py=[10px] rounded-[10px] bg-green-100 flex items-center justify-center">
            <h1 className="text-xs font-light">+12</h1>
          </div>
        </div>
      </div>
      <div className="w-full  min-w-150  max-w-[428px] flex flex-col font-semibold items-start text-left justify-between  bg-white rounded-2xl p-6 gap-4 h-[118px] shadow-xl">
        <h1>Patrimônio Médio</h1>
        <div className="w-full flex items-center justify-between">
          <h1>{NumeroAbreviado(dadosApi.advisor_summary.total_equity)}</h1>
          <div className="w-[51px] h-[22px] px-[2px] py=[10px] rounded-[10px] bg-red-200 flex items-center justify-center">
            <h1 className="text-xs font-light text-red-800">-5</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DadosHeader;
