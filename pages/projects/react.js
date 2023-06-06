import React from 'react'
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import Link from 'next/link';

export default function react() {
  return (
<main className=" bg-white py-10 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
     <section className="py-10">
           <li className="w-1/4">
               <Link href="/"><p className="text-xl py-1 text-black dark:text-white cursor-pointer underline" >Home page</p></Link>
             </li>
           <h3 className="text-3xl py-10 text-center dark:text-white "><div>Project</div></h3>
          <div>
            
          <div className="text-lg text-sky-600">A platform allows solo travelers to post their upcoming travel destinations. It allows other interested travelers to join them on their trip for a short period of time.</div>
            <div className="text-lg"> I use firebase for authentication, React as frontend, React redux to manage state, and PostgreSQL in database, and Nodejs as backend.</div>
             <div className="text-lg">You can register or login, and make your posts and check all your posts.You can check the each post detail. I am going to add chat function to this app, so two
              users can contact with each other.
             </div>
             <a href ="https://neon-concha-e30ae6.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-1/4">
               <div className="text-lg cursor-point w-1/4 bg-black text-slate-100 text-center cursor-pointer py-3  m-4">Website Link</div>
              </a>
              <a href ="https://github.com/lisa-gogo/shared-room-app" target="_blank" rel="noopener noreferrer" className="w-1/4">
               <div className="text-lg cursor-point w-1/4 bg-black text-slate-100 text-center cursor-pointer py-3  m-4">Github</div>
              </a>
          </div>
            <div className="basis-1/3">
              <Image
                className="rounded-lg"
                width={"200px"}
                height={"120px"}
                layout="responsive"
                src={web1}
              />
            </div>
          <div className="text-lg text-sky-600">Second project, a platform where shows the restaurants in the US and you can search the reastaurant you want.</div>
            <div className="text-lg"> I use React as frontend, MongoDB in database, and Nodejs as backend.</div>
             <div className="text-lg"> You can login and write review for the restaurant. </div>
              <a href ="https://mellifluous-arithmetic-067e17.netlify.app/" target="_blank" rel="noopener noreferrer">
                 <div className="text-lg cursor-point bg-black text-white w-1/4 cursor-pointer py-3 m-4 text-center">Website Link</div>
              </a>
              <a href ="https://github.com/lisa-gogo/foods_review_mern_stack" target="_blank" rel="noopener noreferrer">
                 <div className="text-lg cursor-point bg-black text-white w-1/4 cursor-pointer py-3 m-4 text-center">Github</div>
              </a>
            <div>
              <Image
                className="rounded-lg object-cover"
                width={"150px"}
                height={"100px"}
                layout="responsive"
                src={web2}
              />
            </div>
      
        </section>
</main>
  )
}
