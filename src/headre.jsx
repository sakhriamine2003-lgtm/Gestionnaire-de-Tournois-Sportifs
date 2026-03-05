export function Headre() {
  return (
    <div className="bg-blue-600 pb-10 pt-6 px-6 rounded-b-3xl">

      <div className="flex items-center justify-between">

        <div className="font-bold text-white">
          <h1 className="text-lg ">Good Morning,</h1>
          <p className="text-xl ">Samuel Walker!</p>
        </div>

        <div className="flex gap-4">
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/128/3602/3602136.png"
            alt="Notification"
          />
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            alt="Profile"
          />
        </div>

      </div>

      <div className="flex justify-center mt-6 bg-white 
 ">
        <input
          type="search"
          placeholder="Search... "
          className="w-80 p-3  font-bold  outline-none  text-center "
        />
        <button className="w-[35px] animate-bounce "> <img src="https://cdn-icons-png.flaticon.com/128/15761/15761178.png" alt="logo" /> </button>
      </div>

    </div>
  );
}


