import React from 'react'
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useNavigate } from 'react-router-dom';
import { SignedIn } from '@clerk/clerk-react'
import { reviews } from '@/assets/constants';
const Home = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/ai')
  }


  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({ img, name, username, body }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };
  return (
    <center className='items-center justify-center'>
      <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8 mb-10">
        <BoxReveal boxColor={"#808080"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Arrow AI<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#808080"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            AI GPT{" "}
            <span className="text-[#808080]">For your help</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#808080"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p>
              -&gt; Transforming the Future with Artificial Intelligence
              <span className="font-semibold text-[#808080]">AI for Business Intelligence</span>,
              <span className="font-semibold text-[#808080]"> Natural Language Processing (NLP)</span>,
              <span className="font-semibold text-[#808080]"> Computer Vision</span>,
              and
              <span className="font-semibold text-[#808080]"> AI-Powered Automation</span>
              . <br />
              -&gt; 100% open-source, and customizable. <br />
            </p>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#808080"} duration={0.5}>
          <SignedIn>
            <Button onClick={handleNavigation} className="mt-[1.6rem] bg-[#000000]">Try SiNi</Button>
          </SignedIn>
        </BoxReveal>
      </div>
      <div>
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </center>
  )
}

export default Home
