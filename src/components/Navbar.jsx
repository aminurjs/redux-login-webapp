import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);
  console.log(user);
  const handleLogOut = () => {
    dispatch(logOut("logout"));
  };
  return (
    <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-3 border-b border-gray-200">
      <Link to="/" className="text-3xl font-medium">
        Logo
      </Link>
      {!user ? (
        <Link to="/login">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </Link>
      ) : (
        <button
          onClick={handleLogOut}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Log Out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
