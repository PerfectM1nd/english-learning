import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import prisma from "@/prisma";
import {createUseStyles} from "react-jss";
import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import SentenceList from "@/components/SentenceList";
import {useRouter} from "next/router";

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const wordId = parseInt(query?.wordId as string)

  const word = await prisma.word.findFirst({
    where: {
      id: wordId
    }
  })

  const sentences = await prisma.sentence.findMany({
    where: {
      wordId
    }
  })

  return {
    props: {
      sentences,
      word
    }
  }
};

const SentenceViewPage = ({sentences, word}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const classes = useStyles();
  const router = useRouter();
  const [newSentenceString, setNewSentenceString] = useState('');

  const handleInputChange = (event: any) => {
    setNewSentenceString(event.target.value)
  }

  const handleWordAdd = async () => {
    if (!newSentenceString) return;
    const body = {
      word: word,
      sentence: newSentenceString
    }
    await fetch('/api/sentences', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    });
    router.reload();
  }

  return (
    <main>
      <h1 className={classes.wordTitle}>
        {word?.word}
      </h1>
      <TextField
        label="Добавить новое предложение к слову"
        variant="outlined"
        value={newSentenceString}
        fullWidth
        onChange={handleInputChange}
        InputLabelProps={{
          style: {
            color: 'white'
          }
        }}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
            input: classes.input
          }
        }}
      />
      <div style={{
        marginTop: 40
      }}>
        <Button
          variant="contained"
          color="primary"
          sx={{width: 200}}
          onClick={handleWordAdd}
          size="large"
        >
          ДОБАВИТЬ СЛОВО
        </Button>
      </div>
      <SentenceList sentences={sentences} />
    </main>
  );
};

const useStyles = createUseStyles({
  wordTitle: {
    color: 'white !important',
    fontSize: 50
  },
  input: {
    color: 'white !important'
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important"
  }
});

export default SentenceViewPage