import mealapp from "../assests/meal_app.png"
import contactform from "../assests/images.jpg"
import donor from "../assests/donor2.png"
import ProjectCard from './ProjectCard';
// import fpo from "../assests/download.png"
import Brainly from "../assests/Brainly.png"
import ChatAppImage from "../assests/chatapp.png"
import CareerCoachImage from "../assests/CareerCoachImage.png"
import Finace_app from "../assests/home.jpg"
import PeopleBloodApp from "../assests/PeopleBloodApp.jpg"
import SMG_app from "../assests/SMG_app.jpg"
import YathaavatSite from "../assests/YathaavatSite.jpg"


export default function Projects() {
  const projects = [

  {
  title: "People Blood Donation App",
  description: "A full-stack blood donation management system that connects donors and recipients seamlessly. The app features real-time updates, secure authentication, and efficient data management. Built using React.js and TypeScript for the frontend, Node.js and Express for the backend, with MongoDB for persistent storage. It includes toast notifications, data filtering, and dynamic UI with Tailwind CSS.",
  tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  github: "https://github.com/singhtrivendra/people_blood_fe",
  live: "https://people-blood-fe.vercel.app",
  image: PeopleBloodApp, 
  isLive: true,
},

    {
  title: "SMG Electric",
  description: "A modern EV solutions platform that helps users locate the nearest charging stations using Dijkstra's algorithm integrated with Google Maps API. Built with React.js, Node.js, and TypeScript for a robust full-stack solution. The project features clean routing, a visually appealing UI with Tailwind CSS, and MongoDB for scalable data handling.",
  tech: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Google Maps API", "Dijkstra Algorithm"],
  github: "https://github.com/singhtrivendra/smg_dev",
  live: "https://smg-dev.vercel.app/",
  image: SMG_app, 
  isLive: true,
}
,
{
  title: "Yathaavat Official Website",
  description: "A fully customized business website developed from scratch for Yathaavat Sol Pvt Ltd, featuring product listings, contact forms, quote requests, and a secure admin panel for seamless business operations. Built with a full-stack architecture and deployed using a VPS on Hostinger. The project includes backend setup, server configuration, and domain integration, offering a reliable and scalable solution for managing company outreach and operations.",
  tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "VPS (Hostinger)", "REST API"],
  github: "", 
  live: "https://yathaavat.com/",
  image: YathaavatSite, // Replace with the actual image import
  isLive: true,
}
,
{
      title: "Finance Tracker",
      description: "A comprehensive finance tracker app that helps users efficiently manage their expenses and income. Built with Flutter for a seamless UI experience, Firebase for cloud-based services, and SQLite/Hive for offline data storage. The app supports secure authentication, real-time synchronization, and state management for optimized performance.",
      tech: ["Flutter", "Firebase", "FCM", "SQLite", "Hive", "Provider"],
      github: "https://github.com/singhtrivendra/CipherSchools-Flutter-Assignment",
      live: "",
      image: Finace_app,
      isLive: false,
    }
    ,
    {
      title: "CareerCoach ",
      description: "CareerCoach is an  AI-powered guide. Whether you're looking to advance in tech, healthcare, business, or other fields, our platform provides personalized insights, interview preparation, and skill development recommendations.",
      tech: ["React", "TypeScript", "Express.js", "Node.js", "Tailwind CSS","MongoDb"],
      github: "https://github.com/singhtrivendra/CareerCoach-FE",
      live: "https://career-coach-fe.vercel.app/#/",
      image: CareerCoachImage,
      isLive: true
    },
    {
      title: "Real-Time Chat App",
      description: "A WebSocket-based real-time chat application that enables instant messaging between users. Built with React and TypeScript, featuring a Node.js & Express backend, MongoDB for persistent storage, and a responsive UI using Tailwind CSS.",
      tech: ["React", "TypeScript", "WebSockets", "Node.js", "Tailwind CSS"],
      github: "https://github.com/singhtrivendra/Chat_app",
      live: "https://week-17-2-7mkj.vercel.app/",
      image: ChatAppImage,
      isLive: true
    },
    

    {
      title: "Your Digital Brain",
      description: "A full-stack React & TypeScript app for capturing, organizing, and accessing digital knowledge seamlessly.",
      tech: ["React", "TypeScript", "Node.js", "Express","MongoDB","Tailwind CSS"],
      github: "https://github.com/singhtrivendra/think_tank",
      live: "https://think-tank-iu9y.vercel.app/",
      image: Brainly,
      isLive:true
    },
   
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and modern web technologies",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      github: "#",
      live:"#",
      isLive:true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    },
    {
      title: "Flutter E-Commerce App",
      description: "A modern e-commerce application with clean UI and smooth animations",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/singhtrivendra/Yathaavat",
      isLive:false,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974",
    },
    // {
    //   title: "contact Form App",
    //   description: "Android application for picking image and location",
    //   tech: ["Flutter", "Android", "Geolocation","image_picker"],
    //   github: "https://github.com/singhtrivendra/contact_form_app",
    //   isLive:false,
    //   image: contactform,
    // },
    {
      title: "Meal App",
      description: "Android application for meal recipes and filters",
      tech: ["Flutter", "Android", "Fultter animation"],
      github: "https://github.com/singhtrivendra/Recipes_app",
      isLive:false,
      image: mealapp,
    },
    // {
    //   title: "Blood Donor App",
    //   description: "DonorConnect, an application designed to connect donors and organizations for life-saving contributions.",
    //   tech: ["Flutter", "Android", "Firebase"],
    //   github: "https://github.com/singhtrivendra/donorconnect",
    //   isLive:false,
    //   image: donor,
    // },
    // {
    //   title: "FPO for farmers and traders",
    //   description: "Web  UI serves as a valuable resource for farmers seeking to join FPOs ",
    //   tech: ["HTML", "CSS"],
    //   github: "https://github.com/singhtrivendra/FPO",
    //   isLive:false,
    //   image: fpo,
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.2}/>
          ))}
        </div>
      </div>
    </section>
  );
}