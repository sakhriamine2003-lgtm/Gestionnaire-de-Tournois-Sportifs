export function AffichageDetaille() {
  return (
    <div className="bg-gray-100 flex justify-center items-center">

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl w-full">

        <div className="bg-gradient-to-b from-indigo-500 to-purple-600 text-white p-5">

          <h2 className="text-center text-lg font-semibold mb-4">
            Tournament
          </h2>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              🎾
            </div>

            <div>
              <h3 className="font-semibold">Shuttle Masters League</h3>

              <span className="text-xs bg-green-400 text-white px-2 py-1 rounded-full">
                On Going
              </span>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <p>👥 24/32 Participants • Public</p>
            <p>🏆 Single Elimination</p>
            <p>📅 October 12, 2025</p>
            <p>📍 Badminton Hall 1</p>
          </div>

          <div className="bg-white/20 mt-5 rounded-full flex justify-between p-1 text-sm">
            <button className="flex-1 text-center py-1">Info</button>

            <button className="flex-1 bg-white text-black rounded-full py-1">
              Participants
            </button>

            <button className="flex-1 text-center py-1">
              Bracket
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
