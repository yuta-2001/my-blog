import { FaLaravel, FaPython, FaReact, FaGitAlt, FaGithub, FaDocker, FaLine, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiMysql, SiMongodb, SiElastic, SiQiita, SiWantedly, SiRedis } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaSquareXTwitter, FaGolang } from "react-icons/fa6";

export default function ProfilePage() {
  return (
    <main className="w-full bg-black text-white py-24 pt-32 md:py-32 min-h-screen">
      <div className="w-11/12 lg:w-2/3 lg:max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold tracking-wide mb-6">
          Profile
        </h1>
        <section className="flex flex-wrap md:flex-nowrap items-center bg-black text-white py-8">
          <div className="w-full md:w-1/2 p-2">
            <h2 className="text-3xl font-bold mb-4">Basic Information</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Name: Yuta Sugimine</li>
              <li>Hometown: Tokyo</li>
              <li>Age: 22</li>
              <li>University: Yokohama City University</li>
              <li>Major: International Economics (Accounting)</li>
              <li>Hobbies: Football</li>
            </ul>
            <ul className="flex items-center">
              <li className="mr-4">
                <a className="cursor-pointer" href={process.env.GITHUB_URL} target="_blank" rel="noopener">
                  <FaGithub className="w-8 h-8" />
                </a>
              </li>
              <li className="mr-4">
                <a className="cursor-pointer" href={process.env.TWITTER_URL} target="_blank" rel="noopener">
                  <FaSquareXTwitter className="w-8 h-8" />
                </a>
              </li>
              <li className="mr-4">
                <a className="cursor-pointer" href={process.env.QIITA_URL} target="_blank" rel="noopener">
                  <SiQiita className="w-8 h-8" />
                </a>
              </li>
              <li className="">
                <a className="cursor-pointer" href={process.env.WANTEDLY_URL} target="_blank" rel="noopener">
                  <SiWantedly className="w-8 h-8" />
                </a>
              </li>
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
                <p className="flex items-center mb-2"><FaPython className="text-blue-600 text-2xl mr-2" /> Python (FastAPI)</p>
                <p className="flex items-center"><FaGolang className="text-blue-600 text-2xl mr-2" /> Golang</p>
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
                <p className="flex items-center mb-2"><SiRedis className="text-red-600 text-2xl mr-2" /> Redis</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Others</h3>
                <p className="flex items-center mb-2"><FaGitAlt className="text-orange-600 text-2xl mr-2" /> Git</p>
                <p className="flex items-center mb-2"><FaGithub className="text-gray-60 text-2xl mr-2" /> GitHub</p>
                <p className="flex items-center mb-2"><FaDocker className="text-blue-600 text-2xl mr-2" /> Docker</p>
                <p className="flex items-center mb-2"><FaAws className="text-orange-600 text-2xl mr-2" /> AWS (Lambda, EC2)</p>
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
            <ul className="list-disc list-inside space-y-4 text-white">
              <li className="flex items-start space-x-4">
                <div className="text-blue-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v2h2v-2zm0-8H9v6h2V5z" />
                  </svg>
                </div>
                <div>
                  <span>2022.2 - 2023.9, 2024.2 - 2024.6: <a href="https://ei-shin.com/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">EISHIN.inc</a></span>
                  <p className="text-gray-300">Web site coder and Server-Side Developer.(Long-term internship)</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="text-blue-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v2h2v-2zm0-8H9v6h2V5z" />
                  </svg>
                </div>
                <div>
                  <span>2023.7 - 2024.1: <a href="https://codecomplete.jp/ja/home/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">CodeComplete.inc</a></span>
                  <p className="text-gray-300">Server-Side and Client-Side Developer.(Long-term internship in Vietnam)</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="text-blue-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v2h2v-2zm0-8H9v6h2V5z" />
                  </svg>
                </div>
                <div>
                  <span>2024.3 - 2024.5: <a href="https://nobest.jp/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">Nobest.inc</a></span>
                  <p className="text-gray-300">Client-Side Developer.(Outsourcing)</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="text-blue-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v2h2v-2zm0-8H9v6h2V5z" />
                  </svg>
                </div>
                <div>
                  <span>2024.7 - current: <a href="https://www.hacomono.jp/" target="_blank" rel="noopener" className="text-blue-400 underline hover:text-blue-300">hacomono.inc</a></span>
                  <p className="text-gray-300">SRE Engineer.(Long-term internship)</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
