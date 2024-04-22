import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import avatar from "../../../public/avatar.jpeg";
import logo from "../../../public/logo.png";

function Header() {
  return (
    <div className="w-screen bg-white flex justify-center items-center border-b-[1px] border-gray-200">
      <div className="w-screen  max-w-[1600px] h-[70px] gap-[24px] flex justify-start items-center px-4">
        <Image width={45} height={45} src={logo} alt="Logo do teste" priority />
        <div className="w-[100%] max-w-[469px] h-[45px] ">
          <div className="max-w-[402px] flex items-center text-slate-500 bg-gray-200 h-[45px] rounded-2xl border-[1px] px-[13px] gap-[10px]">
            <FaSearch />
            <input
              placeholder="Pesquisar"
              type="text"
              className="bg-slate-200  w-auto m-w-[100px] h-[19px] outline-none "
            />
          </div>
        </div>
        <div className="w-full  flex items-center justify-end gap-3">
          <GoBellFill />
          <Image
            priority
            width={32}
            height={32}
            className="rounded-2xl "
            src={avatar}
            alt="Avatar do perfil"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
