import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    navBarTitle: {
      flexGrow: 1
    },
    optionsRoot: {
      display: 'flex !important',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '.5rem',
      '& > *': {
        margin: '.5rem'
      }
    },
    optionsSwitchBox: {
      display: 'flex',
      flexDirection: 'column'
    },
    emojiInputRoot: {
      padding: '.5rem'
    },
    emojiInputBox: {
      display: 'flex',
      '& button': {
        marginLeft: '.5rem'
      }
    },
    emojiElementPaper: {
      margin: '.5rem 0 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > *': {
        margin: '.5rem'
      }
    }
  })
);

export default useStyles;
