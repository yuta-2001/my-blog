import { FaLaravel, FaPython, FaReact, FaGitAlt, FaGithub, FaDocker, FaLine, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiMysql, SiMongodb, SiElastic, SiQiita, SiWantedly, SiRedis, SiSnowflake, SiKubernetes } from "react-icons/si";
import { TbBrandNextjs, TbBrandTerraform } from "react-icons/tb";
import { FaSquareXTwitter, FaGolang } from "react-icons/fa6";

export default function ProfilePage() {
  return (
    <main className="w-full bg-black text-white py-24 pt-32 md:py-32 min-h-screen">
      <div className="w-11/12 lg:w-2/3 lg:max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold tracking-wide mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text text-center">
          Profile
        </h1>
        <section className="flex flex-wrap md:flex-nowrap items-start bg-black text-white py-8 relative">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-start items-start mb-8 md:mb-0 p-4">
            <div className="relative w-full">
              <div className="aspect-square overflow-hidden rounded-3xl border-4 border-slate-800 shadow-2xl">
                <img src="/images/profile.jpg" alt="profile image" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 shadow-xl">
                <p className="text-lg font-bold">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="w-full md:w-1/2 p-4 md:pl-12">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Basic Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="font-bold text-lg">Yuta Sugimine</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-bold text-lg">Tokyo</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Age</p>
                    <p className="font-bold text-lg">23</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">University</p>
                    <p className="font-bold text-lg">Yokohama City University</p>
                    <p className="text-sm text-gray-400">International Economics (Accounting)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Hobbies</p>
                    <p className="font-bold text-lg">Football</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 p-6 bg-slate-800/30 rounded-2xl">
                <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                <ul className="flex items-center space-x-6">
                  <li>
                    <a className="cursor-pointer transform hover:scale-110 transition-transform duration-200 block" href={process.env.GITHUB_URL} target="_blank" rel="noopener">
                      <FaGithub className="w-8 h-8 text-white hover:text-blue-400" />
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer transform hover:scale-110 transition-transform duration-200 block" href={process.env.TWITTER_URL} target="_blank" rel="noopener">
                      <FaSquareXTwitter className="w-8 h-8 text-white hover:text-blue-400" />
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer transform hover:scale-110 transition-transform duration-200 block" href={process.env.QIITA_URL} target="_blank" rel="noopener">
                      <SiQiita className="w-8 h-8 text-white hover:text-blue-400" />
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer transform hover:scale-110 transition-transform duration-200 block" href={process.env.WANTEDLY_URL} target="_blank" rel="noopener">
                      <SiWantedly className="w-8 h-8 text-white hover:text-blue-400" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-black text-white py-8">
          <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-wide mb-10 text-center">
              Technical Skills
            </h2>
            <p className="text-md mb-10 text-center text-gray-300 max-w-2xl mx-auto">
              I've worked on the following languages and frameworks.<br />
              My specialty is server-side development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Server-Side Languages */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5l10-10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">Server-Side Languages</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <FaLaravel className="text-red-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">PHP (Laravel)</p>
                      <p className="text-sm text-gray-400">Web Application Framework</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <FaPython className="text-blue-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">Python (FastAPI)</p>
                      <p className="text-sm text-gray-400">Modern API Framework</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <FaGolang className="text-blue-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">Golang</p>
                      <p className="text-sm text-gray-400">High-Performance Systems</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client-Side Languages */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 text-transparent bg-clip-text">Client-Side Languages</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <IoLogoJavascript className="text-yellow-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">JavaScript</p>
                      <p className="text-sm text-gray-400">Core Web Technology</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <SiTypescript className="text-blue-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">TypeScript</p>
                      <p className="text-sm text-gray-400">Type-Safe Development</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <FaReact className="text-blue-400 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">React.js</p>
                      <p className="text-sm text-gray-400">UI Component Library</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <TbBrandNextjs className="text-white text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">Next.js</p>
                      <p className="text-sm text-gray-400">React Framework</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Databases & Search */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm12 9v-3c0-2-1.5-3-3.5-3S9 11 9 13" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-200 text-transparent bg-clip-text">Databases & Search</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <SiMysql className="text-blue-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">MySQL</p>
                      <p className="text-sm text-gray-400">Relational Database</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <SiMongodb className="text-green-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">MongoDB</p>
                      <p className="text-sm text-gray-400">NoSQL Database</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <SiElastic className="text-yellow-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">Elasticsearch</p>
                      <p className="text-sm text-gray-400">Search Engine</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <SiRedis className="text-red-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">Redis</p>
                      <p className="text-sm text-gray-400">In-Memory Database</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <SiSnowflake className="text-blue-300 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">Snowflake</p>
                      <p className="text-sm text-gray-400">Data Warehouse</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Infrastructure */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 text-transparent bg-clip-text">Tools & Infrastructure</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                      <FaGitAlt className="text-orange-500 text-3xl mr-3" />
                      <p className="font-semibold">Git</p>
                    </div>
                    <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                      <FaGithub className="text-white text-3xl mr-3" />
                      <p className="font-semibold">GitHub</p>
                    </div>
                    <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                      <FaDocker className="text-blue-500 text-3xl mr-3" />
                      <p className="font-semibold">Docker</p>
                    </div>
                    <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                      <SiKubernetes className="text-blue-500 text-3xl mr-3" />
                      <p className="font-semibold">Kubernetes</p>
                    </div>
                    <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                      <FaAws className="text-orange-500 text-3xl mr-3" />
                      <p className="font-semibold">AWS</p>
                    </div>
                    <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                      <TbBrandTerraform className="text-purple-500 text-3xl mr-3" />
                      <p className="font-semibold">Terraform</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <FaLine className="text-green-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">Line Messaging API</p>
                      <p className="text-sm text-gray-400">Line Frontend Framework</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <IoLogoFirebase className="text-orange-500 text-3xl mr-4" />
                    <div>
                      <p className="font-semibold">Firebase</p>
                      <p className="text-sm text-gray-400">Backend as a Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-black text-white py-8">
          <div className="w-full">
            <h2 className="text-3xl font-bold tracking-wide mb-10 text-center">
              Work Experience
            </h2>
            <div className="relative max-w-7xl mx-auto px-4">
              {/* Vertical timeline line */}
              <div className="absolute left-[20%] h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* CyberAgent */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="absolute left-[20%] w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 border-4 border-black z-10"></div>
                  <div className="w-[20%] pr-8 pt-1 text-right">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block">2025 - Present</div>
                  </div>
                  <div className="flex-1 pl-8">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-lg shadow-xl w-full relative">
                      <div className="absolute -top-4 left-0 bg-blue-700 text-xs text-white px-3 py-1 rounded-full">Latest Position</div>
                      <h3 className="text-xl font-bold mb-2">CyberAgent.inc</h3>
                      <p className="text-gray-200 text-sm mb-4">
                        An internet company based in Shibuya, Tokyo, providing diverse services including gaming, advertising, and media.
                      </p>
                      <div className="space-y-4">
                        <div className="border-l-2 border-blue-300 pl-3">
                          <p className="font-semibold flex items-center">
                            <span className="bg-blue-700 w-2 h-2 rounded-full mr-2"></span>
                            AMoAD
                            <span className="text-sm ml-2 text-blue-200">(2025.5 - Present)</span>
                          </p>
                          <p className="text-sm text-gray-300">Server-Side Engineer for advertising ad network service</p>
                        </div>
                        <div className="border-l-2 border-blue-300 pl-3">
                          <p className="font-semibold flex items-center">
                            <span className="bg-blue-700 w-2 h-2 rounded-full mr-2"></span>
                            Dynalyst
                            <span className="text-sm ml-2 text-blue-200">(2025.2 - 2025.3)</span>
                          </p>
                          <p className="text-sm text-gray-300">Server-Side & Infrastructure Engineer for RTB DSP server</p>
                        </div>
                        <div className="border-l-2 border-blue-300 pl-3">
                          <p className="font-semibold flex items-center">
                            <span className="bg-blue-700 w-2 h-2 rounded-full mr-2"></span>
                            Tapple.inc
                            <span className="text-sm ml-2 text-blue-200">(2025.1)</span>
                          </p>
                          <p className="text-sm text-gray-300">Server-Side Engineer for dating matching service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* hacomono */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="absolute left-[20%] w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2 border-4 border-black z-10"></div>
                  <div className="w-[20%] pr-8 pt-1 text-right">
                    <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block">2024.7 - 2025.3</div>
                  </div>
                  <div className="flex-1 pl-8">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-8 rounded-lg shadow-xl w-full">
                      <h3 className="text-xl font-bold mb-2">hacomono.inc</h3>
                      <p className="text-gray-200 text-sm mb-4">
                        A wellness tech startup company based in Shibuya, Tokyo.
                      </p>
                      <div className="border-l-2 border-purple-300 pl-3">
                        <p className="font-semibold flex items-center">
                          <span className="bg-purple-700 w-2 h-2 rounded-full mr-2"></span>
                          SRE Engineer
                        </p>
                        <p className="text-sm text-gray-300">Long-term internship</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nobest */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="absolute left-[20%] w-6 h-6 bg-green-500 rounded-full transform -translate-x-1/2 border-4 border-black z-10"></div>
                  <div className="w-[20%] pr-8 pt-1 text-right">
                    <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block">2024.3 - 2024.5</div>
                  </div>
                  <div className="flex-1 pl-8">
                    <div className="bg-gradient-to-r from-green-600 to-green-400 p-8 rounded-lg shadow-xl w-full">
                      <h3 className="text-xl font-bold mb-2">Nobest.inc</h3>
                      <p className="text-gray-200 text-sm mb-4">
                        An IoT tech startup company based in Kanagawa.
                      </p>
                      <div className="border-l-2 border-green-300 pl-3">
                        <p className="font-semibold flex items-center">
                          <span className="bg-green-700 w-2 h-2 rounded-full mr-2"></span>
                          Client-Side Developer
                        </p>
                        <p className="text-sm text-gray-300">Outsourcing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CodeComplete */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="absolute left-[20%] w-6 h-6 bg-red-500 rounded-full transform -translate-x-1/2 border-4 border-black z-10"></div>
                  <div className="w-[20%] pr-8 pt-1 text-right">
                    <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block">2023.7 - 2024.1</div>
                  </div>
                  <div className="flex-1 pl-8">
                    <div className="bg-gradient-to-r from-red-600 to-red-400 p-8 rounded-lg shadow-xl w-full">
                      <h3 className="text-xl font-bold mb-2">CodeComplete.inc</h3>
                      <p className="text-gray-200 text-sm mb-4">
                        A web development company based in Tokyo.
                      </p>
                      <div className="border-l-2 border-red-300 pl-3">
                        <p className="font-semibold flex items-center">
                          <span className="bg-red-700 w-2 h-2 rounded-full mr-2"></span>
                          Server-Side and Client-Side Developer
                        </p>
                        <p className="text-sm text-gray-300">Long-term internship in Vietnam</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EISHIN */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="absolute left-[20%] w-6 h-6 bg-yellow-500 rounded-full transform -translate-x-1/2 border-4 border-black z-10"></div>
                  <div className="w-[20%] pr-8 pt-1 text-right">
                    <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block">2022.2 - 2024.6</div>
                  </div>
                  <div className="flex-1 pl-8">
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 p-8 rounded-lg shadow-xl w-full">
                      <h3 className="text-xl font-bold mb-2">EISHIN.inc</h3>
                      <p className="text-gray-200 text-sm mb-4">
                        HR tech startup company based in Meguro, Tokyo.
                      </p>
                      <div className="border-l-2 border-yellow-300 pl-3">
                        <p className="font-semibold flex items-center">
                          <span className="bg-yellow-700 w-2 h-2 rounded-full mr-2"></span>
                          Web site coder and Server-Side Developer
                        </p>
                        <p className="text-sm text-gray-300">Long-term internship</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
