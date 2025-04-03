import { Person } from "@mui/icons-material";
import React from "react";
export default function Header() {
  return (
    <>
      <div className='position-absolute row top-0 start-0 w-100 bg-primary h-80px d-flex align-items-center'>
        <strong className='text-white p-4 h2 col'>
          MountBox
        </strong>
        <div className="col-8"></div>
        <Person fontSize="large" className="col text-white h2"/>
      </div>
      <div className='h-80px'></div>
    </>
  );
}
