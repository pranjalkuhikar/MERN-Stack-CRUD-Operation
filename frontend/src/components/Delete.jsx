/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Delete = ({ handleDelete }) => {
  return (
    <div className="p-40">
      <div className="flex flex-col items-center justify-center gap-6 ">
        <p className="text-3xl">
          Are you sure you want to delete these Records?
        </p>
        <h3 className="text-xl">This action cannot be undone.</h3>
        <div className="">
          <Link
            to="/read"
            className="text-lg mr-10 w-[25rem] font-semibold px-7 py-2 rounded-lg bg-white text-black hover:text-white hover:bg-yellow-400 hover:duration-300"
          >
            Cancel
          </Link>
          <button
            onClick={handleDelete}
            className="text-lg w-[25rem] font-semibold px-7 py-2 rounded-lg bg-white text-black hover:text-white hover:bg-red-600 hover:duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
