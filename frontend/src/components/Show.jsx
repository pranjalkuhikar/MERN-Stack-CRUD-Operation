/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Show = ({ UpdateUser, DeleteUser }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchUser = await axios.get("/api/read");
        const response = fetchUser.data;
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [data]);

  return (
    <div>
      <div className="text-5xl flex items-center justify-evenly text-zinc-500 mb-20">
        <h1> All Users</h1>
      </div>

      <div className="flex items-center justify-center">
        <table className="w-[60%] text-center table-auto">
          <thead className="bg-gray-200 text-gray-600 uppercase text-lg leading-normal">
            <tr>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Mobile Number</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Update / Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-100 text-md font-medium">
            {data.user?.map((elem, index) => {
              return (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-700"
                  key={index}
                >
                  <td className="px-4 py-2">{elem.firstname}</td>
                  <td className="px-4 py-2">{elem.lastname}</td>
                  <td className="px-4 py-2">{elem.mobile}</td>
                  <td className="px-4 py-2">{elem.state}</td>
                  <td className="px-4 py-2">{elem.city}</td>
                  <td className="px-4 py-2 flex justify-end items-center space-x-2">
                    <Link
                      to="/update"
                      onClick={() => UpdateUser(elem._id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Update
                    </Link>
                    <Link
                      to="/delete"
                      onClick={() => DeleteUser(elem._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Show;
