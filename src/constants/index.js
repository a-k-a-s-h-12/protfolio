import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import weather from "../assets/projects/weather.jpg"
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technology React and TailWind Css , as well as back-end technologies like Node.js, Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
  title: "AI-Powered PDF Summarization & Q&A System",
  image: project2,
  description: [
  ],
  technologies: ["MongoDB", "Express.js", "React", "Node.js", "Groq API", "JWT"],
  url: "https://text-summarization-5l4z.onrender.com",
}
,
  {
  title: "Real-Time Weather Prediction (LSTM + XGBoost Hybrid)",
  image: weather,
  description: [
  ],
  technologies: ["React", "Python", "FastAPI"],
  url: "https://github.com/a-k-a-s-h-12/weather-prediction",
}
,
  {
    title: "News Application",
    image: project3,
    description: [

    ],
    technologies: ["React", "Redux-Toolkit", "TailwindCSS"],
    url: "https://mantranewswebsite.web.app/",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
