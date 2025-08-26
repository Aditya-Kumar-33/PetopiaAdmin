import React from "react";
import Card from "components/card";
import { FiSearch } from "react-icons/fi";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export default function UserTable({ userData }) {
  const [sorting, setSorting] = React.useState([]);

  const columns = [
    columnHelper.accessor("username", {
      id: "username",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">USERNAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("petSpecies", {
      id: "petSpecies",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">PET SPECIES</p>
      ),
      cell: (info) => (
        <p className="text-sm text-navy-700 dark:text-white">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("subscriptionType", {
      id: "subscriptionType",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">SUBSCRIPTION</p>
      ),
      cell: (info) => (
        <p className="text-sm text-navy-700 dark:text-white">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("rating", {
      id: "rating",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">RATING</p>
      ),
      cell: (info) => (
        <p className="text-sm text-navy-700 dark:text-white">{info.getValue()}</p>
      ),
    }),
    columnHelper.accessor("verificationStatus", {
      id: "verificationStatus",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">VERIFICATION</p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === "Verified" ? (
            <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
          ) : (
            <MdCancel className="text-red-500 me-1 dark:text-red-300" />
          )}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: userData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <header className="relative flex items-center justify-between pt-4 h-16">
        <h2 className="text-xl font-bold text-navy-700 dark:text-white">
          Users Overview
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

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                  >
                    <div className="items-center justify-between text-xs text-gray-200">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.slice(0, 5).map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="min-w-[150px] border-white/0 py-3 pr-4"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
