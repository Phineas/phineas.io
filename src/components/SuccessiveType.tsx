import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

interface ISuccessiveTypeProps {
  words: string;
  speed: number;
}

const SuccessiveType = ({words, speed}: ISuccessiveTypeProps) => {
  const [index, setIndex] = useState(0);

  const splitWords: string[] = useMemo(() => words.split(" "), [words]);
  const shownWords: string[] = useMemo(() => splitWords.slice(0, index), [splitWords, index]);

  useEffect(() => {
    setIndex(1);
  }, []);

  useEffect(() => {
    if(index === splitWords.length-1) return;

    const nextWord = splitWords[index+1];

    setTimeout(() => {
      setIndex(index + 1);
    }, nextWord.length * 50);
  }, [index, splitWords]);


  return (
    <Container>
      {shownWords.map((word: string) => (
        <span>{word}</span>
      ))}
    </Container>
  )
}

const Container = styled.div`
  text-align: left;
  color: #fff;
`;

export default SuccessiveType;