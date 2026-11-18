export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-50">
      <h1 className="text-5xl font-bold text-green-800">
        🎄 GiftHub
      </h1>

      <p className="mt-4 text-xl text-gray-700">
        Családi Wish List alkalmazás
      </p>

      <button className="mt-8 rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700">
        Belépés
      </button>
    </main>
  );
}
