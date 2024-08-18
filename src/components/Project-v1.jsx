import React, { useEffect, useReducer, useRef, useState } from "react";
import { Skeleton } from "primereact/skeleton";
import { Fade } from "react-awesome-reveal";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";

function reducer(state, action) {
  let { type, payload } = action;

  switch (type) {
    case "forkify":
      return {
        ...state,
        forkify: payload,
      };
    case "bank_app":
      return {
        ...state,
        bank_app: payload,
      };
    case "guess_my_number":
      return {
        ...state,
        guess_my_number: payload,
      };
    case "mapty_oop":
      return {
        ...state,
        mapty_oop: payload,
      };
    case "role_dice":
      return {
        ...state,
        role_dice: payload,
      };
    case "eat_split":
      return {
        ...state,
        eat_split: payload,
      };
    case "far_away":
      return {
        ...state,
        far_away: payload,
      };
    case "react_quiz":
      return {
        ...state,
        react_quiz: payload,
      };
    case "use_popcorn":
      return {
        ...state,
        use_popcorn: payload,
      };
    case "atomic_blog":
      return {
        ...state,
        atomic_blog: payload,
      };
    case "fast_react_pizza":
      return {
        ...state,
        fast_react_pizza: payload,
      };
    case "worldwise":
      return {
        ...state,
        worldwise: payload,
      };
    case "calendar_remember":
      return {
        ...state,
        calendar_remember: payload,
      };
    case "blog_post":
      return {
        ...state,
        blog_post: payload,
      };
    case "todo_message":
      return {
        ...state,
        todo_message: payload,
      };
    default:
      console.log(`Unknown Action!`);
  }
}

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
  const initial = {
    forkify: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/forkify-app/add.png`,
        thumbnailImageSrc: `photos/forkify-app/add.png`,
        alt: "Forkify Add recipe",
        title: "Modal Upload New Recipe",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/forkify-app/fullpage.png`,
        thumbnailImageSrc: `photos/forkify-app/fullpage.png`,
        alt: "Forkify Full Page",
        title: "Full Page",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/forkify-app/bookmark.png`,
        thumbnailImageSrc: `photos/forkify-app/bookmark.png`,
        alt: "Forkify Bookmark",
        title: "Forkify Bookmark",
      },
    ],
    bank_app: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/bank-app/full_page.png`,
        thumbnailImageSrc: `photos/bank-app/full_page.png`,
        alt: "Bank App",
        title: "Bank App",
      },
    ],
    guess_my_number: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/guess-number/win.png`,
        thumbnailImageSrc: `photos/guess-number/win.png`,
        alt: "Guess My Number Win",
        title: "Guess My Number",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/guess-number/lost.png`,
        thumbnailImageSrc: `photos/guess-number/lost.png`,
        alt: "Guess My Number Lose",
        title: "Guess My Number",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/guess-number/welcome.png`,
        thumbnailImageSrc: `photos/guess-number/welcome.png`,
        alt: "Guess My Number Welcome Page",
        title: "Guess My Number",
      },
    ],
    mapty_oop: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/mapty-oop/welcome.png`,
        thumbnailImageSrc: `photos/mapty-oop/welcome.png`,
        alt: "Guess My Number Win",
        title: "Guess My Number",
      },
    ],
    role_dice: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/role-dice/win.png`,
        thumbnailImageSrc: `photos/role-dice/win.png`,
        alt: "Role Dice Win",
        title: "Role Dice",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/role-dice/start.png`,
        thumbnailImageSrc: `photos/role-dice/start.png`,
        alt: "Role Dice Win",
        title: "Role Dice",
      },
    ],
    eat_split: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/eat-split-bill/welcome.png`,
        thumbnailImageSrc: `photos/eat-split-bill/welcome.png`,
        alt: "Eat n Split",
        title: "Eat n Split Index",
      },
    ],
    far_away: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/far-away/welcome.png`,
        thumbnailImageSrc: `photos/far-away/welcome.png`,
        alt: "Far Away",
        title: "Far Away Index",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/far-away/completed.png`,
        thumbnailImageSrc: `photos/far-away/completed.png`,
        alt: "Far Away",
        title: "Far Away Completed",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/far-away/incomplete-package.png`,
        thumbnailImageSrc: `photos/far-away/incomplete-package.png`,
        alt: "Far Away",
        title: "Far Away Incompleted Package",
      },
    ],
    react_quiz: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/react-quiz/welcome.png`,
        thumbnailImageSrc: `photos/react-quiz/welcome.png`,
        alt: "React Quiz",
        title: "React Quiz Index",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/react-quiz/start.png`,
        thumbnailImageSrc: `photos/react-quiz/start.png`,
        alt: "React Quiz",
        title: "React Quiz Start",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/react-quiz/finished-quiz.png`,
        thumbnailImageSrc: `photos/react-quiz/finished-quiz.png`,
        alt: "React Quiz",
        title: "React Quiz Finished",
      },
    ],
    use_popcorn: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/use-popcorn/welcome.png`,
        thumbnailImageSrc: `photos/use-popcorn/welcome.png`,
        alt: "Use Popcorn",
        title: "Use Popcorn Index",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/use-popcorn/list-rating.png`,
        thumbnailImageSrc: `photos/use-popcorn/list-rating.png`,
        alt: "Use Popcorn",
        title: "Use Popcorn List Rating",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/use-popcorn/rating.png`,
        thumbnailImageSrc: `photos/use-popcorn/rating.png`,
        alt: "Use Popcorn",
        title: "Use Popcorn Rating",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/use-popcorn/searched.png`,
        thumbnailImageSrc: `photos/use-popcorn/searched.png`,
        alt: "Use Popcorn",
        title: "Use Popcorn Searched",
      },
    ],
    atomic_blog: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/atomic-blog/archive-10k-post-blog.png`,
        thumbnailImageSrc: `photos/atomic-blog/archive-10k-post-blog.png`,
        alt: "Atomic Blog 10k Post Blog",
        title: "Atomic Blog",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/atomic-blog/black-theme.png`,
        thumbnailImageSrc: `photos/atomic-blog/black-theme.png`,
        alt: "Atomic Blog Theme",
        title: "Atomic Blog Black",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/atomic-blog/white-theme.png`,
        thumbnailImageSrc: `photos/atomic-blog/white-theme.png`,
        alt: "Atomic Blog Theme",
        title: "Atomic Blog White",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/atomic-blog/searched.png`,
        thumbnailImageSrc: `photos/atomic-blog/searched.png`,
        alt: "Atomic Blog Searched",
        title: "Atomic Blog Page",
      },
    ],
    fast_react_pizza: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/fast-react-pizza/welcome.png`,
        thumbnailImageSrc: `photos/fast-react-pizza/welcome.png`,
        alt: "Fast React Pizza",
        title: "Fast React Pizza Welcome",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/fast-react-pizza/addcart.png`,
        thumbnailImageSrc: `photos/fast-react-pizza/addcart.png`,
        alt: "Fast React Pizza",
        title: "Fast React Pizza Add Cart",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/fast-react-pizza/orderpizza.png`,
        thumbnailImageSrc: `photos/fast-react-pizza/orderpizza.png`,
        alt: "Fast React Pizza",
        title: "Fast React Pizza Order Pizza",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/fast-react-pizza/oredernow.png`,
        thumbnailImageSrc: `photos/fast-react-pizza/oredernow.png`,
        alt: "Fast React Pizza",
        title: "Fast React Pizza Order Now",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/fast-react-pizza/gps.png`,
        thumbnailImageSrc: `photos/fast-react-pizza/gps.png`,
        alt: "Fast React Pizza",
        title: "Fast React Pizza Reverse Geocoding API",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/fast-react-pizza/successorder.png`,
        thumbnailImageSrc: `photos/fast-react-pizza/successorder.png`,
        alt: "Fast React Pizza",
        title: "Fast React Pizza Success Ordered",
      },
    ],
    worldwise: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/worldwise/welcome.png`,
        thumbnailImageSrc: `photos/worldwise/welcome.png`,
        alt: "Worldwise",
        title: "Worldwise Welcome",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/worldwise/login.png`,
        thumbnailImageSrc: `photos/worldwise/login.png`,
        alt: "Worldwise",
        title: "Worldwise Login",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/worldwise/worldwise-page.png`,
        thumbnailImageSrc: `photos/worldwise/worldwise-page.png`,
        alt: "Worldwise",
        title: "Worldwise Page",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/worldwise/countries.png`,
        thumbnailImageSrc: `photos/worldwise/countries.png`,
        alt: "Worldwise",
        title: "Worldwise Countries",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/worldwise/add-list.png`,
        thumbnailImageSrc: `photos/worldwise/add-list.png`,
        alt: "Worldwise",
        title: "Worldwise All List",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/worldwise/all.png`,
        thumbnailImageSrc: `photos/worldwise/all.png`,
        alt: "Worldwise",
        title: "Worldwise All",
      },
    ],
    calendar_remember: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/legend.png`,
        thumbnailImageSrc: `photos/calendar-remember/legend.png`,
        alt: "Calendar Remember legend",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/legend1.png`,
        thumbnailImageSrc: `photos/calendar-remember/legend1.png`,
        alt: "Calendar Remember legend v2",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/loader.png`,
        thumbnailImageSrc: `photos/calendar-remember/loader.png`,
        alt: "Calendar Remember loader",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/login.png`,
        thumbnailImageSrc: `photos/calendar-remember/login.png`,
        alt: "Calendar Remember Login",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/menu-profile.png`,
        thumbnailImageSrc: `photos/calendar-remember/menu-profile.png`,
        alt: "Calendar Remember Menu Profile",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/modal.png`,
        thumbnailImageSrc: `photos/calendar-remember/modal.png`,
        alt: "Calendar Remember Modal",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/profile-setting.png`,
        thumbnailImageSrc: `photos/calendar-remember/profile-setting.png`,
        alt: "Calendar Remember Profile Setting",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/register.png`,
        thumbnailImageSrc: `photos/calendar-remember/register.png`,
        alt: "Calendar Remember Register",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/searched.png`,
        thumbnailImageSrc: `photos/calendar-remember/searched.png`,
        alt: "Calendar Remember Swal",
        title: "Calendar Remember",
      },

      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/swal.png`,
        thumbnailImageSrc: `photos/calendar-remember/swal.png`,
        alt: "Calendar Remember Swal",
        title: "Calendar Remember",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/calendar-remember/welcome.png`,
        thumbnailImageSrc: `photos/calendar-remember/welcome.png`,
        alt: "Calendar Remember Welcome",
        title: "Calendar Remember",
      },
    ],
    blog_post: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/blog-post/contact.png`,
        thumbnailImageSrc: `photos/blog-post/contact.png`,
        alt: "Blog Post",
        title: "Blog Post Contact",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/blog-post/home.png`,
        thumbnailImageSrc: `photos/blog-post/home.png`,
        alt: "Blog Post",
        title: "Blog Post Home",
      },
    ],
    todo_message: [
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/todo-message/welcome.png`,
        thumbnailImageSrc: `photos/todo-message/welcome.png`,
        alt: "Todo Message",
        title: "Todo Message Welcome",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/todo-message/admin-dashboard.png`,
        thumbnailImageSrc: `photos/todo-message/admin-dashboard.png`,
        alt: "Todo Message",
        title: "Todo Message Admin Dashboard",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/todo-message/login.png`,
        thumbnailImageSrc: `photos/todo-message/login.png`,
        alt: "Todo Message",
        title: "Todo Message Login",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/todo-message/message.png`,
        thumbnailImageSrc: `photos/todo-message/message.png`,
        alt: "Todo Message",
        title: "Todo Message Message",
      },
      {
        id: crypto.randomUUID(),
        itemImageSrc: `photos/todo-message/profile-setting.png`,
        thumbnailImageSrc: `photos/todo-message/profile-setting.png`,
        alt: "Todo Message",
        title: "Todo Message Profile Setting",
      },
    ],
  };

  const [
    {
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
    },
    _,
  ] = useReducer(reducer, initial);

  // forkify
  const itemTemplateForkify = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };

  const thumbnailTemplateForkify = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };
  // bank app
  const itemTemplateBank = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateBank = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  // Guess
  const itemTemplateGuess = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateGuess = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };
  // mapty oop
  const itemTemplateMapty = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateMapty = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  // role dice
  const itemTemplateRoleDice = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateRoleDice = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  // eat n split
  const itemTemplateEatSplit = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateEatSplit = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  // far_away
  const itemTemplateFarAway = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateFarAway = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };
  useEffect(
    function () {
      setTimeout(() => {
        setSkeleton(false);
      }, 1000);
    },
    [setSkeleton]
  );
  // React Quiz
  const itemTemplateReactQuiz = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateReactQuiz = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  // use pop corn
  const itemTemplateUsePopcorn = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateUsePopcorn = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  // atomic Blog
  const itemTemplateUseAtomicBlog = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateAtomicBlog = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };
  // fast react pizza
  const itemTemplateFastReactPizza = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateFastReactPizza = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  //worldwise
  const itemTemplateWorldwise = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        className="h-full sm:h-full"
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateWorldwise = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };
  //calendar remember
  const itemTemplateCalendarRemember = (item) => {
    return (
      <img
        src={item?.itemImageSrc}
        className="h-full sm:h-full"
        alt={item?.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateCalendarRemember = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };
  // blog post
  const itemTemplateBlogPost = (item) => {
    return (
      <img
        src={item?.itemImageSrc}
        className="h-full sm:h-full"
        alt={item?.alt}
        style={{ width: "100%" }}
      />
    );
  };

  const thumbnailTemplateBlogPost = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };
  // blog post
  const itemTemplateTodoMessage = (item) => {
    return (
      <img
        src={item?.itemImageSrc}
        className="h-full sm:h-full"
        alt={item?.alt}
        style={{ width: "100%" }}
      />
    );
  };
  const thumbnailTemplateTodoMessage = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };
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
          <div className="flex justify-start items-center px-14 md:mt-[-80rem_!important] md:w-[800px] 2xl:w-[1075px] md:ms-[-3.3rem_!important] 2xl:mt-[-40rem_!important] 2xl:ms-[-3.5rem_!important] ">
            <Skeleton
              width="80rem"
              height="100rem"
              className={`bg-gray-500/40`}
            />
          </div>
          <div className="flex justify-start items-center px-14 md:mt-[1rem_!important] md:w-[800px] 2xl:w-[1075px] md:ms-[-3.3rem_!important] 2xl:mt-[-40rem_!important] 2xl:ms-[-3.5rem_!important] ">
            <Skeleton
              width="80rem"
              height="100rem"
              className={`bg-gray-500/40 `}
            />
          </div>
          <div className="h-[10rem]"></div>
          <div className="h-[10rem]"></div>
        </>
      )}
      <div className="2xl:h-[11rem] "></div>
      <div className="2xl:h-[11rem] "></div>
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
                reaches 100 points, they automatically win.
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
                You either owe or are owed by your friend. Avatars are
                automatically generated randomly using an API.
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
                <strong>{`11 -> Fast React Pizza (Order Online)`}</strong>
              </h3>
            </li>
            <li className="sub-cat">
              <div className="text-xs sm:text-md text-wrap p-3 italic font-semibold">
                Project Overview:
              </div>
              <h4 className="text-sm sm:text-md text-wrap">
                This page allows you to order online from a pizza restaurant. We
                can automatically get your location or you can manually input
                it. The UI is responsive, and this page is a Single Page
                Application. You can input your name, which is then corrected to
                ensure faster delivery.
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used: {`[RESPONSIVE ALL MOBILE / LAPTOP / DESKTOP]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React Typescript, HTML, CSS, Advanced JSON, REACT ROUTER DOM, LAZY LOAD, TAILWIND, REACT REDUX,CONTEXT API`}
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
                location or manually input it (REGISTER and PROFILE SETTING). We
                offer profile photo uploads, as well as login and registration
                features. This project is a Single Page Application (SPA REACT
                JS LARAVEL).
              </h4>
            </li>
            <li className="sub-cat">
              <p className="text-sm sm:text-md text-wrap p-3 italic font-semibold">
                Technology Used:{" "}
                {`[ALL DESKTOP / MOBILE / LAPTOP / VIEW VERSION]`}
              </p>
              <h4 className="text-sm sm:text-md text-wrap p-3">
                {`Advanced React JS, HTML, CSS, Advanced JSON, REACT ROUTER DOM, LAZY LOAD, ADVANCED Tailwind, REACT REDUX, CONTEXT API, Laravel 10, PRIME REACT COMPONENT REACT, AXIOS, ADVANCED FETCH API CUSTOM, ADVANCED HELPER JS,TIPPY JS,REACT SELECT,SWEET ALERT2,EXPORT JSPDF, ADVANCED DATE RANGE PICKER,FULL CALENDAR V6, XLSX (EXCEL),CSV, VITE JS,SINGLE PAGE APPLICATION, ADVANCED LOADER COMPONENT`}
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
                advertisement or Content Management System (CMS) showcasing
                travel businesses. We also have a contact page and a services
                section.
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
                about new technology releases. We also provide authentication
                and high security for your account, whether you are logging in
                or registering.
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
    </>
  );
}

export default Project;
