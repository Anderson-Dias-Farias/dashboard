import {
  FaChevronDown,
  FaChevronUp,
  FaGlobeAmericas,
  FaRegLifeRing,
} from "react-icons/fa";
import {
  HiDocumentReport,
  HiInboxIn,
  HiOutlineAdjustments,
  HiOutlineCog,
  HiShoppingBag,
} from "react-icons/hi";
import { RiPieChartFill } from "react-icons/ri";

function Sidebar() {
  const StylesClass =
    "flex items-center justify-start w-[225px] h-6 gap-4 px-2";

  return (
    <div className="w-full max-w-[250px] bg-white flex flex-col gap-4  items-center justify-between font-semibold ">
      <div className="w-full flex flex-col h-auto items-center gap-[22px] p-6 px-16">
        <div className={StylesClass + " text-blue-600"}>
          <RiPieChartFill style={{ fontSize: "24px" }} />
          <h1 className="size-4 leading-6  h-full">Dashboard</h1>
        </div>
        <div className={StylesClass}>
          <div className="flex items-center justify-start w-full gap-4">
            <HiDocumentReport style={{ fontSize: "24px" }} />

            <h1 className="size-4 leading-6  h-full w-auto">Relatórios</h1>
          </div>
          <FaChevronDown style={{ fontSize: "24px" }} />
        </div>
        <div className={StylesClass}>
          <div className="flex items-center justify-start w-full gap-4">
            <HiShoppingBag style={{ fontSize: "24px" }} />

            <h1 className="size-4 leading-6  h-full w-auto">Advisor</h1>
          </div>
          <FaChevronUp style={{ fontSize: "24px" }} />
        </div>
        <div className={StylesClass}>
          <div className="w-[24px]"></div>
          <h1 className="size-4 leading-6  h-full w-auto">Lista de Clientes</h1>
        </div>
        <div className="flex  items-center justify-start w-[225px] h-6 gap-4 px-2">
          <div className="w-[24px]"></div>
          <h1 className="size-4 leading-6  h-full w-auto">Cobranças</h1>
        </div>
        <div className="flex  items-center justify-start w-[225px] h-6 gap-4 px-2">
          <div className="w-[24px]"></div>
          <h1 className="size-4 leading-6  h-full w-auto">Estatísticas</h1>
        </div>
        <div className="flex items-center justify-between w-[225px] h-6 gap-4 px-2">
          <div className="flex items-center justify-start w-full gap-4">
            <HiInboxIn style={{ fontSize: "24px" }} />

            <h1 className="size-4 leading-6  h-full w-auto">Mensagens</h1>
          </div>
          <div className="rounded-full bg-red-200 w-8 flex items-center justify-center">
            <h1 className="text-red-800">1</h1>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200"></div>

        <div className="flex items-center justify-start w-[225px]  gap-4 px-2">
          <FaRegLifeRing style={{ fontSize: "24px" }} />
          <h1 className="size-4 leading-6  h-full text-black ">Ajuda</h1>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mb-4 ">
        <HiOutlineAdjustments style={{ fontSize: "24px" }} />
        <FaGlobeAmericas style={{ fontSize: "24px" }} />
        <HiOutlineCog style={{ fontSize: "24px" }} />
      </div>
    </div>
  );
}

export default Sidebar;
