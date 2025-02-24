"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, Carousel } from "./ui/AppleCardCarousel";

// تعريف النوع للمشروع
interface Project {
  id: number;
  category: string;
  title: string;
  videoURL?: string;
  src: string;
  description?: string;
  noImageContent?: boolean;
}
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// دالة محسنة لاستخراج معرف الفيديو من Facebook
const getFacebookVideoId = (url: string): string | null => {
  // للتعامل مع روابط watch
  const watchRegExp = /facebook\.com\/watch\/?\?v=(\d+)/;
  const watchMatch = url.match(watchRegExp);
  if (watchMatch) return watchMatch[1];

  // للتعامل مع الروابط التقليدية
  const traditionalRegExp = /facebook.com\/.*\/videos\/(.*?)\//;
  const traditionalMatch = url.match(traditionalRegExp);
  if (traditionalMatch) return traditionalMatch[1];

  return null;
};
interface VideoProps {
  url: string;
 }
// مكون الفيديو
const VideoPlayer: React.FC<VideoProps> = ({ url }) => {
  // تحديد نوع الفيديو
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");
  const isFacebook = url.includes("facebook.com");
  const isLinkedIn = url.includes("linkedin.com");

  if (isYouTube) {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;

    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (isFacebook) {
    const videoId = getFacebookVideoId(url);
    if (!videoId) return null;

    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D${videoId}&show_text=false`}
           scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (isLinkedIn) {
    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={url}
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return null;
};
// مكون DummyContent منفصل
const DummyContent = ({
  img,
  description,
  videoURL,
  id,
  title,
}: {
  img?: string;
  id?: number;
  videoURL?: string;
  description?: string;
  title?: string;
}) => (
  <div className="bg-[#F5F5F7] z-[5000] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
      <span className="font-bold text-neutral-700 mb-4 dark:text-neutral-200">
        {title}
      </span>
      <br />
      {description}
    </p>

    {/* عرض الفيديو إذا كان موجوداً */}
    {videoURL && (
      <div className="my-4">
        <VideoPlayer url={videoURL} />
      </div>
    )}

    {/* عرض الصورة إذا كانت موجودة */}
    {img && (
      <img
        src={img}
        alt={title}
        className="mt-4 rounded-lg object-contain w-full h-max"
      />
    )}
  </div>
);

// دالة لجلب البيانات
const fetchProjects = async (): Promise<Project[]> => {
  // يمكنك استبدال هذا بـ API call حقيقي
  return [
    {
      id: 1,
      category: "Website",
      title: "Orkide Technology Website",
      src: "/projects/1.png",
      description: "orkide",
    },
    {
      id: 2,
      category: "Website",
      title: "Have a look",
      src: "/projects/2.png",
    },
    {
      id: 3,
      category: "Digital Store",
      title: "Goving Digital Store",
      videoURL:
        "https://www.youtube.com/watch?v=numMfTsaBjU&ab_channel=JamalMohafil",
      src: "/projects/3.png",
    },
    {
      id: 4,
      category: "Blog",
      title: "Goving Blog",
      src: "/projects/4.png",
    },
    {
      id: 5,
      category: "Landing Page",
      title: "Minotti Furniture: Stylish Landing Page Example",
      src: "/projects/5.png",
    },
    {
      id: 6,
      category: "Application",
      title: "Tasks Management & Chat Application",
      videoURL: "https://youtu.be/WmzoDU9IKaU",

      description:
        "Tasks Management Application With Many Features like chatting & add friends & create teams, and more",
      src: "/projects/chat.png",
      noImageContent:true,
    },
  ];
};

export function AppleCardsCarouselDemo() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const cards = projects.map((project, index) => (
    <Card
      key={project.id}
      card={{
        ...project,
        content: (
          <DummyContent
            img={project.noImageContent ? "" : project.src}
            description={project.description}
            title={project.title}
            id={project.id}
            videoURL={project.videoURL}
          />
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full min-h-[500px] py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Take a look at my projects.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
