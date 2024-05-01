import React from 'react';
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconCalendarEvent,
  IconGuitarPick,
  IconMan,
  IconMicrophone,
  IconMusic,
  IconPiano,
} from "@tabler/icons-react";


function AboutPage() {
  return (
    <BentoGrid className="mt-8 max-w-fit mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
        key={i}
        title={<span className="text-purple-600 font-sans text-3xl">{item.title}</span>}
        description={<span className="text-purple-400">{item.description}</span>}
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
    icon: <IconGuitarPick className="h-4 w-4 text-neutral-500" />,
     header: <Skeleton />,
  },
  {
    title: "Develop Your Musical Skills",
    description: "Enhance your musical abilities through comprehensive lessons tailored to your skill level and interests.",
    icon: <IconMusic className="h-4 w-4 text-neutral-500" />,
     header: <Skeleton />,
  },
  {
    title: "Experience Ensemble Playing",
    description: "Join ensemble groups to collaborate with other musicians, develop teamwork, and perform together.",
    icon: <IconMan className="h-4 w-4 text-neutral-500" />,
     header: <Skeleton />,
  },
  {
    title: "Learn Music Theory",
    description: "Gain a deeper understanding of music through lessons in music theory, harmony, and composition.",
    icon: <IconPiano className="h-4 w-4 text-neutral-500" />,
     header: <Skeleton />,
  },
  {
    title: "Discover Different Music Styles",
    description: "Explore various music genres such as classical, jazz, blues, and contemporary to broaden your musical horizons.",
    icon: <IconMicrophone className="h-4 w-4 text-neutral-500" />,
     header: <Skeleton />,
  },
  {
    title: "Participate in Live Performances",
    description: "Showcase your talents and progress through regular recitals, concerts, and performance opportunities.",
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton />,
  },
  {
    title: "Connect with Music Enthusiasts",
    description: "Join a vibrant community of music lovers and enthusiasts who share your passion for music.",
    icon: <IconMan className="h-4 w-4 text-neutral-500" />,
     header: <Skeleton />,
  },
];

export default AboutPage;
