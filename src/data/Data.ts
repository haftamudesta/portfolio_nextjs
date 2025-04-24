"use client"

import { 
    FaReact,
    FaHtml5,
    FaBootstrap,
    FaAngular,
    FaNodeJs,
    FaGit,
    FaGithub,
    FaNpm,
    FaChrome } from "react-icons/fa"
import { MdCss,MdJavascript, MdDesignServices} from "react-icons/md"
import { FcCollaboration } from "react-icons/fc";
import { DiResponsive } from "react-icons/di";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { 
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiRuby,
    SiRubyonrails,
    SiPostgresql,
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiRedis,
    SiGraphql,
    SiWebpack,
    SiVite,
    SiEslint,
    SiCypress,
    SiJest,
    SiSelenium,
    SiPostman,
    SiMocha,
    SiNextdotjs,
    SiHeadlessui,
    SiLucide,
    SiRubocop,
    SiPrettier,
    SiMomenteo,
  } from "react-icons/si"
  import { Gem } from 'lucide-react';
import { VscVscode } from "react-icons/vsc";
import { MdAddReaction } from "react-icons/md";

export const projects=[
        {
                title:"Meme generator",
                description:"Memes generator Gets an array of popular memes that may be captioned with Imgflip API. The size of this array and the order of memes may change at any time.This is my react Capsone project at Microverse",
                technoloy:[
                        {name:"React",iconName:FaReact,color:"#61Dafb"},
                        {name:"CSS",iconName:MdCss,color:"#61Dafb"},
                        {name:"Redux",iconName:SiRedux,color:"#61Dafb"},
                        {name:"Vite",iconName:SiVite,color:"#61Dafb"},
                        {name:"Jest",iconName:SiVite,color:"#61Dafb"},
                ],
                image:"/projectImages/reactCapstone.JPG",
                href:"https://github.com/haftamudesta/React-Capstone-Project"
        },

        {
            title:"Recipe App",
            description:"Recipe App keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list.",
            technoloy:[
                {name:"Ruby on Rails",iconName:SiRubyonrails,color:"text-red-700"},
                {name:"PostgreSQL",iconName:SiPostgresql,color:"text-blue-500"},
                {name:"CSS",iconName:MdCss,color:"#61Dafb"},
                {name:"cancancan",iconName:Gem,color:"#61Dafb"},
                {name:"Rubocop",iconName:SiRubocop,color:"#61Dafb"},
                {name:"Device",iconName:Gem,color:"#61Dafb"}, 
            ],
            image:"/projectImages/recipe_home.PNG",
            href:"https://github.com/haftamudesta/Recipe_App",
    },


    {
        title:"Blog App",
        description:"The product store is a website where users can browse, add,edit and dlete a product,  . It typically includes features like:",
        technoloy:[
            {name:"Node.js",iconName:FaNodeJs,color:"text-green-500"},
            {name:"MongoDB",iconName:SiMongodb,color:"text-green-600"},
            {name:"Express.js",iconName:SiExpress,color:"text-white"},
            {name:"React",iconName:FaReact,color:"text-blue-700"},
            {name:"Tailwindcss",iconName:SiTailwindcss,color:"text-sky-700"}, 
            {name:"firebase",iconName:SiFirebase,color:"text-sky-700"},
            {name:"moment",iconName:SiMomenteo,color:"text-sky-700"},     
        ],
        image:"/projectImages/users.PNG",
        href:"https://github.com/haftamudesta/BlogApp_MERN"
},      
]

export const moreProjects=[
    {
        title:"Product Store",
        description:"The product store is a website where users can browse, add,edit and dlete a product,  . It typically includes features like:",
        technoloy:[
                {name:"React",iconName:FaReact,color:"text-blue-700"},
                {name:"Tailwindcss",iconName:SiTailwindcss,color:"text-sky-700"},
                {name:"Zustand",iconName:SiRedux,color:"#61Dafb"},
                {name:"Node.js",iconName:FaNodeJs,color:"text-green-500"},
                {name:"PostgreSQL",iconName:SiPostgresql,color:"text-blue-500"},
                {name:"Neon",iconName:FaDatabase,color:"text-teal-600"},
                {name:"Express.js",iconName:SiExpress,color:"text-white"},
                {name:"React Lucide",iconName:SiLucide,color:"text-white"},
                
        ],
        image:"/projectImages/productstore.PNG",
        href:"https://github.com/haftamudesta/product-store"
},



{
        title:"Book Store",
        description:"Bookstore is a simple website that displays a list of books and allows you to display a list of books, add a book and remove a selected book.It it implemented to master Redux.",
        technoloy:[
            {name:"React",iconName:FaReact,color:"text-blue-700"},
            {name:"Redux",iconName:SiRedux,color:"text-purple-500"},
            {name:"CSS",iconName:MdCss,color:"text-purple-600"},
            {name:"React Icons",iconName:MdAddReaction,color:"text-pink-600"},
        ],
        image:"/projectImages/bookstore.JPG",
        href:"https://github.com/haftamudesta/BookStore"
},


{
    title:"Owesome Books Web app",
    description:"Owesome Books is a basic website that allows users to add/remove books from a list.This web app is implemented for JavaScript group capstone project while learning at microverse",
    technoloy:[
        {name:"HTML",iconName:FaHtml5,color:"text-red-700"},
        {name:"JavaScript",iconName:MdJavascript,color:"text-amber-400"},
        {name:"CSS",iconName:MdCss,color:"text-purple-600"},
        {name:"Prettier",iconName: SiPrettier,color:"text-purple-600"},
       
    ],
    image:"/projectImages/awesomeBooks.JPG",
    href:"https://github.com/haftamudesta/AwesomeBook",
},


]

export const personalInformation=[
        {
            id:1,
            title:'First Name',
            description:'Haftamu'
        },
        {
            id:2,
            title:'Last Name',
            description:'Desta'
        },
        {
            id:3,
            title:'age',
            description:'33'
        },
        {
            id:4,
            title:'Nationality',
            description:'Ethiopian'
        },
        {
            id:5,
            title:'Address',
            description:'Ethiopia'
        },
        {
            id:6,
            title:'phone',
            description:'+251 915-57-45-22'
        },
        {
            di:7,
            title:'email',
            description:'desta451616@hotmail.com'
        },
        {
            id:8,
            title:'Language',
            description:'English,Tigringa,<br /> Amharic'
        }
    ]
    
    export const stats=[
        {
            id:1,
            number:'9+',
            title:'Years of exprience as Electrical Engineer <br /> <br /> Junior as web developer'
        },
        {
            id:2,
            number:'25+',
            title:'completed projects'
        }
    ]

export const skills= [
    {
        id: 1,
        skillCategory: "Front-End",
        technologies: [
            {name:"HTML",iconName:FaHtml5,color:"text-pink-400"},
            {name:"JavaScript",iconName:MdJavascript,color:"text-amber-400"},
            {name:"TypeScript",iconName:SiTypescript,color:"text-blue-600"},
            {name:"React",iconName:FaReact,color:"text-blue-700"},
            {name:"Redux",iconName:SiRedux,color:"text-purple-500"},
            {name:"Next Js",iconName: SiNextdotjs,color:"text-black/20"},
            {name:"Angular",iconName:FaAngular,color:"text-pink-700"},
            {name:"CSS",iconName:MdCss,color:"text-purple-600"},
            {name:"Tailwindcss",iconName:SiTailwindcss,color:"text-sky-700"},
            {name:"React Headless UI",iconName:SiHeadlessui,color:"text-black/30"},
            {name:"Bootstrap",iconName:FaBootstrap,color:"text-purple-800"}, 
    ]
    },
    {
        id:2,
        skillCategory:"Back-End",
        technologies: [
              {name:"Ruby",iconName:SiRuby,color:"text-red-600"},
              {name:"Ruby on Rails",iconName:SiRubyonrails,color:"text-red-700"},
              {name:"Node.js",iconName:FaNodeJs,color:"text-green-500"},
              {name:"PostgreSQL",iconName:SiPostgresql,color:"text-blue-500"},
              {name:"MongoDB",iconName:SiMongodb,color:"text-green-600"},
              {name:"Express.js",iconName:SiExpress,color:"text-white"},
              {name:"FireBase",iconName:SiFirebase,color:"text-gray-500"},
              {name:"Redis",iconName:SiRedis,color:"text-red-500"},
              {name:"GraphQL",iconName:SiGraphql,color:"text-purple-500"},    
      ]
      },
      {
        id: 3,
        skillCategory: "Tools",
        technologies: [
            {name:"VS Code",iconName:VscVscode,color:"text-blue-500"},
            {name:"Git",iconName:FaGit,color:"text-black"},
            {name:"GitHub",iconName:FaGithub,color:"text-black/40"},
            {name:"Webpack",iconName:SiWebpack,color:"text-teal-500"},
            {name:"Vite",iconName:SiVite ,color:"text-purple-500"},
            {name:"npm",iconName:FaNpm,color:"text-black/30-500"},
            {name:"Chrome DevTools",iconName:FaChrome,color:"text-blue-800"},
            {name:"ESLint",iconName:SiEslint,color:"text-purple-200"},
            {name:"GraphQL",iconName:SiGraphql,color:"text-purple-500"},    
    ]
    },
    {
        id: 4,
        skillCategory: "Testing and Debugging Tools",
        technologies: [
              {name:"Jest",iconName:SiJest,color:"text-pink-500"},
              {name:"Cypress",iconName:SiCypress,color:"text-gray-500"},
              {name:"Selenium",iconName:SiSelenium,color:"text-gray-600"},
              {name:"Postman",iconName:SiPostman,color:"text-pink-200"},
              {name:"Mocha",iconName:SiMocha ,color:"text-pink-500"},    
      ]
      },
      {
        id: 5,
        skillCategory: "UX/UI design",
        technologies: [
              {name:"Responssive Design",iconName:DiResponsive,color:"text-sky-500"},
              {name:"Collaboration",iconName:FcCollaboration,color:"text-puple-400"},
              {name:"Communication",iconName:RiUserCommunityFill,color:"text-green-500"},
              {name:"Wireframing",iconName: MdDesignServices,color:"text-gray-400"},   
      ]
      },
  ]