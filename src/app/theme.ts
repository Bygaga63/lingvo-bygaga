import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const AppTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#242424',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#fff'
        }
    },
});

export default AppTheme;
