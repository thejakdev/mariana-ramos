import Box from "@mui/material/Box"
import FacebookIcon from '../../../../assets/img/svg-icons/facebook.svg';
import XTwitterIcon from '../../../../assets/img/svg-icons/x-twitter.svg';
import InstagramIcon from '../../../../assets/img/svg-icons/instagram.svg';
import WhatsappIcon from '../../../../assets/img/svg-icons/whatsapp.svg';
import { Container, Divider, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { sx } from './sx';
import React from "react";
import { socialList } from '../../../../static';

interface MobileMenuProps {
    children: React.ReactNode;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ children }: MobileMenuProps) => {
    const { css } = sx();
    const { typography, palette } = useTheme();

    return (
        <>
            <Box sx={{
                position: 'fixed',
                background: 'white',
                top: '61px',
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 140,
            }}>
                <Box mt={'.625rem'}>
                    {children}
                </Box>
                <Divider light />
                <Container maxWidth="md">
                    <Box mt='1.25rem'>
                        <Typography
                            variant="body1"
                            component='h1'
                            fontSize='1.125rem'
                            fontWeight={typography.fontWeightBold}
                            sx={{
                                color: palette.darksalmon,
                            }}>
                            Fale comigo
                        </Typography>
                        <Typography
                            variant="body1"
                            component='p'
                            fontSize='.8125rem'
                            fontWeight={typography.fontWeightLight}
                            sx={{
                                color: palette.lightdark,
                            }}>
                            Fale comigo através das minhas redes sociais
                        </Typography>
                    </Box>
                    <Box mt='.9375rem'>
                        <Stack direction='row' spacing={1}>
                            {socialList.map(({ id, title, href, icon, active }) => {
                                if (!active) return;
                                return (
                                    <IconButton
                                        key={id}
                                        color="secondary"
                                        aria-label={title}
                                        sx={css.header.nav.mobile.social.button}
                                    >
                                        <a
                                            rel='noopener noreferrer'
                                            href={href}
                                            target='_blank'>
                                            <img src={icon} />
                                        </a>
                                    </IconButton>
                                )
                            })}
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export { MobileMenu };