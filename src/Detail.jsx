export function Detail({ tournament }) {

  return (
    <div className="bg-gray-100 flex justify-center items-center mt-10">

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl w-[95%]">

        <div className="bg-gradient-to-b from-indigo-500 to-purple-600 text-white p-5">

          <h2 className="text-center text-lg font-semibold mb-4">
            Tournament
          </h2>

          <div className="flex items-center gap-3">

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

        </div>

      </div>

    </div>
  );
}