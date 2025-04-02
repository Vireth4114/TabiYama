import React from "react";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/other');
  }
  return (
    <button onClick={routeChange}>Truc</button>
  );
}
