import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";
import UserTable from "views/admin/users/components/UserTable";
import userData from "./variables/userData.json"; // renamed from tableDataComplex.json

const Users = () => {
  return (
    <div>
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"₹340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Subscribers"}
          subtitle={"642"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"574"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Vets"}
          subtitle={"10"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Trainers"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Groomers"}
          subtitle={"33"}
        />
      </div>

      {/* Users Table */}
      <div className="mt-8">
        <UserTable userData={userData} />
      </div>
    </div>
  );
};

export default Users;
