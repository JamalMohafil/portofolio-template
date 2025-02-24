export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 1,
    title:
      "I focus on building strong client relationships through transparent and effective communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/team_collaboration_meeting.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
];

export const projects = [
  {
    id: 1,
    title: "Tasks Management & Chat Applcation",
    des: "A powerful app for managing tasks and real-time communication, combining efficiency with seamless collaboration.",
    img: "/projects/chat.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
      "https://www.subinoy.me/techstack/nodejs.svg",

      "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    ],
    link: "https://www.youtube.com/watch?v=WmzoDU9IKaU&ab_channel=JamalMohafil",
  },

  {
    id: 3,
    title: "Orkide Tech Landing Page",
    des: "A modern and responsive website for Orkide Technology, featuring an elegant design and seamless user experience.",
    img: "/projects/1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://orkide-technology.vercel.app/",
  },
  {
    id: 4,
    title: "Have a Look Landing Page",
    des: "A stylish landing page for a Turkish furniture company, showcasing elegant designs and advanced features.",
    img: "/projects/2.png",
    iconLists: ["/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://www.linkedin.com/posts/jamal-mohafil_nextjs-expressjs-mongodb-activity-7279202478900805632-Xr9u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_nuWYBsn7mMFl6zrFGlH9y5Wv5Szi4V2k",
  },
  {
    id: 2,
    title: "Goving Digital Store",
    des: "Goving Store offers a wide range of game cards and subscriptions, providing a seamless digital shopping experience.",

    img: "/projects/3.png",
    iconLists: [
      "/zustand.png",
      "/ts.svg",

      "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
      "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
      "https://www.subinoy.me/techstack/nodejs.svg",
    ],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 5,
    title: "Goving Blog",
    des: "Goving Blog is a fast and reliable platform for the latest tech and programming news.",

    img: "/projects/4.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
      "https://i.imgur.com/fdY8IX2.png",
    ],
    link: "https://github.com/JamalMohafil/blog-nextjs-14",
  },
  {
    id: 6,
    title: "Orkide Home",
    des: "Orkide Home offers high-quality and stylish furniture for a modern lifestyle.",

    img: "/projects/orkide_home.png",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
      "https://www.subinoy.me/techstack/nodejs.svg",
      "https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png",
    ],
    link: "https://www.youtube.com/watch?v=xQudv6gVPzU&ab_channel=JamalMohafil",
  },
];

export const Skills = [
  {
    id: 1,
    name: "Typescript",
    image: "https://www.subinoy.me/techstack/ts.svg",
  },
  {
    id: 2,
    name: "React",
    image: "https://www.subinoy.me/techstack/re.svg",
  },
  {
    id: 3,
    name: "Next.js",
    image: "https://www.subinoy.me/techstack/next.svg",
  },
  {
    id: 4,
    name: "Tailwind",
    image: "https://www.subinoy.me/techstack/tail.svg",
  },
  {
    id: 5,
    name: "NodeJS",
    image: "https://www.subinoy.me/techstack/nodejs.svg",
  },
  {
    id: 6,
    name: "Express.js",
    image:
      "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
  },
  {
    id: 7,
    name: "Nest.js",
    image:
      "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
  },
  {
    id: 8,
    name: "React Native",
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png",
  },
  {
    id: 9,
    name: "MongoDB",
    image: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    id: 10,
    name: "AWS",
    image:
      "https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-ptyrjxdo.png",
  },
  {
    id: 11,
    name: "Docker",
    image: "https://www.subinoy.me/techstack/docker.svg",
  },
];

export const testimonials = [
  {
    quote:
      "At Have a Look, we redefine style by offering unique designs that capture the essence of modern living. Our mission is to blend creativity with practicality, ensuring every piece reflects individuality and modern aesthetics, making everyday life more stylish and enjoyable.",
    name: "Zein alkhouraki",
    title: "Owner Of Have a Look Company",
    image: "/companies/lookay.png",
  },
  {
    quote:
      "HomeOrkide brings warmth and elegance to every corner of your home with our curated home decor collection. We prioritize quality and sophistication, offering timeless designs that transform your living spaces into cozy, stylish sanctuaries that reflect your unique personality.",
    name: "Abdullah al kamel",
    title: "CEO of HomeOrkide",
    image: "/companies/homeorkide.png",
  },
  {
    quote:
      "At LifeOrkide, we bring comfort and elegance to your home with our premium bedding and home textiles. Our commitment to quality ensures luxurious fabrics and thoughtful designs that enhance your everyday living experience, creating a sanctuary of relaxation and beauty.",
    name: "David Smith",
    title: "Founder of LifeOrkide",
    image: "/companies/lifeorkide.png",
  },
  {
    quote:
      "Kiwi Fashion redefines your wardrobe with stylish, modern clothing designed for every occasion. We focus on blending contemporary trends with high-quality materials, delivering apparel that empowers individuals to express themselves confidently and comfortably.",
    name: "Ahmed Iqraa",
    title: "Creative Director at Kiwi Fashion",
    image: "/companies/kiwi.png",
  },
  {
    quote:
      "H2O Coffee delivers the finest coffee experiences, crafted from the best beans around the world. We are passionate about providing rich, aromatic brews that delight coffee lovers, offering a journey of flavor and quality in every cup, from morning rituals to evening indulgences.",
    name: "Ahmed Abo Taqa",
    title: "Head of H2O Coffee",
    image: "/companies/coffee.png",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    desc: "Worked on building scalable web applications using Next.js and Express.js, enhancing performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React Native Developer",
    desc: "Built and maintained cross-platform mobile applications for both iOS & Android using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Full Stack Project",
    desc: "Designed and developed a full-stack web and mobile application using Next.js, Express.js, and React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Full Stack Developer",
    desc: "Led the development of advanced web solutions using Next.js, Nest.js, and Express.js, ensuring optimal functionality and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JamalMohafil",
  },
  {
    id: 2,
    img: "/instagram.png",
    link: "https://www.instagram.com/jamal_mohafil/",
  },
  {
    id: 2,
    img: "https://cdn.iconscout.com/icon/free/png-256/free-youtube-logo-icon-download-in-svg-png-gif-file-formats--social-media-70-flat-icons-color-pack-logos-432560.png?f=webp&w=256",
    link: "https://www.youtube.com/@jamal_mohafil",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jamal-mohafil/",
  },
];
