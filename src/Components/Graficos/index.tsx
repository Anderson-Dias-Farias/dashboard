"use client";
import { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { ResApi } from "../Utils/Interfaces";
import DadosHeader from "./DadosHeader";
import GraficoBottom from "./GraficoBottom";
import GraficoDois from "./GraficoDois";
import GraficoTres from "./GraficoTres";
import LineChartUm from "./GraficoUm";

interface Props {
  dadosApi: ResApi;
}

function Graficos({ dadosApi }: Props) {
  const [name, setName] = useState("");

  return (
    <div className="w-full h-full flex flex-col p-4 gap-4 ">
      <DadosHeader dadosApi={dadosApi} />
      <div className="w-full flex flex-col bg-white rounded-2xl h-[570px] p-2 shadow-xl">
        <div className="flex items-center">
          <h1 className="font-semibold p-2">
            Evolução de Patrimônio Sob Custódia{" "}
          </h1>
          <AiOutlineExclamationCircle className="text-slate-400" />
        </div>
        <LineChartUm dadosApi={dadosApi} />
      </div>
      <div className="w-full flex  rounded-2xl gap-4 h-[402px] shadow-xl">
        <div className="w-full rounded-2xl flex-col  bg-white  max-w-[650px] shadow-xl p-2 ">
          <div className="flex items-center gap-1 px-4">
            <h1 className="font-semibold ">Carteira por Corretora</h1>
            <AiOutlineExclamationCircle className="text-slate-400" />
          </div>

          <GraficoDois dadosApi={dadosApi} />
        </div>
        <div className="w-full rounded-2xl flex-col  bg-white  max-w-[650px] shadow-xl p-2 ">
          <div className="flex items-center gap-1 px-4">
            <h1 className="font-semibold ">Patrimônio por Corretora</h1>
            <AiOutlineExclamationCircle className="text-slate-400" />
          </div>
          <GraficoTres dadosApi={dadosApi} />
        </div>
      </div>
      <div className="w-full flex flex-col rounded-2xl p-4 gap-8 bg-white h-[529px] shadow-xl">
        <div className="flex items-center justify-between w-full">
          <div className="flex-col">
            <h1 className="font-semibold ">Movimentações</h1>
            <h1 className="text-gray-500">Lista das últimas movimentações</h1>
          </div>
          <div className="flex items-center  rounded-2xl w-full max-w-[402px] h-[45px] bg-gray-100 px-4 gap-4">
            <FaSearch className="text-gray-400 " />
            <input
              placeholder="Pesquisar"
              type="text"
              className="bg-gray-100  w-auto m-w-[100px] h-[19px] outline-none "
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <GraficoBottom dadosApi={dadosApi} name={name} />
      </div>
    </div>
  );
}

export default Graficos;
