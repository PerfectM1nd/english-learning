import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import HomeIcon from '@mui/icons-material/Home';
import {IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import {useAppDispatch} from '@/app/store';
import {
  setSentenceCreateDialogOpen,
  setWordCreateDialogOpen,
  setWordEditDialogOpen
} from '@/features/dialogs/dialogsSlice';
import {useRouter} from 'next/router';

interface Props {

}

const Header: FC<Props> = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleAddButtonClick = () => {
    isWordPage() ?
      dispatch(setSentenceCreateDialogOpen(true)) :
      dispatch(setWordCreateDialogOpen(true));
  };

  const isWordPage = () => {
    return router.pathname.startsWith('/sentences');
  };

  const handleEditButtonClick = () => {
    dispatch(setWordEditDialogOpen(true));
  };

  return (
    <div className={classes.container}>
      <IconButton size="large" onClick={() => router.push('/')} sx={{
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        }
      }}>
        <HomeIcon />
      </IconButton>
      <IconButton size="large" onClick={handleAddButtonClick} sx={{
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        }
      }}>
        <AddIcon />
      </IconButton>
      {
        isWordPage() &&
          <>
            <IconButton size="large" onClick={handleEditButtonClick} sx={{
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.8)',
              }
            }}>
              <EditIcon />
            </IconButton>
          </>
      }
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    gap: 30,
    padding: '50px 0',
  }
});

export default Header;