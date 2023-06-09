import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" :""}>
      
            <main className=" whiteBg  px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                   <section className="">
                      <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="font-burtons text-xl">Hey ! Nice to meet you </h1>
                        <ul className="flex items-center">
                          <li>
                            <a className="cursor-point text-4xl px-4 mr-11" href ="https://www.youtube.com/@lisali6205/videos" target="_blank" rel="noopener noreferrer"> 
                            <AiFillYoutube /> 
                          </a>
                          </li>
                          <li>
                            <a className="cursor-point text-4xl px-4 mr-11" href ="https://github.com/lisa-gogo" target="_blank" rel="noopener noreferrer"> 
                            <AiFillGithub /> 
                          </a>
                          </li>
                          <li>
                            <BsFillMoonStarsFill
                              onClick={() => setDarkMode(!darkMode)}
                              className=" cursor-pointer text-2xl"
                            />
                          </li>
                          <li>
                            <a
                              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                              href="https://docs.google.com/document/d/1H5xasVKDgAaJQdJywySmGMizgCMDUi8d/edit?usp=sharing&ouid=112025776230213363999&rtpof=true&sd=true"
                            >
                              Resume
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <div className="text-center p-10 py-10">
                        <h2 className=" text-base  text-sky-500 font-medium dark:text-sky-500 md:text-3xl">
                          Junyi Li
                        </h2>
                        <h3 className="text-xl py-2 text-pink-500 dark:text-pink-500 md:text-2xl">
                          Developer
                        </h3>
                        <li className="w-1/4 buttonContainer">
                          <Link className="myProjectButton" href="/projects/react"><p className="myProjectButton">
                            <span>
                              My Projects
                            </span></p></Link>
                        </li>
                      </div>
                    </section>
                   
                    <section>
                      <div>
                        <h3 className="text-3xl py-1 dark:text-white ">My experience</h3>
                      </div>
                    
                      <div className="text-xl py-1 text-blue-600">Future Fintech Labs (ftft)--AWS Cloud Certified Practitioner </div>
                      <div className="text-lg text-fuchsia-700">Software Developer Intern (Full-time On-Site) Feb 2022 - Jan 2023</div>
                      <div className="dark:text-white">* Experience in building web and mobile applications with HTML, CSS, JavaScript, ReactJS, React Native, Redux and Node.js. </div>
                      <div className="dark:text-white">* Experience in creating modern, interactive, client-facing UI with HTML/HTML5, CSS/CSS3 and JavaScript/ES6/JSON/DOM/Bootstrap.</div>
                      <div className="dark:text-white">* Experience in REST APIs, Promise and Async/Await to connect, fetch data from and send data to the server.</div>
                      <div className="dark:text-white">* Experience with backend development with Rest API, AWS lambda, API gateway, DynamoDB</div>
                      <div className="dark:text-white">* Experience in debugging and troubleshooting with the help of different debugging tools, such as React Detox and familiar with front-end unit test tools such as Mocha and Chai</div>
                      <div className="dark:text-white">* Experience with Firebase mobile tools </div>
                      <div className="text-xl py-1 text-blue-600">United Software Corporation</div>
                      <div className="text-lg text-fuchsia-700"> Trainee (Full-time) August 2021 - Nov 2021</div>
                      <div className="dark:text-white">* Experience in HTML, CSS, JavaScript and React </div>
                      <div className="dark:text-white">* Done many javascript and React projects, such as movie list, autocomplete, complex todoList</div>
                      <div className="dark:text-white">* Proficient in DOM manipulation</div>
                      <div className="dark:text-white">* Get used to React Hooks, especially useState and useEffect</div>
                      <div className="dark:text-white">* Experience in making React components, such as class component and function component</div>
                      <div className="dark:text-white">* Learning some thing about React Redux and Redux store</div>
                      <div className="bubbles">
                            <span style={{animationDuration:'8s'}}></span>
                            <span style={{animationDuration:'4s'}}></span>
                            <span style={{animationDuration:'6s'}}></span>
                            <span style={{animationDuration:'7s'}}></span>
                            <span style={{animationDuration:'10s'}}></span>
                            <span style={{animationDuration:'12s'}}></span>
                            <span style={{animationDuration:'8s'}} ></span>
                            <span style={{animationDuration:'9s'}}></span>
                            <span style={{animationDuration:'15s'}}></span>
                            <span style={{animationDuration:'5s'}}></span>
                            <span style={{animationDuration:'12s'}}></span>
                            <span style={{animationDuration:'11s'}}></span>
                            <span style={{animationDuration:'10s'}}></span>
                            <span style={{animationDuration:'12s'}}></span>
                            <span style={{animationDuration:'11s'}}></span>
                            <span style={{animationDuration:'13s'}}></span>
                            <span style={{animationDuration:'9'}}></span>
                            <span style={{animationDuration:'6s'}}></span>
                            <span style={{animationDuration:'11s'}}></span>
                            <span style={{animationDuration:'12s'}}></span>
                            <span style={{animationDuration:'7s'}}></span>
                            <span style={{animationDuration:'8s'}}></span>
                            <span style={{animationDuration:'9s'}}></span>
                            <span style={{animationDuration:'6s'}}></span>
                            <span style={{animationDuration:'12s'}}></span>
                            <span style={{animationDuration:'7s'}}></span>
                        </div>
                      <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                          <Image src={design} width={100} height={100} />
                          <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 ">
                            Backend Services 
                          </h3>
                          <p className="text-gray-800 py-1">AWS lambda REST API</p>
                          <p className="text-gray-800 py-1">Nodejs</p>
                          <p className="text-gray-800 py-1">A little Spring Boot</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                          <Image src={code} width={100} height={100} />
                          <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 ">
                            Frontend
                          </h3>
                        
                          <h4 className="py-1">React web</h4>
                          <p className="text-gray-800 py-1">React mobile</p>
                          <p className="text-gray-800 py-1">Pure Javascript</p>
              
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                          <Image src={consulting} width={100} height={100} />
                          <h3 className="text-lg font-medium pt-8 pb-2 ">Database</h3>
                          <h4 className="py-4">PostgreSQL</h4>
                          <p className="text-gray-800 py-1">Dynamodb</p>
                          
                        </div>
                      </div>
                    </section>
                
                  
                 
                
            </main>
     
     
      
    </div>
  );
}
