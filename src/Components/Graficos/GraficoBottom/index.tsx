import { ResApi } from "@/Components/Utils/Interfaces";
import { NormalizeString } from "@/Components/Utils/NormalizeString";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useEffect, useState } from "react";

interface Props {
  dadosApi: ResApi;
  name: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9FAFB",
    color: "#6B7280",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  color: "#111827",
  height: "40px",
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function GraficoBottom({ dadosApi, name }: Props) {
  const FormateDate = (data: string) => {
    const Data = new Date(data);
    let dia = Data.getDate();
    let mes = Data.toLocaleDateString("pt-br", { month: "long" });
    let ano = Data.getFullYear();

    return dia + " de " + mes + " de " + ano;
  };
  const Colunas = dadosApi.clients_summary.map((e) => e);

  const Lista = Colunas.map((row, index) => {
    return row.latest_transactions.map((a) => {
      return {
        name: row.name,
        date: a.date,
        value: a.value,
        type: a.type,
      };
    });
  })
    .flatMap((a) => a)
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .filter((a) => NormalizeString(a.name).includes(NormalizeString(name)));

  const [itensPerPage, setItensPerPage] = useState(6);
  const [currentPage, setCurrentpage] = useState(0);

  const pages = Math.ceil(Lista.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = Lista.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentpage(0);
  }, [Lista.length]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (value === 1) {
      setCurrentpage(0);
    }
    setCurrentpage(value - 1);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ width: "100%", height: "100%" }}
          aria-label="customized table"
        >
          <TableHead>
            <StyledTableCell align="left">Cliente</StyledTableCell>
            <StyledTableCell align="left">Data</StyledTableCell>
            <StyledTableCell align="left">Valor</StyledTableCell>
            <StyledTableCell align="left">Tipo</StyledTableCell>
          </TableHead>
          <TableBody>
            {currentItens.map((a, index) => {
              return (
                <StyledTableRow key={a.name + a.date + index}>
                  <StyledTableCell sx={{ fontWeight: "400", color: "#111827" }}>
                    {a.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{ fontWeight: "400", color: "#6B7280" }}
                  >
                    {FormateDate(a.date)}
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{ fontWeight: "600", color: "#111827" }}
                  >
                    {a.type == "Resgate" ? "-" : ""}R$ {a.value}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    <div
                      className={
                        a.type == "Aporte"
                          ? "bg-green-100 rounded-[10px] max-w-[70px] text-green-800"
                          : "bg-red-200 rounded-[10px] max-w-[70px] text-red-800"
                      }
                    >
                      {a.type}
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Pagination
          variant="outlined"
          color={"primary"}
          count={pages}
          page={currentPage + 1}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}
