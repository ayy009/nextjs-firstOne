"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@nextui-org/react";

import { VerticalDotsIcon } from "./vector/VerticalDotsIcon";
import { ChevronDownIcon } from "./vector/ChevronDownIcon";
import { SearchIcon } from "./vector/SearchIcon";
// import {columns, users, statusOptions,INITIAL_VISIBLE_COLUMNS} from "./data";
import { capitalize } from "./utils";

import ActionsDropDown from "../Dropdowns/ActionsDropDown";
// import EditServerModal from "./TableServers/components/EditServerModel";
import { ActionsServerTable } from "./TableServers/components/ActionsServerTable";
import { useSearchParams,useRouter } from "next/navigation";


const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  inactive: "warning",
  retuned: "danger",
  true: "success",
  false: "danger",
  "1": "success",
  "0": "danger",
};

const statusColorMap2: Record<string, ChipProps["color"]> = {
  true: "success",
  false: "danger",
  "1": "success",
  "0": "danger",
};

export default function TableBase({
  columns,
  dataTable,
  statusOptions,
  INITIAL_VISIBLE_COLUMNS,
  tableName,
  serverproviders
}: any) {
  type User = (typeof dataTable)[0];
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([]),
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS),
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  //------------------------------------------------------select State
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const selectedItems = searchParams.get('selectedItems')?.split(',').filter(Boolean) || [];
  
  useEffect(() => {
    router.push(`${window.location.pathname}?selectedItems=${Array.from(selectedKeys).join(',')}`);
  }, [selectedKeys, router]);
  
  

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column: any) =>
      Array.from(visibleColumns).includes(column.uid),
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...dataTable];

    if (hasSearchFilter) {
      const filterValueLower = filterValue.toLowerCase();
      filteredUsers = filteredUsers.filter((user) =>
        Object.values(user).some((val: any) =>
          val.toString().toLowerCase().includes(filterValueLower),
        ),
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [dataTable, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      // type dashbord
      case "type":
        return (
          <Chip
            className="select-all capitalize"
            color={user.type == "VPS" ? "success" : "primary"}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );

      case "project_type":
          return (
            <Chip
              className="select-all capitalize"
              color={user.project_type == "pro" ? "secondary" : "primary"}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );

      case "days_left":
            const returnDate = new Date(user.return_date);
            const today = new Date();
            const diffTime = returnDate.getTime() - today.getTime();
            const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converts the difference to days
          
            return (
              <>
                {daysLeft > 0 ? `${daysLeft} days left` : "Expired"}
                {/* {daysLeft} */}
              </>
            );
           
      case 'move_server':
          return (
            <Chip
            className="select-all capitalize"
            color={user.keep_status ? "secondary" : "primary"}
            size="sm"
            variant="flat"
          >
            {user.keep_status ? "Used" : "Free"}
          </Chip>
        
          );

      case "project":
          return (
            <Chip
              className="select-all capitalize"
              color={user.project == "pro" ? "secondary" : "primary"}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );

      case "is_proxy":
        return (
          <Chip
            className="capitalize"
            color={user.is_proxy=="yes" ? "success" : "danger"}
            size="sm"
            variant="dot"
          >
            {user.is_proxy}
          </Chip>
        );

      case "status":
        return (
              <Chip
                className="capitalize"
                color={statusColorMap[user.status]}
                size="sm"
                variant="flat"
              >
                {
                  typeof cellValue === 'boolean'
                    ? cellValue 
                      ? "True" 
                      : "False"
                    : cellValue === "0"
                    ? "False"
                    : cellValue === "1"
                    ? "True"
                    : cellValue
                }
              </Chip>

        );

      case "ipVersion":
        return (
          <Chip
            className="capitalize"
            color={user.ipVersion == "IPv6" ? "primary" : "secondary"}
            size="sm"
            variant="shadow"
          >
            {cellValue}
          </Chip>
        );

      case "serverStatus":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.serverStatus]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );

      case "pending":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.pending]}
            size="sm"
            variant="flat"
          >
            {user.pending ? "True" : "False"}
          </Chip>
        );

      case "os_installed":
        return (
          <Chip
            className="capitalize "
            color="secondary"
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );

      case "ptr":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.ptr]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );

      case "actions":
        return (
          <div className="relative flex items-center justify-end gap-2">
            {/* <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem >Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
           {/* <ActionsServerTable user={user}/> */}
           <ActionsServerTable user={user} serverproviders={serverproviders}/>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    [],
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="-mb-3 flex flex-col   gap-4 rounded-sm bg-white  px-6 py-2  text-dark dark:bg-gray-dark  dark:text-white  ">
        <div className=" items-end justify-between gap-3  ">

          <div className="flex flex-col items-center md:flex-row  md:justify-between ">
            <Input
              isClearable
              className="w-full md:w-1/3"
              classNames={{
                base: "dark:bg-gray-900 rounded-full",
                mainWrapper: "p-0 ",
                input: [
                  "dark:bg-gray-900",
                  "dark:text-white",
                  "dark:placeholder:text-gray-400",
                  "p-0 rounded-sm",
                ],
                innerWrapper: [
                  "dark:bg-gray-900",
                  "dark:hover:bg-gray-800",
                  "p-0 rounded-sm",
                ],
                inputWrapper: ["dark:bg-gray-900", "p-0 rounded-sm"],
                clearButton: ["dark:text-gray-400", "p-0"],
              }}
              placeholder="Search ..."
              startContent={<SearchIcon className="mx-3 dark:text-gray-400" />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
            <div className="flex flex-wrap justify-end gap-3 p-3 sm:w-full w-2/3">

            {tableName == "Dashbord Table" &&              
<Button variant="flat" className="w-full sm:w-1/6 md:w-1/6">
                Show all server
            </Button>}

              <div className=" w-full sm:w-1/6 md:w-1/6">
                {tableName == "Dashbord Table" && <ActionsDropDown  /> }
              </div>

              <Dropdown>
                <DropdownTrigger className="w-full sm:w-1/6 md:w-1/6">
                  <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    variant="flat"
                  >
                    Status
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  className=""
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={statusFilter}
                  selectionMode="multiple"
                  onSelectionChange={setStatusFilter}
                >
                  {statusOptions.map((status: any) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {capitalize(status.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger className="w-full sm:w-1/6 md:w-1/6">
                  <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    variant="flat"
                  >
                    Columns
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={visibleColumns}
                  selectionMode="multiple"
                  onSelectionChange={setVisibleColumns}
                >
                  {columns.map((column: any) => (
                    <DropdownItem key={column.uid} className="capitalize">
                      {capitalize(column.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            {/* ________________________________________ end ______________________________________________________ */}
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    dataTable.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className=" -mt-3 flex items-center justify-center rounded-sm bg-white p-6 px-2 py-6  text-dark  dark:bg-gray-dark dark:text-white sm:justify-between">
        <div className="hidden w-1/3 justify-start  sm:flex">
          <span className="px-4 text-small  text-dark dark:text-white">


            <span className=" text-small text-dark  dark:text-white">
              Total {dataTable.length} users{" "}
            </span>
            <br />
            {selectedKeys === "all"
              ? "All items selected"
              : `${selectedKeys.size} of ${filteredItems.length} selected`}
          </span>
        </div>

        <div className="flex  justify-between gap-2 md:justify-end">
          <div className="flex items-center justify-between">
            <label className="flex items-center text-small text-dark dark:text-white">
              Rows per page:
              <select
                className="text-base text-dark outline-none dark:bg-transparent dark:text-white"
                onChange={onRowsPerPageChange}
              >
                {/* <option value="5">5</option> */}
                <option value="10" className="dark:bg-gray-dark">
                  10
                </option>
                <option value="15" className="dark:bg-gray-dark">
                  15
                </option>
                <option value="20" className="dark:bg-gray-dark">
                  20
                </option>
              </select>
            </label>
          </div>
          <Pagination
            className="pr-10 "
            classNames={{
              item: "dark:bg-gray-900",
              next: "dark:bg-gray-900",
              prev: "dark:bg-gray-900",
            }}
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={setPage}
          />
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);
console.log(selectedKeys)

  return (
    
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        table: "dark:bg-gray-900 rounded-none p-[-16px] rounded-sm",
        // base:"p-0",
        wrapper: "bg-transparent py-0",
        th: "dark:bg-gray-800",
        tbody: "scrollbar-red",
      }}
      shadow="none"
      selectedKeys={selectedKeys}
      selectionMode="multiple" //--------------------------------------------------------------------selection
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      className="rounded-sm  bg-white dark:bg-gray-dark "
      // tbody= "bg-white"

      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column: any) => (
          <TableColumn
            key={column.uid}
            align="center"
            allowsSorting={column.sortable}
            
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody 
      // isLoading={isLoading}
      // loadingContent={<Spinner label="Loading..." />}
      emptyContent={"No users found"} 
      
      items={sortedItems}>
        
        {(item) => (
          <TableRow key={item.id}>
            {
            
            (columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
