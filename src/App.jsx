import "./App.css";
import { Table } from "./Component/Table/Table";

function App() {
  return (
    <div className="!w-full !h-screen flex justify-start items-start !flex-col border-2 border-solid border-black p-2 text-slate-500 gap-6 flex-wrap overflow-y-hidden px-5 w-full py-5">
      <div className="p-8 w-full border border-solid border-slate-200 shadow-md rounded-3xl">
        <p className=" font-semibold text-2xl">Today&#39;s Appointment List</p>
        <Table />
      </div>
    </div>
  );
}

export default App;
