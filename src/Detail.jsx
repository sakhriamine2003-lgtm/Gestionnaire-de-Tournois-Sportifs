import { useState } from "react";
import Participant from "./Participant";

export function Detail({ tournament }) {
  const [activeTab, setActiveTab] = useState("Info");

  return (
    <div className="fixed bottom-0 h-full w-full p-5 bg-gradient-to-b from-indigo-500 to-purple-600 shadow-xl z-30">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl w-[98%]">
        <div className="bg-gradient-to-b from-indigo-500 to-purple-600 text-white p-5">
          <a href="/">
            <i className="fa-solid fa-chevron-left"></i>
          </a>
          <h2 className="text-center text-lg font-semibold mb-4">Tournament</h2>

          <div className="flex items-center gap-3 mb-4">
            <div>
              <h3 className="font-semibold">{tournament.title}</h3>
              <span className="text-xs bg-green-400 text-white px-2 py-1 rounded-full">
                {tournament.status}
              </span>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <p>🏆 {tournament.format}</p>
            <p>📅 {tournament.date}</p>
            <p>📍 {tournament.location}</p>
          </div>

          <div className="bg-white/20 mt-5 rounded-full flex justify-between p-1 text-sm">
            {["Info", "Participants", "Bracket"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-1 rounded-full ${
                  activeTab === tab
                    ? "bg-orange-100 text-black font-semibold"
                    : "text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white rounded-b-3xl max-h-[300px] overflow-y-auto">
          {activeTab === "Info" && (
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p>{tournament.description}</p>
            </div>
          )}

          {/* partie de PARTICIPENT ------------------------------------- */}
          {activeTab === "Participants" && (
            <div>
              <h4 className="font-semibold mb-2">Participent :</h4>
              <Participant/>
            </div>
          )}

          {/* partie de PARTICIPENT ------------------------------------- */}

          {activeTab === "Bracket" && (
            <div className="text-center text-gray-500">
              Bracket view coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
