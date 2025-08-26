import Banner from "./components/Banner";
import TopVetsData from "views/admin/vets/variables/TopVetsData.json";
import HistoryCard from "./components/HistoryCard";
import TopVetsTable from "./components/TableTopVets";

const VetsPage = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      {/* Left Section */}
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <Banner />
      </div>

      {/* Right Section */}
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopVetsTable extra="mb-5" tableData={TopVetsData} />
        <HistoryCard />
      </div>
    </div>
  );
};

export default VetsPage;
