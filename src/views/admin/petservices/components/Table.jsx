import React from "react";
import Card from "components/card";
import { FiSearch } from "react-icons/fi";

export default function Table({ title, columnsData, tableData }) {
  return (
    <Card extra={"w-full max-h-[500px] sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <h2 className="text-xl font-bold text-navy-700 dark:text-white">
          {title}
        </h2>

        {/* Search */}
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white"
          />
        </div>
      </header>

      {/* Table */}
      <div className="mt-6 max-h-[280px] overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-white dark:bg-navy-800 z-10">
            <tr>
              {columnsData.map((col, idx) => (
                <th
                  key={idx}
                  className="px-3 py-2 text-left text-xs font-bold text-gray-600 dark:text-white"
                >
                  {col.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-gray-50 dark:hover:bg-navy-700">
                {columnsData.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-3 py-3 text-sm ${
                      col.accessor === "status"
                        ? row[col.accessor] === "Active"
                          ? "text-green-500 font-bold"
                          : "text-red-500 font-bold"
                        : "text-gray-600 dark:text-white"
                    }`}
                  >
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
