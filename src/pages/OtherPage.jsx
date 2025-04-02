import React from "react";
import { useNavigate } from "react-router-dom";
export default function OtherPage() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  }
  return (
    <button onClick={routeChange}>Truc 2</button>
  );
}
