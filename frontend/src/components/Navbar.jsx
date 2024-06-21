import { Link, Route, Routes } from "react-router-dom";
import Show from "./Show";
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    state: "",
    city: "",
  });

  // Delete
  const [deleteId, setDeleteId] = useState();

  const DeleteUser = (userId) => {
    setDeleteId(userId);
  };

  const handleDelete = async () => {
    try {
      const deleteUser = await axios.delete(`/api/delete/${deleteId}`);
      if (deleteUser.data.success) {
        toast.success(deleteUser.data.Message);
      } else {
        toast.error(deleteUser.data.Message);
      }
    } catch (error) {
      console.error("Failed to create user:", error);
      toast.error("An error occurred while creating the user.");
    }
  };

  const [updateId, setUpdateId] = useState();

  // Update
  const UpdateUser = async (id) => {
    setUpdateId(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateUser = await axios.put(`/api/update/${updateId}`, value);
      if (updateUser.data.success) {
        toast.success(updateUser.data.Message);
      } else {
        toast.error(updateUser.data.Message);
      }
    } catch (error) {
      console.error("Failed to create user:", error);
      toast.error("An error occurred while creating the user.");
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="flex items-center justify-evenly p-10 font-semibold text-lg ">
        <Link
          className="text-lg font-semibold px-3 py-2 rounded-lg bg-white text-black hover:text-white hover:bg-blue-600 hover:duration-300"
          to="/create"
        >
          Add User
        </Link>
        <Link
          className="text-lg font-semibold px-3 py-2 rounded-lg bg-white text-black hover:text-white hover:bg-yellow-600 hover:duration-300"
          to="/read"
        >
          Show User
        </Link>
      </div>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route
          path="/read"
          element={<Show UpdateUser={UpdateUser} DeleteUser={DeleteUser} />}
        />
        <Route
          path="/update"
          element={
            <Update
              value={value}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/delete"
          element={<Delete handleDelete={handleDelete} />}
        />
      </Routes>
    </>
  );
};

export default Navbar;
