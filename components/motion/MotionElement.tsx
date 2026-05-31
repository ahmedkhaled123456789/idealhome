"use client";
import { useMemo } from "react";
import { motion, type MotionProps } from "framer-motion";

type MotionElementProps<T extends React.ElementType = "div"> = {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof MotionProps> &
  MotionProps;

const MotionElement = <T extends React.ElementType = "div">({
  as = "div" as T,
  ...props
}: MotionElementProps<T>) => {
  const Component = useMemo(() => motion.create(as as string), [as]);
  return <Component {...props} />;
};

export default MotionElement;
