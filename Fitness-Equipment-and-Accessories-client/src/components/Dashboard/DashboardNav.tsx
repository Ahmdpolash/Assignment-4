import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className="h-full bg-[#303644] w-64 dashboard-menu">
      <nav className="p-6 ">
        <ul className="space-y-5">
          <li className="w-full ">
            <NavLink
              to={"/dashboard"}
              className="w-full rounded-sm  block ps-5"
            >
              Dashboard
            </NavLink>
          </li>

          <div className="">
            <li className="w-full mb-4">
              <NavLink
                to={"/dashboard/activity-log"}
                className="w-full   block rounded-sm ps-5 "
              >
                Activity Log
              </NavLink>
            </li>

            <li className="w-full mb-4">
              <NavLink
                to={"/dashboard/profile-setting"}
                className="w-full   block rounded-sm ps-5 "
              >
                Profile Setting
              </NavLink>
            </li>
            <li className="w-full mb-4">
              <NavLink
                to={"/dashboard/recommended-classes"}
                className="w-full   block rounded-sm ps-5 "
              >
                Recommended Classes
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNav;
