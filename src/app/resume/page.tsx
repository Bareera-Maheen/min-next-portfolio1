"use client";

import {FaHtml5, FaCss3, FaFigma, FaNodeJs ,FaJs ,} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import tailwindConfig from "../../../tailwind.config";


// data
const about ={
  title:'About Me ',
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quia laboriosam maiores aut excepturi similique esse, eum dolorem illum, provident dolore fugit ducimus cupiditate obcaecati expedita, nihil nisi a! Tenetur",
info:[
  {
  fieldName:"Name",
  fieldValue:"Bareerah Maheen"
},
{
  fieldName:"Phone",
  fieldValue:"03172559895"
},
{
  fieldName:"Nationality",
  fieldValue:"Pakistani"
},
{
  fieldName:"Experience",
  fieldValue:"1.5 year"
},
{
  fieldName:"Freelencer",
  fieldValue:"Available"
},

{
  fieldName:"Email",
  fieldValue:"bareerahkhanzada842@gmail.com"
},
{
  fieldName:"linkedin",
  fieldValue:"Bareerah Maheen"
},
{
  fieldName:"github",
  fieldValue:"Bareerah Maheen"
},
{
  fieldName:"Languages",
  fieldValue:"English, urdu, siraiki, punjabi,sindhi"
},
]
};

const experience={
  icons:'/assets/resume/badge.svg',
  title:'My Experience',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, accusantium non quam necessitatibus sint at quod, dolores, nesciunt quas voluptatibus ea suscipit exercitationem assumenda fuga similique quae repudiandae asperiores dolor',
items:[
  {
company:"Web Solution",
position:"frontend Developer",
duration:"0"
  },
  {
    company:"Web Solution",
    position:"frontend Developer",
    duration:"0"
      },
      {
        company:"Web Solution",
        position:"frontend Developer",
        duration:"0"
          },
          {
            company:"Web Solution",
            position:"frontend Developer",
            duration:"0"
              },
              {
                company:"Web Solution",
                position:"frontend Developer",
                duration:"0"
                  },
                   {
            company:"Web Solution",
            position:"frontend Developer",
            duration:"0"
              },
]
}
const education={
  
  title:'My Educatio',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, accusantium non quam necessitatibus sint at quod, dolores, nesciunt quas voluptatibus ea suscipit exercitationem assumenda fuga similique quae repudiandae asperiores dolor',
items:[
  {

institue:"udergraduate(NED)",
field:"English Linguistic and Applied Science",
duration:"2023-2027"
  },
  {
    institue:"Intermediate(Crescent)",
    field:"Engineering",
    duration:"2021"
      },
      {
        institue:"GIAIC",
        field:"AI WEB (3.0)",
        duration:"2024"
          }, {
        institue:"Matriculation(Crescent)",
        field:"Science",
        duration:"00"
          }, {
            institue:"perior(Crescent)",
            field:"Science",
            duration:"00"
              },
]
}

const skills={
  
  title:'My Skills',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, accusantium non quam necessitatibus sint at quod, dolores, nesciunt quas voluptatibus ea suscipit exercitationem assumenda fuga similique quae repudiandae asperiores dolor',
skillList:[
  {
icon:<FaHtml5/>,
name:"html 5"
  },
  {
    icon:<FaCss3/>,
    name:"css3"
      },
      {
        icon:<FaJs/>,
        name:"java-type(script)"
          },
      {
        icon:<FaFigma/>,
        name:"figma"
          },
          {
            icon:<FaNodeJs/>,
            name:"node.js"
              },
              {
                icon:<SiTailwindcss/>,
                name:"tailwindcss"
                  },
                  {
                    icon:<SiNextdotjs/>,
                    name:"next.js"
                      },

 
]
}

const Resume = () => {
  return (
   < motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'},}} className=" min-h-[80vh]   flex items-center justify-end py-16 6xl:py-0"> 
   <div className="container max-auto">
 <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] ">
  <TabsList className="flex flex-col w-full  max-w-[380px] mx-auto xl:mx-0 gap-6">
    <TabsTrigger value="experience" > Exprience</TabsTrigger>
    <TabsTrigger value="education" >Education</TabsTrigger>
    <TabsTrigger value="skills">Skills</TabsTrigger>
    <TabsTrigger value="about">About me</TabsTrigger>
  </TabsList> 
  <div className="min-h-[70vh] w-full ">
  <TabsContent value="experience" className="w-full">
    <div className="flex flex-col xl:text-left text-center gap-[30px]">
      <h3 className="text-3xl text-accent font-bold">{experience.title}</h3> 
  <p className="m-x-[600px] text-white/80 mx-auto xl:mx-0" >
  {experience.description}</p> <ScrollArea className="h-[400px]">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{experience.items.map((item,index)=>{
      return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
      justify-center items-center lg:items-start gap-1"> 
        <span className="text-accent">{item.duration}</span>
        <h3 className="text-xl max-w-[260] min-h-[60px] text-center lg:text-left">{item.position}</h3>
        <div className="flex items-center gap-3 ">  <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{item.company}</p>
        </div>
      </li>
      );
    })}</ul>
    </ScrollArea>
    </div>
    </TabsContent>
    
  <TabsContent value="education" className="w-full"> <div className="flex flex-col xl:text-left text-center gap-[30px]">
      <h3 className="text-3xl text-accent font-bold">{education.title}</h3> 
  <p className="m-x-[600px] text-white/80 mx-auto xl:mx-0" >
  {education.description}</p> <ScrollArea className="h-[400px]">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{education.items.map((item,index)=>{
      return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
      justify-center items-center lg:items-start gap-1"> 
        <span className="text-accent">{item.duration}</span>
        <h3 className="text-xl max-w-[260] min-h-[60px] text-center lg:text-left">{item.field}</h3>
        <div className="flex items-center gap-3 ">  <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{item.institue}</p>
        </div>
      </li>
      );
    })}</ul>
    </ScrollArea>
    </div>
    </TabsContent>
     
  <TabsContent value="skills" className="w-full"> <div className="flex flex-col xl:text-left text-center gap-[30px]">
      <h3 className="text-3xl   text-accent font-bold">{skills.title}</h3> 
  <p className="m-x-[600px] text-white/80 mx-auto xl:mx-0" >
  {skills.description}</p> <ScrollArea className="h-[400px]">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{skills.skillList.map((skillList,index)=>{
      return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
      justify-center items-center lg:items-start gap-1"> 
        <span className="text-accent text-3xl">{skillList.name}</span>
        <h3 className="text-[80px] max-w-[260] min-h-[60px] text-center  lg:text-left">{skillList.icon}</h3>
        
      </li>
      );
    })}</ul>
    </ScrollArea>
    </div>
    </TabsContent>
   
  <TabsContent value="about" className="w-full"> <div className="flex flex-col xl:text-left text-center gap-[30px]">
      <h3 className="text-3xl text-accent font-bold">{about.title}</h3> 
  <p className="m-x-[600px] text-white/80 mx-auto xl:mx-0" >
  {about.description}</p> <ScrollArea className="h-[400px]">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{about.info.map((info,index)=>{
      return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
      justify-center items-center lg:items-start gap-1"> 
        <span className="text-accent">{info.fieldName}</span>
        <h3 className="text-sm max-w-[260] min-h-[60px] text-center lg:text-left">{info.fieldValue}</h3>
       
      </li>
      );
    })}</ul>
    </ScrollArea>
    </div>
    </TabsContent></div>

  </Tabs>
  
   </div>
      
    </motion.div>
  )
}

export default Resume
