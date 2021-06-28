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
      },
      '& > .MuiBox-root': {
        color: 'white'
      }
    },
    optionsSwitchBox: {
      display: 'flex',
      flexDirection: 'column'
    },
    optionsTextFields: {
      display: 'flex',
      flexDirection: 'column',
      '& > .MuiFormControl-root.MuiTextField-root': {
        margin: '.5rem'
      }
    },
    emojiInputBox: {
      display: 'flex',
      alignItems: 'center',
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
