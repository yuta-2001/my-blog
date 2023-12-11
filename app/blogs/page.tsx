const fetchQuiitaItems = async () => {
  const res = await fetch('https://qiita.com/api/v2/authenticated_user/items?per_page=100', {
    headers: {
      'Authorization': `Bearer ${process.env.QIITA_ACCESS_TOKEN}`
    }
  });

  const data = await res.json();

  return data;
}

export default async function BlogPage() {
  const items = await fetchQuiitaItems();

  return (
    <main className="w-full bg-black text-white p-32 min-h-screen">
      <div className="w-3/4 mx-auto">
        <h1 className="text-5xl font-bold tracking-wide mb-6">
          Blogs
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {items.map((item: any) => (
                <a href={item.url} target="_blank" rel="noopener" className="md:w-1/2 p-4 flex">
                  <div className="bg-gray-100 p-4 rounded-lg flex-grow relative transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg">
                    <img className="h-auto rounded w-full object-cover object-center mb-2" src='/images/qiita.png' alt="content" />
                    <ul>
                      {item.tags.slice(0, 3).map((tag: any) => (
                        <li className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">{tag.name}</li>
                      ))}
                    </ul>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
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
