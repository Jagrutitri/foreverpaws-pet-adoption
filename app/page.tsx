import Navbar from "./components/Navbar";

export default async function Home() {
  // Fetch pets from SleekCMS
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SLEEKCMS_API_URL}`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_SLEEKCMS_API_TOKEN as string,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch pets");
  }

  const data = await res.json();

  const pets = data?.entries?.pet || [];

  return (
    <>
      {/* 🌟 Website Title */}
      <title>ForeverPaws</title>

      <Navbar />

      {/* 🐶 Hero Section */}
      <div className="relative">
        <img
          src="/dog-hero.jpg"
          className="w-full h-[380px] object-cover"
          alt="Adopt pets India"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-black/70 text-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-center">
            Re-Home and Adopt a Pet in India
          </h2>
          <p className="text-center text-sm">
            Every pet deserves a good home. #AdoptLove
          </p>

          <div className="flex justify-center mt-3">
            <a
              href="/adopt"
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Adopt a pet
            </a>
          </div>
        </div>
      </div>

      {/* 🐾 Journey Heading */}
      <h2 className="text-center text-2xl font-bold mt-10">
        Your Pet Adoption Journey With ForeverPaws
      </h2>

      {/* 🐶 Pet Cards from SleekCMS */}
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          🐾 Available Pets for Adoption
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pets.map((pet: any) => (
            <div key={pet._id} className="border rounded-lg shadow p-4">

              {/* Full visible images */}
              <img
                src={pet.image.url}
                alt={pet.name}
                className="w-full h-64 object-contain bg-black-100 rounded"
              />

              <h2 className="text-xl font-semibold mt-2">{pet.name}</h2>

              <p>Age: {pet.age} years</p>
              <p>Breed: {pet.breed}</p>
              <p>Category: {pet.category?.title}</p>

              <div
                className="text-sm mt-2"
                dangerouslySetInnerHTML={{ __html: pet.description }}
              />

              {/* 📍 Location clickable to Google Maps */}
              {pet.location?.markers?.length > 0 && (
                <a
                  className="mt-2 text-sm text-blue-600 underline block"
                  target="_blank"
                  href={`https://www.google.com/maps?q=${pet.location.markers[0].lat},${pet.location.markers[0].lng}`}
                >
                  📍 View Location on Map
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
