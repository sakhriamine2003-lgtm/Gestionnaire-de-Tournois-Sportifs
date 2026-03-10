import { useState } from "react";

export function Detail({ tournament }) {
  const [activeTab, setActiveTab] = useState("Participants");   

  if (!tournament) return null;

  function ParticipantStatus({ status }) {
    const isConfirmed = status === "confirmed";
    return (
      <span> {status} </span>);
  }

  return (
<div className="fixed bottom-0 w-full p-5 bg-gradient-to-b from-indigo-500 to-purple-600 shadow-xl z-30 pt" >      <div className="bg-white rounded-3xl overflow-hidden shadow-xl w-[98%] ">

        <div className="bg-gradient-to-b from-indigo-500 to-purple-600 text-white p-5">

          <h2 className="text-center text-lg font-semibold mb-4">Tournament</h2>

          <div className="flex items-center gap-3 mb-4">

            <img
              className="w-12 h-12 rounded-xl"
              src={tournament.participants[tournament.participants.length - 1].avatar}
              alt="logo"
            />

            <div>
              <h3 className="font-semibold">{tournament.title}</h3>
              <span className="text-xs bg-green-400 text-white px-2 py-1 rounded-full">
                {tournament.status}
              </span>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <p>👥 {tournament.participantsCount} Participants • {tournament.type}</p>
            <p>🏆 {tournament.format}</p>
            <p>📅 {tournament.date}</p>
            <p>📍 {tournament.location}</p>
          </div>

          <div className="bg-white/20 mt-5 rounded-full flex justify-between p-1 text-sm">
            {["Info", "Participants", "Bracket"].map((tab) => (
              <button
                className={`flex-1 py-1 rounded-full bg-white text-black font-semibold" : "text-white"}`}
              >
                {tab}</button>
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

          {activeTab === "Participants" && (
            <div>
              <h4 className="font-semibold mb-4">
                Participants List ({tournament.participants.length})
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {tournament.participants.map((p) => (
                  <div
                    key={p.id}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      p.status.toLowerCase() === "confirmed"
                        ? "bg-green-50"
                        : "bg-orange-100"
                    }`}
                  >
                    <img
                      src={p.avatar}
                      alt={p.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{p.name}</p>
                      <ParticipantStatus status={p.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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