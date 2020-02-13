import React, {FC} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';
import {PaletteOptions, TypeBackground} from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

type Props = {}

const getThemeSettings = (type: 'dark' | 'light'): ThemeOptions => {
    const palette: PaletteOptions = {
        type: type,
        text: {
            primary: 'rgba(255, 255, 255, 0.9)',
        }
    };
    const typography: TypographyOptions = {
        caption: {
            fontWeight: 100,
        }
    };

    const darkPaletteBackground: Partial<TypeBackground> = {
        paper: '#0d0d0d',
        default: '#000',
    };

    if (type === 'dark') {
        palette.background = darkPaletteBackground
    }

    return {
        palette,
        typography,
    };
};

const AppThemeProvider: FC<Props> = (props) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const themeType = prefersDarkMode ? 'dark' : 'light';
    const themeSettings = getThemeSettings(themeType);
    const theme = React.useMemo(
        () =>
            createMuiTheme(themeSettings),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;
