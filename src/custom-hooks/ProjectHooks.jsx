import React, { useReducer, useRef } from "react";

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

export function ProjectHooks(
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
) {
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
    // eslint-disable-next-line no-unused-vars
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
  // Todoo Message
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

  return {
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
    initial,
  };
}
