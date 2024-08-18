import React, { useEffect, useState } from "react";
import { TextScramble } from "../util/animation";
import { Skeleton } from "primereact/skeleton";

function Default() {
  const [skeleton, setSkeleton] = useState(true);

  // animation text
  useEffect(() => {
    const el = document.querySelector(".glitchtext");

    if (el) {
      const fx = new TextScramble(el);
      let counter = 0;
      const phrases = [
        "{'Says':'Hello!'}",
        "{'Passion':'Software/Web Developer'}",
        "{'I am enjoyed':'Video games, Music, Basket ball :>.'}",
      ];

      const next = () => {
        if (phrases.length === counter + 1) {
          fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 5200);
          });
          counter = (counter + 1) % phrases.length;

          setTimeout(() => {
            el.innerHTML = `

{
    'Says': 'Hello !'
    'Passion' : 'Software/Web Developer',
    'I am enjoyed': 'Video games, Music, Basketball :>.'
}

            `;
          }, 4100);
          return;
        }

        if (phrases.length !== counter) {
          fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 3200);
          });
          counter = (counter + 1) % phrases.length;
        }
      };

      setTimeout(() => {
        next();
      }, 5000);
    }
  }, []); // Empty dependency array to run only once on mount

  useEffect(
    function () {
      setTimeout(() => {
        setSkeleton(false);
      }, 1000);
    },
    [setSkeleton]
  );

  return (
    <>
      {/* me*/}
      {skeleton && (
        <>
          <div className="flex justify-start items-center pt-10">
            <Skeleton
              width="80rem"
              height="100rem"
              className={`bg-gray-500/40`}
            />
          </div>

          <div className="flex justify-start items-center pt-10">
            <Skeleton
              width="80rem"
              height="100rem"
              className={`bg-gray-500/40 `}
            />
          </div>
        </>
      )}
      <div className="w-full h-[0rem] 2xl:h-[4rem]"></div>
      <div className="w-full 2xl:h-[4rem]"></div>
      <div
        className={`flex justify-start md:justify-center items-center  w-full font-semibold pt-[10rem] pb-[6rem] text-nowrap md:pb-[12rem] 2xl:pb-[21rem] ${
          skeleton ? "hidden" : "h-[18rem] 2xl:h-[25rem]"
        }`}
      >
        <pre className={`preCustom`}>
          <code className="glitchtext text-[16px] sm:text-[30px] md:text-[20px] 2xl:text-[30px] text-wrap mx-10 overflow-y-hidden ">{`

{
    'Says': 'Hello !'
    'Passion' : 'Software / Web Developer',
    'I am enjoyed': 'Video games, Music, Basketball :>.'
}

`}</code>
        </pre>
      </div>
      {/* skills*/}
      <div
        className={`flex justify-start md:justify-center items-center w-full font-semibold pt-[20rem] pb-[6rem] text-nowrap md:pb-[12rem] 2xl:pb-[21rem] ${
          skeleton ? "hidden" : "h-[18rem] 2xl:h-[25rem]"
        }`}
      >
        <pre
          className={`preCustom 2xl:pt-[2rem_!important] mt-[-7rem_!important] sm:mt-0`}
        >
          <code className="text-[12px] sm:text-[20px] 2xl:text-[25px] overflow-hidden">
            {`
function Skills(skills, favorite) {
    return skills instanceof Array ? 
        skills.filter(
          (skill) => 
            skill === favorite) 
    : [...skills];
}

let skills = [
    'PHP', 'LARAVEL', 
    'REACT', 'JAVASCRIPT',
    'TYPESCRIPT', 'CSS', 
    'BOOTSTRAP', 'TAILWIND',
    'WORDPRESS','SQL'
];
let favorite = 'rEAcT'.toUpperCase();

console.log(Skills(skills, favorite)); 
// Output: ['REACT']
`}
          </code>
        </pre>
      </div>
      <div className="w-full h-[0rem] 2xl:h-[0rem]"></div>
      <div className="w-full h-[0rem] 2xl:h-[0rem]"></div>
    </>
  );
}

export default Default;
