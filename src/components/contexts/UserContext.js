import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const myInfo = {};
  return <AuthContext.Provider value={myInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
