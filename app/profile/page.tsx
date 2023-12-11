export default function ProfilePage() {
  return (
    <main className="w-full bg-black text-white pt-32 min-h-screen">
      <div className="w-3/4 mx-auto">
        <h1 className="text-5xl font-bold tracking-wide mb-6">
          Profile
        </h1>
        <section className="flex flex-wrap md:flex-nowrap items-center bg-black text-white py-8">
          <div className="w-full md:w-1/2 p-2">
            <h2 className="text-3xl font-bold mb-4">Basic Information</h2>
            <ul className="list-disc list-inside">
              <li>Name: Yuta Sugimine</li>
              <li>Hometown: Tokyo / Fuchu</li>
              <li>Age: 21</li>
              <li>University: Yokohama City University</li>
              <li>Major: International Economics (Accounting)</li>
              <li>Hobbies: Football</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-start items-center mb-4 md:mb-0 p-2">
            <img src="/images/profile.jpg" alt="profile image" className="w-full h-auto rounded" />
          </div>
        </section>
      </div>
    </main>
  );
}
