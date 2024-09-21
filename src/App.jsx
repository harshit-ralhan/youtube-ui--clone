import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Loading from "./loader/Loading";

const App = () => {
  const [signin, setSignin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // const { loading, data } = useAuth();
  // console.log(loading);
  // console.log(data);

  return (
    <>
      {/* {loading && <Loading />} */}
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              setSignin={setSignin}
              signin={signin}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route path="/search/:searchQuery" element={<Search signin={signin} setSignin={setSignin}/>} />
        <Route
          path="/video/:id"
          element={<PlayingVideo signin={signin} setSignin={setSignin} />}
        />
        {/* <Route path="/video/kJQP7kiw5Fk" element={<PlayingVideo signin={signin}/>} /> */}
      </Routes>
    </>
  );
};

export default App;
