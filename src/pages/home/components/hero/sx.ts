import { useMediaQuery, useTheme } from "@mui/material";

const sx = () => {
    const { palette } = useTheme();
    const matches600 = useMediaQuery('(min-width:600px)');

    const css = {
        hero: {
            base: {
                height: matches600 ? '36.625rem' : '21.0625rem',
                width: '100%',
                backgroundColor: palette.lightsalmon,
            },
            container: {
                height: '100%',
                overflow: 'hidden',
            },
            content: {
                base: {
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                },
                image: {
                    ml: !matches600 ? '15px' : '120px',
                    mt: '38px',
                    '& > img': {
                        width: !matches600 ? '190px' : '336px',
                    },
                },
            },
        },
    };
    return { css };
}

export { sx };
