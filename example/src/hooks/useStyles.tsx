import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    navBarTitle: {
      flexGrow: 1
    },
    main: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: '2rem',
      '& .MuiContainer-root': {
        paddingTop: '2rem'
      },
      '& #options-container': {
        minWidth: '200px',
        maxWidth: '500px'
      },
      '& #component-view-container': {
        minWidth: '300px',
        maxWidth: '800px'
      }
    },
    optionsRoot: {
      display: 'flex !important',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      '& > *': {
        margin: '.5rem'
      }
    },
    optionsSwitchBox: {
      display: 'flex',
      flexDirection: 'row'
    },
    optionsTextFields: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > .MuiFormControl-root.MuiTextField-root': {
        margin: '.5rem',
        width: '100px'
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
      alignItems: 'center'
    },
    emojiElementLabel: {
      flex: '1',
      textAlign: 'center',
      border: '1px dotted #9a9a9a',
      borderRadius: '2.5px',
      margin: '.25rem',
      padding: '.25rem'
    }
  })
);

export default useStyles;
