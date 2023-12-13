import { fetchWorkItem } from "../../../utils/fetch-data";
import style from "./WorkItem.module.css"

export default async function WorkDetailPage({ params }: { params: { id: string } }) {
  
  const item = await fetchWorkItem(params.id);

  return (
    <main className="w-full bg-black text-white py-32 min-h-screen">
      <div className="w-4/5 lg:w-3/5 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-6">
          {item.name}
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container pt-12 mx-auto">
            <img className="w-full mb-4" src={item.img.url} />
            <div
              className={style.description}
              dangerouslySetInnerHTML={{
                __html: item.description
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
