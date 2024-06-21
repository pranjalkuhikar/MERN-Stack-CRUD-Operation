import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Create = () => {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/create", value);
      if (response.data.success) {
        toast.success(response.data.Message);
      } else {
        toast.error(response.data.Message);
      }
    } catch (error) {
      console.error("Failed to create user:", error);
      toast.error("User with this mobile number already exists");
    }
  };

  return (
    <div>
      <div className="text-5xl flex items-center justify-evenly text-zinc-500 mb-20">
        <h1>Create Users</h1>
      </div>
      <div className="flex items-center justify-center">
        <form
          className="flex items-center flex-col gap-10"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              className="outline-none p-5 w-[25rem] bg-transparent text-center border-zinc-100 rounded-lg bg-zinc-700"
              type="text"
              required
              value={value.firstname}
              placeholder="First Name"
              name="firstname"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="outline-none p-5 w-[25rem] bg-transparent text-center border-zinc-100 rounded-lg bg-zinc-700"
              type="text"
              required
              value={value.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              name="lastname"
            />
          </div>
          <div>
            <input
              className="outline-none p-5 w-[25rem] bg-transparent text-center border-zinc-100 rounded-lg bg-zinc-700"
              type="tel"
              required
              value={value.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              name="mobile"
            />
          </div>
          <div>
            <input
              className="outline-none p-5 w-[25rem] bg-transparent text-center border-zinc-100 rounded-lg bg-zinc-700"
              type="text"
              required
              value={value.state}
              onChange={handleChange}
              placeholder="State"
              name="state"
            />
          </div>
          <div>
            <input
              className="outline-none p-5 w-[25rem] bg-transparent text-center border-zinc-100 rounded-lg bg-zinc-700"
              type="text"
              required
              value={value.city}
              onChange={handleChange}
              placeholder="City"
              name="city"
            />
          </div>
          <div>
            <button className="text-lg w-[25rem] font-semibold px-7 py-2 rounded-lg bg-white text-black hover:text-white hover:bg-blue-600 hover:duration-300">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
