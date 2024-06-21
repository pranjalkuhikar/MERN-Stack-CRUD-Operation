import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-zinc-800 w-full h-screen text-white">
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
