import { useState } from "react";

export function MyButton() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();       
        setIsRegistered(!isRegistered); 
      }}
      className={`p-4 w-full text-white ${
        isRegistered ? "bg-red-500" : "bg-green-600"
      }`}
    >
      {isRegistered ? "Se désinscrire" : "S'inscrire"}
    </button>
  );
}