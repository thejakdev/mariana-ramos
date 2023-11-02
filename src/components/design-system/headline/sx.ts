import { useMediaQuery, useTheme } from "@mui/material";

const sx = () => {
    const { palette } = useTheme();
    const matches = useMediaQuery('(min-width:600px)');

    const css = {
        headline: {
            title: {
                color: palette.darksalmon,
            },
            sub: {
                color: palette.lightdark,
            },
        },
    };
    return { css };
}

export { sx };
