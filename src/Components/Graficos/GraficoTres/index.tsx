import { ResApi } from "@/Components/Utils/Interfaces";
import { BarChart } from "@mui/x-charts/BarChart";
import _ from "lodash";

interface Props {
  dadosApi: ResApi;
}

export default function GraficoTres({ dadosApi }: Props) {
  // const DadosBrutos = dadosApi.clients_summary.map((e)=> e.latest_transactions)

  const OrdemCarteiras = _.chain(
    dadosApi.clients_summary
      .flatMap((e) => e)
      .flatMap((c) => {
        return c.latest_transactions.map((a) => {
          return {
            nome: c.broker,
            valor: a.value,
          };
        });
      })
  )
    .reduce(function (memo, obj) {
      //@ts-ignore
      if (typeof memo[obj.nome] === "undefined") {
        //@ts-ignore
        memo[obj.nome] = 0;
      }
      //@ts-ignore
      memo[obj.nome] += obj.valor;
      return memo;
    }, {})
    .map(function (val, key) {
      return { key: key, val: val };
    })
    .value();

  const NomeCarteiras = dadosApi.clients_summary
    .flatMap((e) => "C. " + e.broker)
    .filter((valor, indice, self) => self.indexOf(valor) === indice);

  return (
    <BarChart
      dataset={OrdemCarteiras}
      yAxis={[{ scaleType: "band", data: NomeCarteiras }]}
      // xAxis={[{ scaleType:'band',  data:OrdemCarteiras}]}
      series={[
        {
          id: "broker",
          dataKey: "val",
          stack: "total",
          color: "rgb(37, 99, 235)",
        },
      ]}
      layout="horizontal"
      sx={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
