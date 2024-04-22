import { ResApi } from "@/Components/Utils/Interfaces";
import { LineChart } from "@mui/x-charts/LineChart";

interface Props {
  dadosApi: ResApi;
}

export default function LineChartUm({ dadosApi }: Props) {
  const DatasDados = dadosApi.advisor_summary.equity_history.map((e) => {
    const dia = new Date(e.date).getDate();
    const mes = new Date(e.date).toLocaleDateString("pt-BR", { month: "long" });
    return dia + "/ " + mes;
  });

  const ValueDados = dadosApi.advisor_summary.equity_history.map((e) =>
    parseFloat(e.value.toLocaleString("pt-BR"))
  );

  return (
    <LineChart
      //rgb(37, 99, 235)
      sx={{
        width: "100%",
        height: "100%",

        "& .MuiLineElement-root": {
          //strokeDasharray: '10 5',
          strokeWidth: 4,
        },
        "& .MuiAreaElement-series-Germany": {
          fill: "url('#myGradient')",
        },
      }}
      xAxis={[
        {
          id: "Years",
          data: DatasDados,
          scaleType: "band",
          //valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: "Germany",
          data: ValueDados,
          stack: "total",
          area: true,
          showMark: false,
          color: "rgb(37, 99, 235)",
        },
      ]}
      margin={{ left: 60, top: 10, right: 20 }}
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="rgba(212,212,255,1)" />
          <stop offset="95%" stopColor="rgba(255,255,255)" />
        </linearGradient>
      </defs>
    </LineChart>
  );
}
