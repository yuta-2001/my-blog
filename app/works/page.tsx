import { fetchWorkItems } from "../../utils/fetch-data";
import Link from "next/link";

export default async function WorksPage() {
  const items = await fetchWorkItems();

  return (
    <main className="w-full bg-black text-white py-32 min-h-screen">
      <div className="w-4/5 lg:w-3/5 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold tracking-wide mb-6">
          Works
        </h1>
        <p>
          Introduce my individual projects.
        </p>
        <section className="text-gray-600 body-font">
          <div className="container pt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {items.map((item: any) => (
                <Link key={item.id} href={`/works/${item.id}`} className="md:w-1/2 p-4 flex">
                  <div className="bg-gray-100 p-4 rounded-lg flex-grow relative transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg">
                    <img className="h-auto rounded w-full object-cover object-center mb-2" src={item.img.url} alt="content" />
                    <ul>
                      <li className="inline-block bg-green-500 rounded-full px-2 py-1 text-xs font-medium text-white mr-1 mb-2">{item.category.name}</li>
                    </ul>
                    <h2 className="text-md text-gray-900 font-medium title-font mb-4">{item.name}</h2>
                    <p className="absolute bottom-2 right-2 text-sm">{new Date(item.publishedAt).toLocaleDateString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
