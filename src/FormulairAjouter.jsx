import { useState } from "react";

export function FormulairAjouter() {
  const [nom, setnom] = useState("");
  const [equipe, setequipe] = useState("");
  const [niveau, setniveau] = useState("");

  const handleAjouter = (e) => {
    e.preventDefault();
    console.log("Participant ajouté :", { nom, equipe, niveau });
    setnom("");
    setequipe("");
    setniveau("");
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="flex justify-center items-center min-h-screen bg-gray-100 "
    >
      <form className="bg-white p-6 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">LES PARTICIPENT</h2>

        <div>
          <label className="block text-sm font-medium">Nom</label>
          <input
            type="text"
            placeholder="Entrer le titre"
            value={nom}
            onChange={(e) => setnom(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Équipe</label>
          <input
            type="text"
            placeholder="Entrer le nom"
            value={equipe}
            onChange={(e) => setequipe(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Niveau</label>
          <input
            type="text"
            placeholder="Entrer l'équipe"
            value={niveau}
            onChange={(e) => setniveau(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
type="submit"
          onClick={handleAjouter}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Ajouter
        </button>

   
        
      </form>
    </div>
  
  );
}
