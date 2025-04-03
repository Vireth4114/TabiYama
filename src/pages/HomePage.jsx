import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

export default function HomePage() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/other');
  }
  return (
    <page class='p-5'>
      <section>
        <h2>Viver la montagne, les yeux fermés !</h2>
        <div>
          Avec MountBox, osez la montagne, c'est un sacré banger de Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quibusdam magni, quisquam impedit provident aspernatur tempore aliquam dolores ut nobis, laudantium dolor perspiciatis reiciendis omnis obcaecati quasi ex sapiente blanditiis.
        </div>
      </section>
    </page>
  );
}
