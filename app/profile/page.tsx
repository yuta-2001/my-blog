import { FaLaravel, FaPython, FaReact, FaGitAlt, FaGithub, FaDocker, FaLine } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiMysql, SiMongodb, SiElastic } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function ProfilePage() {
  return (
    <main className="w-full bg-black text-white p-32 min-h-screen">
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


        <section className="bg-black text-white py-8">
          <div className="w-full">
            <h2 className="text-3xl font-bold tracking-wide mb-6">
              Technical Skills
            </h2>
            <p className="text-md mb-6">
              I've worked on the following languages and frameworks.<br />
              My specialty is server-side development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Server-Side Languages</h3>
                <p className="flex items-center mb-2"><FaLaravel className="text-red-600 text-2xl mr-2" /> PHP (Laravel)</p>
                <p className="flex items-center"><FaPython className="text-blue-600 text-2xl mr-2" /> Python (FastAPI)</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Client-Side Languages</h3>
                <p className="flex items-center mb-2"><IoLogoJavascript className="text-yellow-600 text-2xl mr-2" /> JavaScript</p>
                <p className="flex items-center mb-2"><SiTypescript className="text-blue-600 text-2xl mr-2" /> TypeScript</p>
                <p className="flex items-center mb-2"><FaReact className="text-blue-500 text-2xl mr-2" /> React.js</p>
                <p className="flex items-center"><TbBrandNextjs className="text-white text-2xl mr-2" /> Next.js</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Middleware</h3>
                <p className="flex items-center mb-2"><SiMysql className="text-blue-700 text-2xl mr-2" /> MySQL</p>
                <p className="flex items-center mb-2"><SiMongodb className="text-green-500 text-2xl mr-2" /> MongoDB</p>
                <p className="flex items-center mb-2"><SiElastic className="text-yellow-600 text-2xl mr-2" /> Elasticsearch</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Others</h3>
                <p className="flex items-center mb-2"><FaGitAlt className="text-orange-600 text-2xl mr-2" /> Git</p>
                <p className="flex items-center mb-2"><FaGithub className="text-gray-60 text-2xl mr-2" /> GitHub</p>
                <p className="flex items-center mb-2"><FaDocker className="text-blue-600 text-2xl mr-2" /> Docker</p>
                <p className="flex items-center mb-2"><FaLine className="text-green-600 text-2xl mr-2" /> Line Messaging API・Line Frontend Framework</p>
                <p className="flex items-center"><IoLogoFirebase className="text-orange-500 text-2xl mr-2" /> Firebase etc...</p>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-black text-white py-8">
          <div className="w-full">
            <h2 className="text-3xl font-bold tracking-wide mb-6">
              Work Experience
            </h2>
            <h3 className="text-2xl font-semibold mb-4">Long-term Internships</h3>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-4">
                <span>2022年2月 - 2022年9月: <a href="https://ei-shin.com/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">株式会社EISHIN</a>でWEBサイト制作・サーバーサイド開発の長期インターンシップに参加</span>
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li><a href="https://www.bsearch.co.jp/recruit/3066/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">採用CXクラウド</a>設計〜開発 (PHP, Laravel)</li>
                  <li><a href="https://good-for-job.com/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">Good For Job</a>保守・運用 (PHP, Laravel)</li>
                  <li><a href="https://lp.rakuraku-karte.com/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">らくらくカルテ</a>保守・運用 (PHP, Laravel)</li>
                </ul>
              </li>

              <li>
                <span>2023年7月 - 2024年1月: <a href="https://codecomplete.jp/ja/home/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">株式会社CodeComplete</a>でサーバーサイド・クライアントサイド開発の長期海外インターンシップに参加</span>
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>医療系サービス<a href="https://bedycle.com/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">Bedycle</a>保守・運用 (PHP, Laravel, TypeScript, React.js)</li>
                  <li>仮想通貨取引bot<a href="https://twitter.com/FluidToken?s=20" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">Fluid GMX BOT</a>のサーバーサイド開発 (Python)</li>
                </ul>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">Short-term Internships</h3>
            <ul className="list-disc list-inside">
              <li>株式会社バンダイナムコスタジオ: Goでゲームサーバーを作るワークショップ(1 day)に参加</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
