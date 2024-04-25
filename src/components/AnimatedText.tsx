import React from "react";
import { motion } from "framer-motion";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <span style={{ whiteSpace: "nowrap" }}>{children}</span>;
};

interface AnimatedCharactersProps {
  type: "paragraph" | "heading1";
  text: string;
}

const Paragraph: React.FC<WrapperProps> = ({ children }) => <p>{children}</p>;
const Heading1: React.FC<WrapperProps> = ({ children }) => <h1>{children}</h1>;

const tagMap: { [key: string]: React.ElementType } = {
  paragraph: Paragraph,
  heading1: Heading1,
};

const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({
  type,
  text,
}) => {
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.0455, 0.003, 0.0515, 0.0955], duration: 0.085 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.0455, 0.003, 0.0515, 0.0955], duration: 0.075 },
    },
  };

  const splitWords = text.split(" ");
  const words: string[][] = [];

  for (const item of splitWords) {
    words.push(item.split(""));
  }

  words.forEach((word) => {
    word.push("\u00A0");
  });

  const Tag = tagMap[type];

  return (
    <Tag>
      {words.map((word, index) => (
        <Wrapper key={index}>
          {word.map((element, index) => (
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
              key={index}
            >
              <motion.span style={{ display: "inline-block" }} variants={item}>
                {element}
              </motion.span>
            </span>
          ))}
        </Wrapper>
      ))}
    </Tag>
  );
};

export default AnimatedCharacters;
