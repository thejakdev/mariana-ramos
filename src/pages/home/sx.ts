import { useMediaQuery, useTheme } from "@mui/material";

const sx = () => {
    const { palette } = useTheme();
    const matches = useMediaQuery('(min-width:600px)');

    const css = {
        about: {
            base: {
                border: '1px solid ' + palette.grey[100],
                borderRadius: '6px',
                mt: 0,
            },
            content: {
                base: {
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    backgroundColor: palette.grey[50],
                    borderBottomRightRadius: '.375rem',
                    pl: matches ? '1.875rem' : '.9375rem',
                    pr: matches ? '1.875rem' : '.9375rem',
                    pt: '1.25rem',
                    pb: '1.25rem',
                },
                text: {
                    color: palette.dark,
                },
            },
        },
        social: {
            button: {
                backgroundColor: palette.lightdark,
                width: matches ? '54px' : '44px',
                maxWidth: matches ? '54px' : '44px',
                height: matches ? '54px' : '44px',
                '& > a': {
                    display: 'flex',
                },
                '& > img': {
                    width: matches ? '21px' : '16px',
                },
                '& > img.facebook': {
                    width: matches ? '16px' : '12px',
                },
            },
        },
        box: {
            title: {
                color: palette.dark,
            }
        },
        dialog: {
            title: {
                color: palette.lightdark,
            },
            closeButtonIcon: {
                fontSize: matches ? '2rem' : '1.375rem',
                color: palette.dark,
            },
            cover: {
                closeButton: {
                    position: 'fixed',
                    top: '.625rem',
                    right: '.625rem',
                    backgroundColor: palette.common.white,
                    boxShadow: '0 .25rem .5rem .25rem rgba(0,0,0,0.1)',
                    zIndex: 8,
                },
            },
            content: {
                base: {
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    height: '100%',
                },
                closeButton: {
                    position: 'absolute',
                    top: '.625rem',
                    right: '.625rem',
                },
                info: {
                    base: {
                        height: '100%',
                        pl: '15px',
                        pr: '15px',
                        pt: '30px',
                        pb: '30px',
                    },
                },
            },
        },

    };
    return { css };
}

export { sx };
