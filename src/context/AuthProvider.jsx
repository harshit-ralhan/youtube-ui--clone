import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
// import { fetchData } from "../example_responses/rapidapi";
import { useContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    // fetchAlldata(value)
  }, [value])

  // const fetchAlldata = (query) => {
  //   setLoading(true)
  //   fetchData(`/search/?q=${query}`).then(({contents}) => {
  //     console.log(contents);
  //     setData(contents)
  //     setLoading(false)
  //   })
  // }

  return (
    <AuthContext.Provider value={{loading, data, value, setValue, searchQuery, setSearchQuery}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>  useContext(AuthContext);