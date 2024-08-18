import React, { useEffect, useReducer, useRef, useState } from "react";
import { Skeleton } from "primereact/skeleton";
import { Fade } from "react-awesome-reveal";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { ProjectHooks } from "../custom-hooks/ProjectHooks";

function Project() {
  const [skeleton, setSkeleton] = useState(true);
  const galleriaForkify = useRef(null);
  const galleriaBank = useRef(null);
  const galleriaGuess = useRef(null);
  const galleriaMapty = useRef(null);
  const galleriaRoleDice = useRef(null);
  const galleriaEatSplit = useRef(null);
  const galleriaFarAway = useRef(null);
  const galleriaReactQuiz = useRef(null);
  const galleriaUsePopcorn = useRef(null);
  const galleriaAtomicBlog = useRef(null);
  const galleriaFastReactPizza = useRef(null);
  const galleriaWorldWise = useRef(null);
  const galleriaCalendarRemember = useRef(null);
  const galleriaBlogPost = useRef(null);
  const galleriaTodoMessage = useRef(null);
  const {
    forkify,
    bank_app,
    guess_my_number,
    mapty_oop,
    role_dice,
    eat_split,
    far_away,
    react_quiz,
    use_popcorn,
    atomic_blog,
    fast_react_pizza,
    worldwise,
    calendar_remember,
    blog_post,
    todo_message,
    itemTemplateForkify,
    thumbnailTemplateForkify,
    itemTemplateBank,
    thumbnailTemplateBank,
    itemTemplateGuess,
    thumbnailTemplateGuess,
    itemTemplateMapty,
    thumbnailTemplateMapty,
    itemTemplateRoleDice,
    thumbnailTemplateRoleDice,
    itemTemplateEatSplit,
    thumbnailTemplateEatSplit,
    itemTemplateFarAway,
    thumbnailTemplateFarAway,
    itemTemplateReactQuiz,
    thumbnailTemplateReactQuiz,
    itemTemplateUsePopcorn,
    thumbnailTemplateUsePopcorn,
    itemTemplateUseAtomicBlog,
    thumbnailTemplateAtomicBlog,
    itemTemplateFastReactPizza,
    thumbnailTemplateFastReactPizza,
    itemTemplateWorldwise,
    thumbnailTemplateWorldwise,
    itemTemplateCalendarRemember,
    thumbnailTemplateCalendarRemember,
    itemTemplateBlogPost,
    thumbnailTemplateBlogPost,
    itemTemplateTodoMessage,
    thumbnailTemplateTodoMessage,
  } = ProjectHooks(
    galleriaForkify,
    galleriaBank,
    galleriaGuess,
    galleriaMapty,
    galleriaRoleDice,
    galleriaEatSplit,
    galleriaFarAway,
    galleriaReactQuiz,
    galleriaUsePopcorn,
    galleriaAtomicBlog,
    galleriaFastReactPizza,
    galleriaWorldWise,
    galleriaCalendarRemember,
    galleriaBlogPost,
    galleriaTodoMessage
  ); // custom hooks

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
      {skeleton && (
        <>
          {Array.from({ length: 18 }).map((_, index) => {
            return (
              <div key={index}>
                <div className="flex justify-start items-center px-14 md:mt-[1rem_!important] md:w-[800px] 2xl:w-[1020px] md:ms-[-3.3rem_!important] 2xl:mt-[0.50rem_!important] 2xl:ms-[-3.5rem_!important] ">
                  <Skeleton
                    width="80rem"
                    height="100rem"
                    className={`bg-gray-500/40`}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
      <div className="mt-[5rem] 2xl:mt-0 h-[2rem]"></div>
      <div className="mt-[5rem] 2xl:mt-0 h-[2rem]"></div>

      <Fade direction="left" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`01 -> Forkify App`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This project involves creating a pizza search, bookmarking
                feature, pagination, and a photo list using an API.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Vanilla JavaScript (ES6+) with OOP, HTML, CSS`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaForkify.current.show()}
              />
              <Galleria
                ref={galleriaForkify}
                value={forkify}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateForkify}
                thumbnail={thumbnailTemplateForkify}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="right" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`02 -> Single Page Bank App`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This project was about depositing money, handling loans, closing
                or deleting accounts, showing all transactions in a list, and
                displaying currency.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Vanilla JavaScript (ES6+) with OOP, HTML, CSS, JSON`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaBank.current.show()}
              />
              <Galleria
                ref={galleriaBank}
                value={bank_app}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateBank}
                thumbnail={thumbnailTemplateBank}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="left" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`03 -> Guess My Number`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This project was simple game, if you get the correct number
                between 1 and 200. You Won.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW / TABLET VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Vanilla JavaScript (ES6+), HTML, CSS`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaGuess.current.show()}
              />
              <Galleria
                ref={galleriaGuess}
                value={guess_my_number}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateGuess}
                thumbnail={thumbnailTemplateGuess}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="right" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`04 -> Mapty Oop`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This project is based on your GPS location, allowing you to tap
                or click to choose your place. It also tracks how far you go by
                walking, running, or cycling.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Vanilla JavaScript (ES6+), HTML, CSS, LEAFLET JS`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaMapty.current.show()}
              />
              <Galleria
                ref={galleriaMapty}
                value={mapty_oop}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateMapty}
                thumbnail={thumbnailTemplateMapty}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="left" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`05 -> Role Random Dice App`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This is a game with two players. If any player wins, the
                background changes to black to indicate the victory. If a player
                reaches 100 points, they automatic win.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Vanilla JavaScript (ES6+), HTML, CSS`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaRoleDice.current.show()}
              />
              <Galleria
                ref={galleriaRoleDice}
                value={role_dice}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateRoleDice}
                thumbnail={thumbnailTemplateRoleDice}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="right" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`06 -> Eat 'N Split Billing App`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page calculates your bills with your friends or parents.
                You either owe or are owed by your friend. Avatars are automatic
                generated randomly using an API.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React Typescript, HTML, CSS`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaEatSplit.current.show()}
              />
              <Galleria
                ref={galleriaEatSplit}
                value={eat_split}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateEatSplit}
                thumbnail={thumbnailTemplateEatSplit}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="left" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`07 -> Far Away Travel App`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page lists your packages as you travel anywhere. If all
                your packages are accounted for, it's a reminder not to forget
                other items in a distant location.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React Typescript, HTML, CSS`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaFarAway.current.show()}
              />
              <Galleria
                ref={galleriaFarAway}
                value={far_away}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateFarAway}
                thumbnail={thumbnailTemplateFarAway}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="right" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`08 -> React Quiz`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page is for educational purposes, featuring a simple quiz
                with a timer and an amazing theme.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React Typescript, HTML, CSS, Advanced JSON, Advanced React Hooks`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaReactQuiz.current.show()}
              />
              <Galleria
                ref={galleriaReactQuiz}
                value={react_quiz}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateReactQuiz}
                thumbnail={thumbnailTemplateReactQuiz}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="left" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`09 -> Use Popcorn [API MOVIES]`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page allows you to search for movies and displays
                additional details such as the author or director, as well as
                your rating for the movie.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React Typescript, HTML, CSS, Advanced JSON, Omdbapi, Advanced React Hooks`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaUsePopcorn.current.show()}
              />
              <Galleria
                ref={galleriaUsePopcorn}
                value={use_popcorn}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateUsePopcorn}
                thumbnail={thumbnailTemplateUsePopcorn}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="right" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`10 -> Atomig Blog [LOADED FASTEST 10K LISTS BLOG POST]`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page can handle 10,000 or more blog posts and load a large
                amount of data in seconds. It features search, adding blog
                posts, and archiving posts. It's an amazing advanced Vite React
                TypeScript project.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP/ TABLET / IPAD VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React Typescript, HTML, CSS, Advanced JSON, Advanced React Hooks, Advanced React UseMemo`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaAtomicBlog.current.show()}
              />
              <Galleria
                ref={galleriaAtomicBlog}
                value={atomic_blog}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateUseAtomicBlog}
                thumbnail={thumbnailTemplateAtomicBlog}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="left" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`11 -> Fast React Pizza (Order Online - SPA)`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page allows you to order online from a pizza restaurant. We
                can automatic get your location or you can manually input it. UI
                is responsive. You can input your name, which is then corrected
                to ensure faster delivery.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[RESPONSIVE ALL MOBILE / LAPTOP / DESKTOP]`}
              </p>
              <h4 className="text-[10px] sm:text-[10px] text-wrap p-3">
                {`Advanced React Typescript, JSON, REACT ROUTER DOM, LAZY LOAD, TAILWIND, REACT REDUX TOOLKIT`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaFastReactPizza.current.show()}
              />
              <Galleria
                ref={galleriaFastReactPizza}
                value={fast_react_pizza}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateFastReactPizza}
                thumbnail={thumbnailTemplateFastReactPizza}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="right" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`12 -> World Wise`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                On this page, you can bookmark places you want to visit or add
                them to your travel bucket list for all countries.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[DESKTOP VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React Typescript, HTML, CSS, Advanced JSON, REACT ROUTER DOM, LAZY LOAD, Advanced Modular CSS Module, REACT REDUX, CONTEXT API`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaWorldWise.current.show()}
              />
              <Galleria
                ref={galleriaWorldWise}
                value={worldwise}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateWorldwise}
                thumbnail={thumbnailTemplateWorldwise}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="left" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[45rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`13 -> Calendar Remember (SPA) LARAVEL-REACT`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                On this page, you can set a schedule, task, or anything you need
                to remember. The Table Mode is an advanced list table that
                allows you to search in seconds. You can also add your current
                location or manually input it REGISTER and PROFILE SETTING. We
                offer profile photo uploads, as well as login and registration
                features. This project is a Single Page Application SPA REACT JS
                LARAVEL.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used:{" "}
                {`[ALL DESKTOP / MOBILE / LAPTOP / VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React JS, HTML, CSS, Advanced JSON, REACT ROUTER DOM, LAZY LOAD, ADVANCED Tailwind, REACT REDUX, CONTEXT API, Laravel 10, PRIME REACT COMPONENT, AXIOS,TIPPY JS,REACT SELECT,SWEET ALERT2, EXPORT JSPDF, FULL CALENDAR V6 ,XLSX EXCEL, CSV, VITE JS ,SPA`}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaCalendarRemember.current.show()}
              />
              <Galleria
                ref={galleriaCalendarRemember}
                value={calendar_remember}
                numVisible={11}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateCalendarRemember}
                thumbnail={thumbnailTemplateCalendarRemember}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="right" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[45rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`14 -> BLOG POST NATURE - CMS`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page, built in WordPress using PHP, functions like an
                advertise / Content Management System (CMS) showcasing travel
                businesses. We also have a contact page and a services section.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used:{" "}
                {`[ALL DESKTOP / MOBILE / LAPTOP / VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`WORDPRESS, PHP, ASTRA THEME, ELEMENTOR, TABLESOME, ADMIN DASHBOARD `}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaBlogPost.current.show()}
              />
              <Galleria
                ref={galleriaBlogPost}
                value={blog_post}
                numVisible={11}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateBlogPost}
                thumbnail={thumbnailTemplateBlogPost}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade direction="left" delay={500}>
        <div className="view-project pt-4 flex justify-center items-center border border-blue-400 rounded-[40px] 2xl:h-[30rem] px-10 pb-10">
          <ul className="filter-box ">
            <li className="main-cat">
              <h3 className="text-sm sm:text-md text-wrap">
                <strong>{`15 -> Todo Message`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page allows users to post messages or comments publicly,
                similar to Facebook. The system lets you share thoughts or ideas
                about new technology releases.We also provide auth and high
                security for your account, whether you are logging in or
                registering.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used:
                {`[ALL DESKTOP / MOBILE / LAPTOP / VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`WORDPRESS, PHP, ASTRA THEME, ELEMENTOR, WPF FORMS, LOGIN WP,LOGIN ULTIMATE MEMBER, ADMIN DASHBOARD `}
              </h4>
            </li>
            <li className="main-cat ">
              <Button
                label="Click Picture(s) ..."
                icon="pi pi-external-link"
                onClick={() => galleriaTodoMessage.current.show()}
              />
              <Galleria
                ref={galleriaTodoMessage}
                value={todo_message}
                numVisible={5}
                style={{ maxWidth: "70%" }}
                circular
                fullScreen
                showItemNavigators
                showThumbnails={false}
                item={itemTemplateTodoMessage}
                thumbnail={thumbnailTemplateTodoMessage}
              />
            </li>
          </ul>
        </div>
      </Fade>
      <div></div>
    </>
  );
}

export default Project;
