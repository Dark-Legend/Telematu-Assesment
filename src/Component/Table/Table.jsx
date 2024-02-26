import { tableHeading } from "./constant";
import Avatar from "./image/avatar.jpg";
import DateIcon from "./image/dateIcon.svg";
import ClockIcon from "./image/clockIcon.svg";
import StarIcon from "./image/starIcon.svg";
import ActionIcon from "./image/menuIcon.svg";

export const Table = () => {
  const longColumn = ["Patients", "Doctor"];

  const singleRowData = {
    name: "Megha Trivedi",
    avatar: Avatar,
    number: "+152 1451 451",
    date: `20 Jan 2024`,
    dateIcon: DateIcon,
    time: `10:18`,
    clockIcon: ClockIcon,
    doctorName: `Dr.Sarah Smith`,
    doctorStarIcon: StarIcon,
    injuryType: "Fever",
    actionIcon: ActionIcon,
  };
  const rowData = new Array(5)?.fill(singleRowData);
  return (
    <div className="w-full">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="w-full">
            {tableHeading?.map((val, index) => (
              <th
                key={index}
                className={`bg-[#EEEDEB] ${
                  longColumn.includes(val) ? "w-[20%]" : "w-[12%]"
                } cursor-pointer ${
                  val === "Action" && "text-center"
                } text-slate-500 py-3 border border-solid border-b-slate-300 border-r-0 border-t-0 border-l-0 text-left px-3 text-xs font-normal sm:text-base sm:font-medium`}
              >
                {val?.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData?.map((val, index) => (
            <tr
              key={index}
              className={`border w- ${
                index === rowData?.length - 1 && "border-none"
              } border-solid border-b-slate-300 border-r-0 border-l-0 border-t-0`}
            >
              <td className="p-2 overflow-y-auto">
                <div className="flex items-center gap-2">
                  <img
                    className="rounded-full w-9 h-9"
                    src={val?.avatar}
                    alt="avatar"
                  />
                  <div className="w-full">
                    <p className="text-sm text-black font-semibold">
                      {val?.name}
                    </p>
                    <p className="text-xs">{val?.number}</p>
                  </div>
                </div>
              </td>
              <td className="p-2 overflow-y-auto">
                <div className="flex items-center gap-2">
                  <img src={val?.dateIcon} alt="dateIcon" className="w-5 h-5" />
                  <p className="text-sm font-semibold">{val?.date}</p>
                </div>
              </td>
              <td className="p-2 overflow-y-auto">
                <div className="flex items-center gap-2">
                  <img
                    src={val?.clockIcon}
                    alt="dateIcon"
                    className="w-5 h-5"
                  />
                  <p className="text-sm font-semibold">{val?.time}</p>
                </div>
              </td>
              <td className="p-2 overflow-y-auto">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center">
                    <img
                      src={val?.doctorStarIcon}
                      alt="dateIcon"
                      className="w-3 h-3"
                    />
                  </div>
                  <p className="text-sm font-semibold">{val?.doctorName}</p>
                </div>
              </td>
              <td className="p-2 overflow-y-auto">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold bg-[#c3c9e8] text-[#1D2B53] px-3 py-1 rounded-md">
                    {index === 3 || index === 1 ? "Malaria" : val?.injuryType}
                  </p>
                </div>
              </td>
              <td className="p-2 overflow-y-auto">
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  <img src={val?.actionIcon} alt="" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
