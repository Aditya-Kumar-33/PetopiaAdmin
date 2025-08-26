import bg_vet from "assets/img/vet/background-vet.png";
import Widget from "components/widget/Widget";
import {
  MdOutlineMedicalServices,
  MdAttachMoney,
  MdEventAvailable,
  MdChecklist,
} from "react-icons/md";

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-4 py-4 md:px-6 md:py-6"
      style={{ backgroundImage: `url(${bg_vet})` }}
    >
      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <Widget
          icon={<MdOutlineMedicalServices className="h-6 w-6" />}
          title="Vet"
          subtitle="9"
        />
        <Widget
          icon={<MdAttachMoney className="h-6 w-6" />}
          title="Sales"
          subtitle="₹574.34"
        />
        <Widget
          icon={<MdEventAvailable className="h-6 w-6" />}
          title="Appointments"
          subtitle="10"
        />
        <Widget
          icon={<MdChecklist className="h-6 w-6" />}
          title="Tasks"
          subtitle="145"
        />
      </div>
    </div>
  );
};

export default Banner1;
