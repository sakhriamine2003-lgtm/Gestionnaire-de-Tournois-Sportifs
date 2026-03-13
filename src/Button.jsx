import { useState } from "react";
import { FormulairAjouter } from "./FormulairAjouter";

export default function Button() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center">

      <button
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}

        className={`p-4 w-60 text-white ${
          
        show ? "bg-red-500" : "bg-green-600"}`}>
        {show ? "Se désinscrire" : "S'inscrire"}
      </button>

      {show && <FormulairAjouter />}

    </div>
  );
}
