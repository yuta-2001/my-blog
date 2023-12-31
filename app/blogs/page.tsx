import { fetchQiitaItemsFromPrisma } from '../../utils/fetch-data';

export default async function BlogPage() {
  const items = await fetchQiitaItemsFromPrisma();

  return (
    <main className="w-full bg-black text-white py-32 min-h-screen">
      <div className="w-4/5 lg:w-3/5 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold tracking-wide mb-6">
          Blogs
        </h1>
        <p>
          Introduce my technical blogs.
        </p>
        <section className="text-gray-600 body-font">
          <div className="container pt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {items.map((item: any) => (
                <a key={item.id} href={item.url} target="_blank" rel="noopener" className="md:w-1/2 p-4 flex">
                  <div className="bg-gray-100 p-4 rounded-lg flex-grow relative transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg">
                    {
                      item.og_url ? (
                        <img className="h-auto rounded w-full object-cover object-center mb-2" src={item.og_url} alt="content" />
                      ) : (
                        <img className="h-auto rounded w-full object-cover object-center mb-2" src='/images/qiita.png' alt="content" />
                      )
                    }
                    <ul>
                      {item.tags.slice(0, 3).map((tag: any) => (
                        <li key={tag} className="inline-block bg-green-500 rounded-full px-2 py-1 text-xs font-medium text-white mr-1 mb-2">{tag}</li>
                      ))}
                    </ul>
                    <h2 className="text-md text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                    <p className="absolute bottom-2 right-2 text-sm">{new Date(item.created_at).toLocaleDateString()}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
