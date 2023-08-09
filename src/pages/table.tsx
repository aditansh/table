"use client";
import Head from "next/head";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Search,
  MoveDown,
} from "lucide-react";
// import { useQuery } from "@tanstack/react-query";

import { type Task } from "@/types/common";
// import Navbar from "~/components/Navbar/Navbar";
// import useAuth from "~/hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function getDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const pageSize = 6;

export default function Table() {
  //   const { isAuthenticated } = useAuth();
  // const router = useRouter();

  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedTasks, setselectedTasks] = useState<Task[]>([]);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [displayTasks, setDisplayTasks] = useState(0);
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      Id: "7c9e3d87a248f4028b81f91c",
      taskName: "B",
      analystName: "Analyst 2",
      dateUploaded: "2023-05-10T09:45:18.157Z",
      docList: ["Doc4", "Doc5", "Doc6"],
      timeTaken: "1h 45m",
      completed: true,
      createdTime: "2023-05-10T09:45:18.157Z",
      updatedTime: "2023-05-11T14:27:55.891Z",
    },
    {
      Id: "642ad26ef26f5b1114b109d7",
      taskName: "A",
      analystName: "Analyst 1",
      dateUploaded: "2023-04-03T13:19:42.288Z",
      docList: ["Doc1", "Doc2", "Doc3"],
      timeTaken: "2h 30m",
      completed: false,
      createdTime: "2023-04-03T13:19:42.288Z",
      updatedTime: "2023-04-03T13:19:42.288Z",
    },
    {
      Id: "3eaf6b8d9c1f6a743982f6d5",
      taskName: "Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3",
      analystName: "Analyst 3",
      dateUploaded: "2023-06-18T17:38:59.442Z",
      docList: ["Doc7", "Doc8", "Doc9"],
      timeTaken: "3h 10m",
      completed: false,
      createdTime: "2023-06-18T17:38:59.442Z",
      updatedTime: "2023-06-18T17:38:59.442Z",
    },
    {
      Id: "b54e7908c2f9e6d1a6e18750",
      taskName: "Task 4Task 4Task 4Task 4Task 4Task 4Task 4Task 4Task 4",
      analystName: "Analyst 4",
      dateUploaded: "2023-07-27T08:12:34.786Z",
      docList: ["Doc10", "Doc11", "Doc12"],
      timeTaken: "2h 15m",
      completed: true,
      createdTime: "2023-07-27T08:12:34.786Z",
      updatedTime: "2023-07-28T11:59:22.531Z",
    },
    {
      Id: "908db1c564e2a75f36c821b9",
      taskName: "Task 5Task 5Task 5Task 5Task 5Task 5Task 5Task 5Task 5",
      analystName: "Analyst 5",
      dateUploaded: "2023-08-05T14:56:22.613Z",
      docList: ["Doc13", "Doc14", "Doc15"],
      timeTaken: "1h 50m",
      completed: false,
      createdTime: "2023-08-05T14:56:22.613Z",
      updatedTime: "2023-08-05T14:56:22.613Z",
    },
    {
      Id: "f9ab678532ed40c887ab2ef3",
      taskName: "Task 6Task 6Task 6Task 6Task 6Task 6Task 6Task 6Task 6",
      analystName: "Analyst 6",
      dateUploaded: "2023-09-15T07:22:09.411Z",
      docList: ["Doc16", "Doc17", "Doc18"],
      timeTaken: "2h 5m",
      completed: true,
      createdTime: "2023-09-15T07:22:09.411Z",
      updatedTime: "2023-09-16T10:17:48.726Z",
    },
    {
      Id: "cd3e8d27a6ef53d3c3b7b8a9",
      taskName: "Task 7Task 7Task 7Task 7Task 7Task 7Task 7Task 7Task 7",
      analystName: "Analyst 7",
      dateUploaded: "2023-10-04T16:38:55.202Z",
      docList: ["Doc19", "Doc20", "Doc21"],
      timeTaken: "2h 20m",
      completed: false,
      createdTime: "2023-10-04T16:38:55.202Z",
      updatedTime: "2023-10-04T16:38:55.202Z",
    },
    {
      Id: "2a8efcb4d71e4f30ab1d6140",
      taskName: "Task 8Task 8Task 8Task 8Task 8Task 8Task 8Task 8Task 8",
      analystName: "Analyst 8",
      dateUploaded: "2023-11-12T12:09:31.885Z",
      docList: ["Doc22", "Doc23", "Doc24"],
      timeTaken: "1h 40m",
      completed: true,
      createdTime: "2023-11-12T12:09:31.885Z",
      updatedTime: "2023-11-13T08:25:17.927Z",
    },
    {
      Id: "eb46729f56d438d2e99297d7",
      taskName: "Task 9Task 9Task 9Task 9Task 9Task 9Task 9Task 9Task 9",
      analystName: "Analyst 9",
      dateUploaded: "2023-12-21T19:07:42.654Z",
      docList: ["Doc25", "Doc26", "Doc27"],
      timeTaken: "3h 5m",
      completed: false,
      createdTime: "2023-12-21T19:07:42.654Z",
      updatedTime: "2023-12-21T19:07:42.654Z",
    },
    {
      Id: "a6745bc3b23555e88e79c6f0",
      taskName:
        "Task 10Task 10Task 10Task 10Task 10Task 10Task 10Task 10Task 10",
      analystName: "Analyst 10",
      dateUploaded: "2024-01-18T08:34:17.719Z",
      docList: ["Doc28", "Doc29", "Doc30"],
      timeTaken: "2h 55m",
      completed: true,
      createdTime: "2024-01-18T08:34:17.719Z",
      updatedTime: "2024-01-19T15:12:39.629Z",
    },
    {
      Id: "89cf3c7a5d11896b6e66df24",
      taskName:
        "Task 11Task 11Task 11Task 11Task 11Task 11Task 11Task 11Task 11",
      analystName: "Analyst 11",
      dateUploaded: "2024-02-14T14:22:03.815Z",
      docList: ["Doc31", "Doc32", "Doc33"],
      timeTaken: "2h 10m",
      completed: false,
      createdTime: "2024-02-14T14:22:03.815Z",
      updatedTime: "2024-02-14T14:22:03.815Z",
    },
    {
      Id: "76d13467a95a324d72cfd6b5",
      taskName:
        "Task 12Task 12Task 12Task 12Task 12Task 12Task 12Task 12Task 12",
      analystName: "Analyst 12",
      dateUploaded: "2024-03-09T09:11:52.007Z",
      docList: ["Doc34", "Doc35", "Doc36"],
      timeTaken: "2h 30m",
      completed: true,
      createdTime: "2024-03-09T09:11:52.007Z",
      updatedTime: "2024-03-10T16:45:27.112Z",
    },
    {
      Id: "ad2f9c5e7361b87e8bc6aaf3",
      taskName:
        "Task 13Task 13Task 13Task 13Task 13Task 13Task 13Task 13Task 13",
      analystName: "Analyst 13",
      dateUploaded: "2024-04-17T18:06:27.331Z",
      docList: ["Doc37", "Doc38", "Doc39"],
      timeTaken: "2h 20m",
      completed: false,
      createdTime: "2024-04-17T18:06:27.331Z",
      updatedTime: "2024-04-17T18:06:27.331Z",
    },
    {
      Id: "6548792a11b53a88f4c7cdd9",
      taskName:
        "Task 14Task 14Task 14Task 14Task 14Task 14Task 14Task 14Task 14",
      analystName: "Analyst 14",
      dateUploaded: "2024-05-20T11:55:09.682Z",
      docList: ["Doc40", "Doc41", "Doc42"],
      timeTaken: "2h 5m",
      completed: true,
      createdTime: "2024-05-20T11:55:09.682Z",
      updatedTime: "2024-05-21T09:16:58.520Z",
    },
    {
      Id: "9824b3f1c5d2671198b76f32",
      taskName:
        "Task 15Task 15Task 15Task 15Task 15Task 15Task 15Task 15Task 15",
      analystName: "Analyst 15",
      dateUploaded: "2024-06-26T16:32:44.109Z",
      docList: ["Doc43", "Doc44", "Doc45"],
      timeTaken: "1h 50m",
      completed: false,
      createdTime: "2024-06-26T16:32:44.109Z",
      updatedTime: "2024-06-26T16:32:44.109Z",
    },
    {
      Id: "a6e87f9d2c6439b1f5e8dd14",
      taskName:
        "Task 16Task 16Task 16Task 16Task 16Task 16Task 16Task 16Task 16",
      analystName: "Analyst 16",
      dateUploaded: "2024-07-14T22:09:57.265Z",
      docList: ["Doc46", "Doc47", "Doc48"],
      timeTaken: "1h 40m",
      completed: true,
      createdTime: "2024-07-14T22:09:57.265Z",
      updatedTime: "2024-07-15T18:05:24.019Z",
    },
    {
      Id: "c8a4b7d692f53029e1b71d26",
      taskName:
        "Task 17Task 17Task 17Task 17Task 17Task 17Task 17Task 17Task 17",
      analystName: "Analyst 17",
      dateUploaded: "2024-08-19T09:43:11.773Z",
      docList: ["Doc49", "Doc50", "Doc51"],
      timeTaken: "2h 55m",
      completed: false,
      createdTime: "2024-08-19T09:43:11.773Z",
      updatedTime: "2024-08-19T09:43:11.773Z",
    },
    {
      Id: "b2c193a6f4d567b1e8999c23",
      taskName:
        "Task 18Task 18Task 18Task 18Task 18Task 18Task 18Task 18Task 18",
      analystName: "Analyst 18",
      dateUploaded: "2024-09-27T14:20:38.512Z",
      docList: ["Doc52", "Doc53", "Doc54"],
      timeTaken: "3h 10m",
      completed: true,
      createdTime: "2024-09-27T14:20:38.512Z",
      updatedTime: "2024-09-28T11:45:33.894Z",
    },
    {
      Id: "f5e1dab8c6a925e1b4fc9d12",
      taskName:
        "Task 19Task 19Task 19Task 19Task 19Task 19Task 19Task 19Task 19",
      analystName: "Analyst 19",
      dateUploaded: "2024-10-23T18:55:26.937Z",
      docList: ["Doc55", "Doc56", "Doc57"],
      timeTaken: "2h 25m",
      completed: false,
      createdTime: "2024-10-23T18:55:26.937Z",
      updatedTime: "2024-10-23T18:55:26.937Z",
    },
    {
      Id: "d4e2c1b3a0f69785e8b3a2f1",
      taskName:
        "Task 20Task 20Task 20Task 20Task 20Task 20Task 20Task 20Task 20",
      analystName: "Analyst 20",
      dateUploaded: "2024-11-30T07:41:05.125Z",
      docList: ["Doc58", "Doc59", "Doc60"],
      timeTaken: "2h 15m",
      completed: true,
      createdTime: "2024-11-30T07:41:05.125Z",
      updatedTime: "2024-12-01T14:18:09.806Z",
    },
    {
      Id: "d9c4b2a5f7e6d13c81b2d7a4",
      taskName:
        "Task 21Task 21Task 21Task 21Task 21Task 21Task 21Task 21Task 21",
      analystName: "Analyst 21",
      dateUploaded: "2025-01-09T12:30:22.461Z",
      docList: ["Doc61", "Doc62", "Doc63"],
      timeTaken: "2h 40m",
      completed: false,
      createdTime: "2025-01-09T12:30:22.461Z",
      updatedTime: "2025-01-09T12:30:22.461Z",
    },
    {
      Id: "e5f6d3c2b1a0d9e8f7c6b5a4",
      taskName:
        "Task 22Task 22Task 22Task 22Task 22Task 22Task 22Task 22Task 22",
      analystName: "Analyst 22",
      dateUploaded: "2025-02-14T16:18:37.739Z",
      docList: ["Doc64", "Doc65", "Doc66"],
      timeTaken: "1h 55m",
      completed: true,
      createdTime: "2025-02-14T16:18:37.739Z",
      updatedTime: "2025-02-15T09:42:11.622Z",
    },
    {
      Id: "a4b3c2d1e0f9g8h7i6j5k4l3",
      taskName:
        "Task 23Task 23Task 23Task 23Task 23Task 23Task 23Task 23Task 23",
      analystName: "Analyst 23",
      dateUploaded: "2025-03-22T21:05:55.927Z",
      docList: ["Doc67", "Doc68", "Doc69"],
      timeTaken: "2h 15m",
      completed: false,
      createdTime: "2025-03-22T21:05:55.927Z",
      updatedTime: "2025-03-22T21:05:55.927Z",
    },
    {
      Id: "e3f2g1h0i9j8k7l6m5n4o3",
      taskName:
        "Task 24Task 24Task 24Task 24Task 24Task 24Task 24Task 24Task 24",
      analystName: "Analyst 24",
      dateUploaded: "2025-04-30T10:47:44.224Z",
      docList: ["Doc70", "Doc71", "Doc72"],
      timeTaken: "3h 5m",
      completed: true,
      createdTime: "2025-04-30T10:47:44.224Z",
      updatedTime: "2025-05-01T15:19:52.803Z",
    },
    {
      Id: "d5e4f3g2h1i0j9k8l7m6n5",
      taskName:
        "Task 25Task 25Task 25Task 25Task 25Task 25Task 25Task 25Task 25",
      analystName: "Analyst 25",
      dateUploaded: "2025-06-15T14:32:09.539Z",
      docList: ["Doc73", "Doc74", "Doc75"],
      timeTaken: "2h 30m",
      completed: false,
      createdTime: "2025-06-15T14:32:09.539Z",
      updatedTime: "2025-06-15T14:32:09.539Z",
    },
    {
      Id: "o6n5m4l3k2j1i0h9g8f7e",
      taskName:
        "Task 26Task 26Task 26Task 26Task 26Task 26Task 26Task 26Task 26",
      analystName: "Analyst 26",
      dateUploaded: "2025-07-23T08:19:33.758Z",
      docList: ["Doc76", "Doc77", "Doc78"],
      timeTaken: "1h 45m",
      completed: true,
      createdTime: "2025-07-23T08:19:33.758Z",
      updatedTime: "2025-07-24T13:57:17.642Z",
    },
    {
      Id: "6e7d8c9b0a1b2c3d4e5f6g",
      taskName:
        "Task 27Task 27Task 27Task 27Task 27Task 27Task 27Task 27Task 27",
      analystName: "Analyst 27",
      dateUploaded: "2025-08-31T19:05:21.956Z",
      docList: ["Doc79", "Doc80", "Doc81"],
      timeTaken: "2h 20m",
      completed: false,
      createdTime: "2025-08-31T19:05:21.956Z",
      updatedTime: "2025-08-31T19:05:21.956Z",
    },
  ]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  function previousPage() {
    setDisplayTasks(displayTasks - pageSize);
    setCanNext(true);
    if (displayTasks - pageSize <= 0) {
      setCanPrevious(false);
    } else {
      setCanPrevious(true);
    }
  }

  function nextPage() {
    setDisplayTasks(displayTasks + pageSize);
    setCanPrevious(true);
    if (displayTasks + pageSize >= tasks.length - pageSize) {
      setCanNext(false);
    } else {
      setCanNext(true);
    }
  }

  useEffect(() => {
    const isIndeterminate =
      selectedTasks.length > 0 && selectedTasks.length < tasks.length;
    setChecked(selectedTasks.length === tasks.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedTasks]);

  function toggleAll() {
    setselectedTasks(checked || indeterminate ? [] : tasks);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  function sort() {
    const temp = [...filteredTasks];
    temp.sort((a, b) => {
      if (a.taskName > b.taskName) return 1;
      else if (a.taskName < b.taskName) return -1;
      else return 0;
    });
    setFilteredTasks(temp);
  }

  function deleteSelected() {
    if(selectedTasks.length == 0) {
      console.log("No tasks selected");
      return;
    }
    setFilteredTasks(tasks.filter((task) => !selectedTasks.includes(task)));
    setselectedTasks([]);
  }

  useEffect(() => {
    if (search != "" || search != null) {
      console.log(search);
      setFilteredTasks(tasks.filter((task) => task.taskName.includes(search)));
    } else {
      setFilteredTasks(tasks);
    }
  }, [search]);

  if (true) {
    //auth
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>
        <main className="flex min-h-screen bg-[#7F56D9]">
          <div className="w-1/12 hover:w-1/4 transition-all duration-500">
            
          </div>
          <div className="w-full rounded-l-[48px] bg-white">
            <div className="flex flex-col items-start justify-start px-4 pt-5 sm:px-6 lg:px-8">
              <p className="text-3xl font-semibold text-black">
                Welcome back, Jane
              </p>
              <p className="text-md font-semibold text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="mt-5 flex w-full flex-row items-center justify-between">
                <button className="text-md flex items-center justify-center gap-2 rounded-lg border border-gray-300 p-2 pr-3 font-semibold shadow-sm transition duration-200">
                  <Plus size={20} />
                  Add Process
                </button>
                <input
                  className="h-10 w-1/4 rounded-lg border-2 border-gray-300 bg-white px-5 text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Filter by name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="px-4 pb-4 sm:px-6 lg:px-8">
              <div className="mt-6 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow ring-1 ring-black/5 sm:rounded-lg">
                      <table className="min-w-full table-fixed divide-y divide-gray-300">
                        <thead>
                          <tr className=" bg-[#F9FAFB]">
                            <th
                              scope="col"
                              className="relative px-7 sm:w-12 sm:px-6"
                            >
                              <input
                                type="checkbox"
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                ref={checkbox}
                                checked={checked}
                                onChange={toggleAll}
                              />
                            </th>
                            <th
                              scope="col"
                              className="flex items-center py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                            >
                              Name
                              <MoveDown
                                size={18}
                                className="ml-2 cursor-pointer"
                                onClick={sort}
                              />
                              <Trash2
                                size={18}
                                className="ml-8 cursor-pointer"
                                onClick={deleteSelected}
                              />
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Date Uploaded
                            </th>
                            <th
                              scope="col"
                              className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Document List
                            </th>
                            <th
                              scope="col"
                              className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Time Taken
                            </th>
                            <th
                              scope="col"
                              className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Status
                            </th>
                            {/* <th
                            scope="col"
                            className="w-[2rem] px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          />
                          <th
                            scope="col"
                            className="w-[2rem] px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          /> */}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {filteredTasks
                            .slice(displayTasks, displayTasks + pageSize)
                            .map((task) => (
                              <tr
                                key={task.taskName}
                                className={
                                  selectedTasks.includes(task)
                                    ? "bg-gray-100"
                                    : undefined
                                }
                              >
                                <td className="relative px-7 sm:w-12 sm:px-6">
                                  {selectedTasks.includes(task) && (
                                    <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                  )}
                                  <input
                                    type="checkbox"
                                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value={task.Id}
                                    checked={selectedTasks.includes(task)}
                                    onChange={(e) =>
                                      setselectedTasks(
                                        e.target.checked
                                          ? [...selectedTasks, task]
                                          : selectedTasks.filter(
                                              (p) => p !== task
                                            )
                                      )
                                    }
                                  />
                                </td>
                                <td
                                  className={classNames(
                                    "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                                    selectedTasks.includes(task)
                                      ? "text-indigo-600"
                                      : "text-gray-900"
                                  )}
                                >
                                  <p className="flex flex-col">
                                    {task.taskName.length > 20
                                      ? task.taskName.substring(0, 20) + "..."
                                      : task.taskName}
                                    <span className="text-sm text-gray-500">
                                      {task.analystName}
                                    </span>
                                  </p>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {getDate(task.dateUploaded)}
                                </td>
                                <td className="flex whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <span className="mr-2 rounded-md bg-blue-200 p-1 text-sm">
                                    {task.docList[0]}
                                  </span>
                                  <span className="mr-2 rounded-md bg-blue-200 p-1 text-sm">
                                    {task.docList[1]}
                                  </span>
                                  <span className="mr-2 rounded-md bg-blue-200 p-1 text-sm">
                                    {task.docList[2]}
                                  </span>
                                  <span className="mr-2 rounded-md bg-blue-200 p-1 text-sm">
                                    {"+" + (task.docList.length - 3)}
                                  </span>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {task.timeTaken}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {task.completed ? (
                                    <Link
                                      href="./"
                                      className="font-semibold text-[#7F56D9]"
                                    >
                                      View Results
                                    </Link>
                                  ) : (
                                    "Pending"
                                  )}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <Pencil size={20} />
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <Trash2 size={20} />
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                      <div className="flex justify-between border border-t-gray-200 p-2">
                        <button
                          className="text-md flex items-center justify-center gap-2 rounded-lg border border-gray-300 p-2 pr-3 font-semibold shadow-sm transition duration-200"
                          disabled={!canPrevious}
                          onClick={previousPage}
                        >
                          <ChevronLeft size={20} />
                          Previous Page
                        </button>

                        <button
                          className="text-md flex items-center justify-center gap-2 rounded-lg border border-gray-300 p-2 pr-3 font-semibold shadow-sm transition duration-200"
                          disabled={!canNext}
                          onClick={nextPage}
                        >
                          Next Page
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
