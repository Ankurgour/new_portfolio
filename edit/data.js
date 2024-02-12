import { AiFillEdit } from "react-icons/ai"
import {SiCplusplus} from "react-icons/si"

export const details = {
        firstName: "Ankur",
        lastName: "Gour",
        role: "Web Developer",
        about: "Pre-Final Year Electronics and Communications Student at Indian Institute of Information Technology, Ranchi. Passionate about Web Dev!",
        email:"ankur.21ug2019@iiitranchi.ac.in",
        gitHub: "https://github.com/Ankurgour",
        instaGram: "https://www.instagram.com/__ankur_07?igsh=MnNmcXJ6ZTFvYjh0",
        linkedIn: "https://www.linkedin.com/in/ankurgour07",
        twitter: ""
}
export const techMain = "I've worked with a range of technologies related to website development"

export const tech = [
    {
        id: "1",
        icon: () => <AiFillEdit/>,
        title: "Web Development",
        des: "Experience with MERN Stack, TailwindCSS,  Firebase"
    },
    {
        id: "2",
        icon: () => <SiCplusplus/>,
        title: "Languages",
        des: "Proficient in C++, Javascript,  C"
    }
]

export const project = [
    {
        id: "1",
        title: "SociOut-A social media app",
        img: "./4.png",
        des: "Developed a responsive social media app with Material UI and framer motion for animated interactions, enabling users to post, make friends, and securely manage social profiles.",
        tech: ["Javascript, React,NodeJs,ExpressJs,MongoDb,JWT Auth "],
        link: "https://sociout-uz18.onrender.com/"
    },
    {
        id: "2",
        title: "ListifyHub - A todo app",
        img: "./6.png",
        des: "Developed a modern and well-structured to-do list application capable of managing an extensive list of tasks, accommodating over 10,000+ todos.",
        tech: ["Node.Js,Express.Js,EJS,MongoDB"],
        link: "https://github.com/Ankurgour/ListifyHub"
    },
    {
        id: "3",
        title: "Blog-Website",
        img: "./2.png",
        des: "Secure blog website with ExpressJs, Bootstrap, MongoDB, and Ejs. 2x faster rendering, user-friendly.",
        tech: ["ExpressJs", "Bootstrap", "EJs"],
        link: "https://github.com/Ankurgour/blogvista"
    },
    {
        id: "4",
        title: "LuckyLoop- a spinwheel game feature",
        img: "./3.png",
        des: "Developed a dynamic and engaging web application featuring a spinwheel game on LuckyLoop, inviting users to test their luck by spinning the wheel.",
        tech: ["Javascript,Css,React"],
        link: "https://github.com/Ankurgour/luckyloop"
    }
]