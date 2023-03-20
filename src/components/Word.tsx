import React, {FC} from 'react';
import {Prisma} from "@prisma/client";
import {Chip} from "@mui/material";
import {useRouter} from "next/router";

interface Props {
  word: Prisma.WordSelect
}

const Word: FC<Props> = ({word}) => {
  const router = useRouter();

  return (
    <Chip
      label={word.word}
      clickable
      style={{backgroundColor: 'white'}}
      onClick={() => router.push('sentences/' + word.id)}
    />
  );
};

export default Word;