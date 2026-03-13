import React, { useState } from 'react';

function Btn() {
  const [name, methode] = useState("Ajouter"); 



  return (
    <div>
      <button
      onClick={methode}
        type="button"
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
        {name}
      </button>
    </div>
  );
}

export default Btn;
