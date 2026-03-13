import { useState } from "react";
import { tournamentData } from "./data/tournamentDB";
import { Detail } from "./Detail";
import  Button  from "./Button";  

export function TournamentCard() {

  const [Val1Tournament, Val2Tournament] = useState(null);

  return (
    <>
      {tournamentData.map((tournament) => (


        <section
          key={tournament.id}
          onClick={() => Val2Tournament(tournament)}
          className="bg-white w-[95%] rounded-[10px] mx-auto mt-6 shadow-xl cursor-pointer "
        >

          <div className="flex">

            <img
              className="w-[60px] h-[60px] m-6 rounded-[15px]"
              src={tournament.participants[tournament.participants.length - 1].avatar}
              alt="logo"
            />

            <div className="flex gap-4 m-6 items-center">

              <div>
                <h2 className="font-bold text-lg">{tournament.title}</h2>

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
            </div>
          </div>
          <Button/>


        </section>

      ))}
      {Val1Tournament && (
        <Detail tournament={Val1Tournament} />
      )}
    </>
  );
}