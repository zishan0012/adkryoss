import { useState } from "react";

export default function FixedCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed Button */}
      <div
        onClick={() => setOpen(true)}
        className="fixed right-5 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-right bg-orange-400 text-white px-6 py-3 font-semibold cursor-pointer z-50 rounded-t-lg"
        
      >
        Let's Connect
      </div>

      {/* Form Panel */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 w-[350px] bg-white shadow-2xl transition-all duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-yellow-400 p-4 flex justify-between items-center font-bold">
          Leave a Message
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <form className="p-6 flex flex-col gap-4">
          <input className="border p-2 rounded" placeholder="Name" />
          <input className="border p-2 rounded" placeholder="Email" />
          <input className="border p-2 rounded" placeholder="Phone Number" />
          <input className="border p-2 rounded" placeholder="Website URL" />
          <textarea className="border p-2 rounded" placeholder="Message here..." />
          <button className="bg-blue-600 text-white py-2 rounded-full">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}