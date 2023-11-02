import { Box, Typography, Button, useTheme } from "@mui/material"
import { sx } from './sx';
import AddIcon from '@mui/icons-material/Add';

interface ContentBoxProps {
    title: string;
    text: string;
    icon: string;
    onClick: () => void;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, text, icon, onClick }: ContentBoxProps) => {
    const { typography } = useTheme();
    const { css } = sx();

    return (
        <Box sx={css.box.base}>
            <Box sx={css.box.icon}>
                <img src={icon} alt='icon house' />
            </Box>
            <Box sx={css.box.info.base}>
                <Typography
                    variant="body1"
                    component='h1'
                    fontSize='18px'
                    fontWeight={typography.fontWeightMedium}
                    mb='10px'
                    sx={css.box.title}>
                        {title}
                </Typography>
                <Typography
                    variant="body1"
                    component='h1'
                    fontSize='13px'
                    lineHeight={1.5}
                    fontWeight={typography.fontWeightLight}
                    mb='20px'
                    sx={css.box.title}>
                    {text}
                </Typography>
                <Box sx={css.box.info.button.wrapper}>
                    <Button
                        className="MuiButton outlined primary"
                        variant="outlined"
                        size="medium"
                        sx={css.box.info.button.base}
                        onClick={onClick}>
                        Saiba mais
                        <AddIcon sx={css.box.info.button.icon} />
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export { ContentBox };
