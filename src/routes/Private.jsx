import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

const Private = ({ children }) => {
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return <Login />;
  }
  return <div>{children}</div>;
};

export default Private;
