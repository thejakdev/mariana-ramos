import { Box, css, Typography, useMediaQuery, useTheme } from "@mui/material";
import { sx } from './sx';

interface HeadlineProps {
    title: string;
    subtitle?: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, subtitle }: HeadlineProps) => {
    const { typography, palette } = useTheme();
    const matches = useMediaQuery('(min-width:600px)');

    const { css } = sx();

    return (
        <Box>
            <Typography
                variant="body1"
                component='h1'
                align='center'
                fontSize={matches ? '42px' : '24px'}
                lineHeight={1.2}
                fontWeight={typography.fontWeightBold}
                whiteSpace='nowrap'
                mb='.3125rem'
                sx={css.headline.title}>
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    variant="body1"
                    align='center'
                    component='p'
                    fontSize={matches ? '.9375rem' : '13px'}
                    fontWeight={typography.fontWeightLight}
                    sx={css.headline.sub}>
                    {subtitle}
                </Typography>
            )}
        </Box>
    )
};

export { Headline };
