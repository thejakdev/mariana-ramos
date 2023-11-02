import { Box, Button, Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import hero from '../../../../assets/img/hero.png';
import { sx } from './sx';

interface HeroProps {
    onClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onClick }: HeroProps) => {
    const { typography, palette } = useTheme();
    const matches600 = useMediaQuery('(min-width:600px)');

    const { css } = sx();

    return (
        <Box sx={css.hero.base}>

            <Container maxWidth="md" sx={css.hero.container}>
                <Box sx={css.hero.content.base}>
                    <Box>
                        <Typography
                            variant="body1"
                            component='h1'
                            fontSize={matches600 ? '.875rem' : '.625rem'}
                            letterSpacing={4}
                            textTransform='uppercase'
                            gutterBottom
                            fontWeight={typography.fontWeightRegular}
                            sx={{
                                color: palette.dark,
                            }}>
                            advocacia
                        </Typography>
                        <Typography
                            variant="body1"
                            component='h1'
                            fontSize={matches600 ? '48px' : '22px'}
                            lineHeight={1.2}
                            fontWeight={typography.fontWeightBold}
                            whiteSpace='nowrap'
                            sx={{
                                color: palette.dark,
                            }}>
                            Mariana Ramos
                        </Typography>
                        <Typography
                            variant="body1"
                            component='h1'
                            fontSize={matches600 ? '48px' : '22px'}
                            lineHeight={1.2}
                            fontWeight={typography.fontWeightBold}
                            mb={matches600 ? '.9375rem' : '.625rem'}
                            sx={{
                                color: palette.dark,
                            }}>
                            Advocacia
                        </Typography>
                        <Typography
                            variant="body1"
                            component='h1'
                            fontSize={matches600 ? '.875rem' : '.75rem'}
                            fontWeight={matches600 ?
                                typography.fontWeightRegular :
                                typography.fontWeightLight}
                            mb={matches600 ? '1.5rem' : '.875rem'}
                            sx={{
                                color: palette.dark,
                            }}>
                            Mauris vitae lectus vel risus elementum porta in eget
                            lectus. Maecenas interdum id urna ut efficitur.
                        </Typography>
                        <Box>
                            <Button
                                className="MuiButton contained primary"
                                variant="contained"
                                size={matches600 ? "large" : 'medium'}
                                onClick={onClick}>
                                Fale comigo
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={css.hero.content.image}>
                        <img
                            src={hero}
                            alt='Mariana Ramos Advocacia'
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export { Hero };
