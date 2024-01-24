import { useMediaQuery, useTheme } from "@mui/material";

const sx = () => {
    const { palette } = useTheme();
    const matches = useMediaQuery('(min-width:600px)');

    const css = {
        box: {
            base: {
                backgroundColor: palette.grey[50],
                display: 'flex',
                padding: '25px',
                borderRadius: '6px',
            },
            icon: {
                height: '54px',
                width: '54px',
                minWidth: '54px',
                borderRadius: '100px',
                backgroundColor: palette.lightdark,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&>img': {
                    height: 'auto',
                    width: 'auto',
                }
            },
            info: {
                base: {
                    ml: '22px',
                    mt: '15px'
                },
                button: {
                    wrapper: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                    },
                    base: {
                        fontSize: '.75rem',
                        pl: '20px !important',
                        pr: '15px !important',
                    },
                    icon: {
                        fontSize: '1rem',
                        ml: '.25rem'
                    },
                },
            },
            title: {
                color: palette.dark,
            }
        }
    };
    return { css };
}

export { sx };
