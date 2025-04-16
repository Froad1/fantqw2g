import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

const ProtectedRoute = ({ children }) => {

    if (!auth.currentUser) {
        return <Navigate to="/login" />;
    }

  return children;
};

export default ProtectedRoute;
