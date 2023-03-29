import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Dialog, IconButton} from '@mui/material';
import {InfoRounded} from '@mui/icons-material';
import {DialogTransition} from '@/components/dialogs/DialogTransition';

const LessonSentenceGuideButton = () => {
  const classes = useStyles();
  const [guideDialogOpen, setGuideDialogOpen] = useState(false);
  
  const handleGuideOpen = () => {
    setGuideDialogOpen(true);
  };
  
  const handleGuideClose = () => {
    setGuideDialogOpen(false);
  };

  return (
    <div className={classes.container}>
      <IconButton size="medium" onClick={handleGuideOpen} sx={{
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        }
      }}>
        <InfoRounded />
      </IconButton>

      <Dialog
        open={guideDialogOpen}
        onClose={handleGuideClose}
        TransitionComponent={DialogTransition}
        maxWidth="md"
        fullWidth
      >
        <div className={classes.dialogContainer}>
          <h2>Гайд по странице практики</h2>
          <h4>Клавиши для управления формами:</h4>
          <ul>
            <li><strong>1</strong> - Включает ввод с микрофона в инпут на русском</li>
            <li><strong>2</strong> - Включает ввод с микрофона в инпут на английском</li>
            <li><strong>3,4,5,6</strong> - Выбор галочек сложности</li>
            <li><strong>7</strong> - Показывает/Скрывает инпут для ввода комментария для предложения</li>
            <li><strong>Enter</strong> - Добавить предложение</li>
          </ul>
          <h4>Режим повторения (Кнопка ENABLE REPETITION)</h4>
          <div>При включении режима повторения, на всех предложениях скрывается английский перевод.</div>
          <div>Также предложения перемешиваются в случайном порядке.</div>
          <div>Когда вы вспомнили перевод, просто нажмите на предложение и проверьте себя. (Перевод появится)</div>
          <div>При выключении режима повторения, порядок предложений и перевод вернутся обратно</div>
          <br/>
          <div>В режиме повторения также можно редактировать и удалять предложения</div>
        </div>
      </Dialog>
    </div>
  );
};

const useStyles = createUseStyles({
  dialogContainer: {
    padding: 30
  },
  container: {}
});

export default LessonSentenceGuideButton;