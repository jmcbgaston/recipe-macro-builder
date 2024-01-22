export default function App() {
  return (
    <div className="h-screen w-screen bg-slate-400 p-8">
      <div className="flex justify-center items-center h-full bg-slate-300">
        <input
          type="text"
          placeholder="Search ingredient ..."
          className="border shadow-lg py-2 px-4 w-80 rounded-full"
        />
      </div>
    </div>
  );
}
