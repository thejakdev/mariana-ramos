import { Box, Button, Container, Grid, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Hero } from "./components/hero";
import { sx } from './sx';
import about from '../../assets/img/about.png';
import { ContentBox, Headline, Image, MuiDialog } from "../../components/design-system";
import CloseIcon from '@mui/icons-material/Close';

import React from "react";
import { ToggleStaticProps } from "../../interfaces";
import { Patterns } from "../../components";
import { data, socialList } from "../../static";
import { ReactSVG } from 'react-svg'

interface ContentDataProps {
    id: string;
    title: string;
    preview: string;
    text: string;
    icon: string;
    cover: string;
};

const DEFAULTS = {
    CONTENT: {
        isLoaded: false,
        data: {} as ContentDataProps,
    }
}

const Home: React.FC = () => {
    const { typography, palette } = useTheme();
    const matches = useMediaQuery('(min-width:600px)');
    const matches992 = useMediaQuery('(min-width:992px)');
    const refEl = React.useRef<HTMLDivElement>(null);
    const refHome = React.useRef<HTMLDivElement>(null);
    const refAbout = React.useRef<HTMLDivElement>(null);
    const refAreas = React.useRef<HTMLDivElement>(null);

    const ref = React.useRef<ToggleStaticProps>(null);
    const [content, setContent] = React.useState(DEFAULTS.CONTENT);

    const { css } = sx();

    const scrollToElement = (r: React.RefObject<HTMLDivElement>) => {
        setTimeout(() => {
            const lastChildElement = r.current;
            lastChildElement?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
        setContent(DEFAULTS.CONTENT);
    };

    const getInTouch = () => {
        ref.current?.hide();
        scrollToElement(refEl);
    }

    const handleCloseDialog = () => {
        ref.current?.hide();
        setContent(DEFAULTS.CONTENT);
    }

    const handleDialog = (id: string) => {
        setContent(DEFAULTS.CONTENT);
        const find = data.find((item) => item.id === id);

        if (find) {
            setContent((prev) => prev = {
                isLoaded: true,
                data: find,
            });
        }

        setTimeout(() => {
            ref.current?.show();
        }, 100);
    }

    return (
        <Box>
            <div ref={refHome} />
            <Patterns.Header actions={{
                home: () => scrollToElement(refHome),
                about: () => scrollToElement(refAbout),
                areas: () => scrollToElement(refAreas),
                contact: () => scrollToElement(refEl),
            }} />
            <Hero onClick={() => scrollToElement(refEl)} />
            <Box mt={matches ? '3.75rem' : '20px'}>
                <Container maxWidth="lg">
                    <Grid container sx={css.about.base}>
                        {matches992 && (
                            <Grid item md={5} xs={8}>
                                <Box pt='1.25rem' />
                                <Image
                                    src={about}
                                    alt='Mariana Ramos Advocacia'
                                    objectFit='contain'
                                    maxHeight={555}
                                />
                            </Grid>
                        )}
                        <div ref={refAbout} />
                        <Grid item md={7} xs={12}>
                            <Box sx={css.about.content.base}>
                                <Box>
                                    <Typography
                                        variant="body1"
                                        component='h1'
                                        fontSize={matches ? '36px' : '16px'}
                                        lineHeight={1.2}
                                        fontWeight={typography.fontWeightBold}
                                        whiteSpace='nowrap'
                                        mb={matches ? '.9375rem' : '.5rem'}
                                        sx={css.about.content.text}>
                                        Sobre Mim
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component='h1'
                                        fontSize={matches ? '.9375rem' : '.75rem'}
                                        fontWeight={typography.fontWeightLight}
                                        sx={css.about.content.text}>
                                        Chamo-me Mariana Ramos, sou advogada e fundadora deste escritório e atuo
                                        como advogada autônoma especializada nas áreas de Direito de Família e
                                        Sucessões, Direito Médico e Regularização de Imóveis. Além disso, mantenho
                                        parcerias com excelentes advogados de diversas áreas do direito, tanto a
                                        nível nacional quanto internacional.
                                        <br />
                                        <br />
                                        Mariana Ramos é advogada atuante desde 2018, oferece uma equipe
                                        multidisciplinar que possuem habilidades técnicas diversas com o melhor
                                        assessoramento jurídico, preventivo ou contencioso com credibilidade e ética.
                                        <br />
                                        <br />
                                        O escritório tem como principal objetivo oferecer soluções jurídicas
                                        personalizadas, respeitando às diferenças e valorização do sentimento
                                        de ambas as partes, priorizando a solução consensual dos conflitos,
                                        atuando com empatia se preocupando em encontrar a melhor solução
                                        possível para cada cliente.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box pt={matches ? '5rem' : '30px'} ref={refAreas}>
                        <Headline
                            title="Áreas de atuação"
                            subtitle="Conheça as minhas áreas de atuação"
                        />
                        <Box mt='20px'>
                            <Grid container spacing={2}>
                                {data.map(({ id, title, preview, icon }, i, arr) => (
                                    <>
                                        {matches && i + 1 === arr.length && (
                                            <Grid item md={4} sm={3} xs={12} />
                                        )}
                                        <Grid item md={4} sm={6} xs={12}>
                                            <ContentBox
                                                key={id}
                                                title={title}
                                                text={preview}
                                                icon={icon}
                                                onClick={() => handleDialog(id)}
                                            />
                                        </Grid>
                                    </>
                                ))}
                            </Grid>
                        </Box>
                    </Box>

                </Container>
                <Box
                    ref={refEl}
                    mt={matches ? '5rem' : '30px'}
                    pt={matches ? '5rem' : '30px'}
                    pb={matches ? '5rem' : '30px'}
                    sx={{
                        backgroundColor: palette.grey[50],
                    }}>
                    <Container maxWidth="lg">

                        <Headline
                            title="Fale Comigo"
                            subtitle="Fale comigo através das minhas redes sociais"
                        />
                        <Box mt={matches ? '1.5625rem' : '.9375rem'}>

                            <Stack direction='row' justifyContent='center' spacing={1}>
                                {socialList.map(({ id, title, href, icon, active }) => {
                                    if (!active) return;
                                    return (
                                        <IconButton
                                            key={id}
                                            color="secondary"
                                            aria-label={title}
                                            sx={css.social.button}
                                        >
                                            <Box
                                                component='a'
                                                rel='noopener noreferrer'
                                                href={href}
                                                target='_blank'
                                                sx={{
                                                    '&>div': {
                                                        lineHeight: 0,
                                                    }
                                                }}>
                                                <ReactSVG src={icon} />
                                            </Box>
                                        </IconButton>
                                    )
                                })}
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>

            <MuiDialog
                maxWidth="md"
                ref={ref}
                fullScreen={!matches}>
                <Grid container spacing={matches ? 2 : 0}>
                    <Grid item md={6} xs={12}>
                        {content.isLoaded ? (
                            <Box sx={{
                                position: 'relative',
                            }}>
                                {!matches && (
                                    <IconButton sx={css.dialog.cover.closeButton}
                                        onClick={handleCloseDialog}>
                                        <CloseIcon sx={css.dialog.closeButtonIcon} />
                                    </IconButton>
                                )}
                                <Image src={content.data.cover} maxHeight={matches ? 584 : 222} alt='image #1' />
                            </Box>
                        ) : ''}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        {content.isLoaded ? (
                            <Box sx={css.dialog.content.base}>
                                {matches && (
                                    <IconButton sx={css.dialog.content.closeButton}
                                        onClick={handleCloseDialog}>
                                        <CloseIcon sx={css.dialog.closeButtonIcon} />
                                    </IconButton>
                                )}
                                <Box sx={css.dialog.content.info.base}>
                                    <Box height={matches ? '100%' : 'auto'} maxHeight={matches ? '462px' : 'none'} overflow='auto'>
                                        <Typography
                                            variant="body1"
                                            component='h1'
                                            fontSize={matches ? '36px' : '24px'}
                                            fontWeight={typography.fontWeightBold}
                                            mb='.625rem'
                                            sx={css.dialog.title}>
                                            {content.data.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            component='h1'
                                            fontSize={matches ? '14px' : '13px'}
                                            fontWeight={typography.fontWeightLight}
                                            mb='1.875rem'
                                            sx={css.dialog.title}>
                                            {content.data.text}
                                        </Typography>
                                    </Box>
                                    <Box pt={matches ? '15px' : '0'}>
                                        <Button
                                            className="MuiButton contained primary"
                                            variant="contained"
                                            size={"large"}
                                            onClick={getInTouch}>
                                            Fale comigo
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ) : ''}
                    </Grid>
                </Grid>
            </MuiDialog>
        </Box>
    )
}

export { Home };
