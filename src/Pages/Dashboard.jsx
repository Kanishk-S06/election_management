import React from "react";
import NavbarHome from "../Components/NavbarHome";
import Map from "../Google-Maps/Map_Api";

export default function Dashboard() {
  return (
    <>
      <NavbarHome></NavbarHome>
      <Map></Map>

    </>
  );
}
