

import { useState } from "react";
import { tournamentData } from "./data/tournamentDB";

    export function TournamentCard() {
  const [message, setMessage] = useState("");

  const cards = []; 

  for (let i = 0; i < tournamentData.length; i++) {
    const tournament = tournamentData[i]; 

    cards.push(
             
    <section
          key={tournament.id}
          className=" bg-white w-[95%]  rounded-[10px] mx-auto mt-6 shadow-xl"
        >
          <div className="flex "> 
          <img className=" w-[60px] h-[60px] m-6 rounded-[15px] "
       src={tournament.participants[tournament.participants.length - 1].avatar }
  alt="logo"
/>
          <div className="flex gap-4 m-6 items-center">
            <div className="w-16">
           
            </div>

            <div>
              <h2 className="font-bold text-lg">{tournament.title}</h2>
              <p className="bg-blue-600 text-white p-1 rounded-[15px] w-fit">
                {tournament.status}
              </p>
            </div>
          </div>
          </div>

          <div>
            <p className="mx-4 text-center">{tournament.description}</p>

            <div className="w-[89%] mx-auto rounded-full h-[1px] bg-black/50 mt-4"></div>

            <div className="mx-6 py-4">
              <p>👥 {tournament.participantsCount} Participants · {tournament.type}</p>
              <p>🏆 {tournament.format}</p>
              <p>📅 {tournament.date}</p>
              <p>📍 {tournament.location}</p>

              <button
                onClick={() => setMessage(`You selected ${tournament.title}`)}
                className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
              >
                Select
              </button>
            </div>
          </div>
        </section>
      )}
  return (
    <>
      {cards}

      {message && (
        <div className="text-center mt-6 font-semibold text-blue-600">
          {message}
        </div>
      )}
    </>
  );
}

