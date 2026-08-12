export default function Navbar() {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-700 px-8 py-4 flex items-center justify-between">

      <h1 className="text-2xl font-bold text-white">
        🎮 OVER CODE
      </h1>

      <nav className="flex gap-6 text-slate-300">
        <a href="/dashboard">Inicio</a>
        <a href="/achievements">Logros</a>
        <a href="/ranking">Ranking</a>
      </nav>

    </header>
  );
}
