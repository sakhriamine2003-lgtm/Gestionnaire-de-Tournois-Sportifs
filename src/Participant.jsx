import React from "react";

function Participant({participant}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
      <img
        src="https://cdn-icons-png.flaticon.com/128/219/219970.png"
        alt="logo"
        className="w-10 h-10 rounded-full object-cover"
      />

      <div>
        <p className="font-semibold">{participant.nom}</p>
        <p className="font-semibold">{participant.equipe}</p>
        <p className="font-semibold">{participant.niveau}</p>
      </div>
    </div>
    
  );

}
export default Participant;


