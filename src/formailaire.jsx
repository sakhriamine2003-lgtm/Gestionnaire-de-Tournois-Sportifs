import { useState } from "react";

export function MyButton() {
  const [version1, version2] = useState(false);



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

  <form className="bg-white p-6 rounded-xl shadow-md w-96 space-y-4">

    <h2 className="text-xl font-bold text-center">Ajouter</h2>

    <div>
      <label className="block text-sm font-medium">Titre</label>
      <input 
        type="text"
        placeholder="Entrer le titre"
        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label className="block text-sm font-medium">Name</label>
      <input type="text" placeholder="Entrer le nom"
        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label className="block text-sm font-medium">Equipe</label>
      <input 
        type="text"
        placeholder="Entrer l'équipe"
        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <button 
      className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
      Ajouter
    </button>

  </form>

</div>

  )};