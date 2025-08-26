/* eslint-disable */


import Links from "./components/Links";
import PetopiaLogo from "assets/svg/petopia-logo.svg";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => (
  <div
    className={`fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white ${
      open ? "translate-x-0" : "-translate-x-96"
    }`}
  >
    <span
      className="absolute top-4 right-4 block cursor-pointer xl:hidden"
      onClick={onClose}
    >

    </span>
    <div className="mx-[56px] mt-[50px] flex items-center">
      <img src={PetopiaLogo} alt="Petopia Logo" className="w-12 h-12 mr-2" />
      <div className="font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
        Petopia
      </div>
    </div>
    <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
    <ul className="mb-auto pt-1">
      <Links routes={routes} />
    </ul>
  </div>
);

export default Sidebar;
