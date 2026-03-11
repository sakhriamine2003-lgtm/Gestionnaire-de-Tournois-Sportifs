import { useState } from "react";
import {FormulairAjouter} from "./FormulairAjouter";

export function MyButton() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="flex flex-col items-center">

      <button
        onClick={() => setIsRegistered(!isRegistered)}
        className={`p-4 w-60 text-white ${
          isRegistered ? "bg-red-500" : "bg-green-600"
        }`}
      >
        {isRegistered ? "Se désinscrire" : "S'inscrire"}
      </button>

      {isRegistered && <FormulairAjouter />}

    </div>
  );
}
