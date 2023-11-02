/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {

    interface Palette {
        darksalmon: string;
        lightsalmon: string;
        dark: string;
        lightdark: string;
    }
    
    interface PaletteOptions {
        darksalmon: string;
        lightsalmon: string;
        dark: string;
        lightdark: string;
    }
}

declare module '@mui/material/styles/createTypography' {
    interface FontStyle {
        fontNunito: string;
        fontWeightSemiBold: number;
    }
}

const theme = createTheme({
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].toString(),
        fontWeightSemiBold: 400,
    },
    components: {
        MuiButton: {
            defaultProps: {
                sx: {
                    '&.MuiButton.outlined.primary': {
                        backgroundColor: ({ palette }) => palette.common.white,
                        borderColor: ({ palette }) => palette.darksalmon,
                        color: ({ palette }) => palette.darksalmon,
                        pl: '32px',
                        pr: '32px',
                    },
                }
            },
            styleOverrides: {
                root: {
                    borderRadius: 100,
                    textTransform: 'initial',
                    height: 'fit-content !important',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                sx: {
                    '&.MuiButton.outlined.primary': {
                        backgroundColor: ({ palette }) => palette.common.white,
                        borderColor: ({ palette }) => palette.darksalmon,
                        color: ({ palette }) => palette.darksalmon,
                        pl: '32px',
                        pr: '32px',
                    },
                    '&.MuiButton.contained.primary': {
                        backgroundColor: ({ palette }) => palette.darksalmon,
                        borderColor: ({ palette }) => palette.darksalmon,
                        color: ({ palette }) => palette.common.white,
                        pl: '32px',
                        pr: '32px',
                    },
                }
            }
        },
        MuiOutlinedInput: {
            defaultProps: {
                // size: 'medium',
                sx: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: '.0625rem',
                        borderColor: ({ palette }) => 'red',
                    },
                    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: ({ palette }) => 'green',
                    },
                    ...{
                        color: ({ palette }) => palette.dark,
                        fontWeight: ({ typography }) => typography.fontWeightMedium,
                        backgroundColor: ({ palette }) => palette.common.white,
                    },
                },
            },
        },
    },
    palette: {
        darksalmon: '#D89274',
        lightsalmon: '#FFF6F2',
        dark: '#010101',
        lightdark: '#353B48',
    },
});

export { theme };
