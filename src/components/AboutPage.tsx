import React from 'react'
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconCalendarEvent,
  IconGuitarPick,
  IconMan,
  IconMicrophone,
  IconMusic,
  IconPiano,

} from "@tabler/icons-react";
import Image from 'next/image';

function AboutPage() {
  return (
    <BentoGrid className="mt-8 max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem 
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    
  </div>
);
const items = [
  {
    title: "Explore Musical Instruments",
    description: "Discover the world of music by learning to play various instruments like guitar, piano, drums, and more.",
    header: <Skeleton />, // You can replace this with an image related to musical instruments
    icon: <IconGuitarPick className="h-4 w-4 text-neutral-500" />, // You can adjust the icon as needed
  },
  {
    title: "Develop Your Musical Skills",
    description: "Enhance your musical abilities through comprehensive lessons tailored to your skill level and interests.",
    header: <Skeleton />, // You can replace this with an image related to music lessons
    icon: <IconMusic className="h-4 w-4 text-neutral-500" />, // You can adjust the icon as needed
  },
  {
    title: "Experience Ensemble Playing",
    description: "Join ensemble groups to collaborate with other musicians, develop teamwork, and perform together.",
    header: <Skeleton />, // You can replace this with an image related to ensemble playing
    icon: <IconMan className="h-4 w-4 text-neutral-500" />, // You can adjust the icon as needed
  },
  {
    title: "Learn Music Theory",
    description: "Gain a deeper understanding of music through lessons in music theory, harmony, and composition.",
    header: <Skeleton />, // You can replace this with an image related to music theory
    icon: <IconPiano className="h-4 w-4 text-neutral-500" />, // You can adjust the icon as needed
  },
  {
    title: "Discover Different Music Styles",
    description: "Explore various music genres such as classical, jazz, blues, and contemporary to broaden your musical horizons.",
    header: <Skeleton />, // You can replace this with an image related to music styles
    icon: <IconMicrophone className="h-4 w-4 text-neutral-500" />, // You can adjust the icon as needed
  },
  {
    title: "Participate in Live Performances",
    description: "Showcase your talents and progress through regular recitals, concerts, and performance opportunities.",
    header: <Skeleton />, // You can replace this with an image related to live performances
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />, // You can adjust the icon as needed
  },
  {
    title: "Connect with Music Enthusiasts",
    description: "Join a vibrant community of music lovers and enthusiasts who share your passion for music.",
    header: <Skeleton />, // You can replace this with an image related to community
    icon: <IconMan className="h-4 w-4 text-neutral-500" />, // You can adjust the icon as needed
  },
];

export default AboutPage;
