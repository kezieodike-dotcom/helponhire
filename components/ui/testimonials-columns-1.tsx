"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
  }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-white text-zinc-850" key={i}>
                  <div className="text-zinc-600 text-xs leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col text-left">
                      <div className="font-semibold text-xs tracking-tight text-zinc-900 leading-4">{name}</div>
                      <div className="text-[10px] text-zinc-400 leading-4 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const TestimonialsRow = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
  }[];
  duration?: number;
  reverse?: boolean;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        initial={{ translateX: props.reverse ? "-50%" : "0%" }}
        animate={{ translateX: props.reverse ? "0%" : "-50%" }}
        transition={{
          duration: props.duration || 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-row gap-6 w-max"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border shadow-lg shadow-primary/10 w-[330px] shrink-0 bg-white text-zinc-850" key={i}>
                  <div className="text-zinc-600 text-xs leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col text-left">
                      <div className="font-semibold text-xs tracking-tight text-zinc-900 leading-4">{name}</div>
                      <div className="text-[10px] text-zinc-400 leading-4 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
