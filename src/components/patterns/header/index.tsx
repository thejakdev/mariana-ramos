import Box from "@mui/material/Box"
import { Image } from "../../design-system";
import logo from '../../../assets/img/logo.png';
import { Button, Container, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { sx } from './sx';
import { menu } from "../../../static";
import React from "react";
import { MobileMenu } from "../mobile/menu";
import { useLocation } from 'react-router-dom';
import WhatsappIcon from '../../../assets/img/svg-icons/whatsapp.svg';

interface HeaderProps {
    actions: {
        home?: () => void;
        about?: () => void;
        areas?: () => void;
        contact?: () => void;
    }
}

const Header: React.FC<HeaderProps> = ({ actions }: HeaderProps) => {
    const { css } = sx();
    const { typography } = useTheme();
    const matches = useMediaQuery('(min-width:600px)');

    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    const handleMenu = ({ type, callback }: { type: 'open' | 'close', callback?: () => void }) => {
        switch (type) {
            case 'open':
                setOpen(true);
                document.body.classList.add('overflow-h');
                break;
            case 'close':
                setOpen(false);
                document.body.classList.remove('overflow-h');
                break;
            default:
                break;
        }

        if (callback) {
            callback();
        }
    };

    return (
        <>
            <IconButton
                color="secondary"
                aria-label="whatsapp"
                sx={css.whatsapp}
            >
                <a
                    rel='noopener noreferrer'
                    href='https://api.whatsapp.com/message/YXHE5PJQCEVGL1'
                    target='_blank'>
                    <img src={WhatsappIcon} />
                </a>
            </IconButton>
            <Box sx={css.header.base(matches)}>
                <Container maxWidth="lg" sx={css.header.container}>
                    <Box sx={css.header.wraper}>
                        <Box onClick={actions.home}>
                            <Image
                                src={logo}
                                alt='Mariana Ramos Advocacia'
                                objectFit='contain'
                                maxHeight={43}
                            />
                        </Box>
                        {matches && (
                            <Stack direction='row' alignItems='stretch' spacing={0.5} height='100%'>
                                {menu.map(({ id, title, hash }, i) => {

                                    let click;
                                    switch (hash) {
                                        case '#home':
                                            click = actions.home;
                                            break;
                                        case '#about':
                                            click = actions.about;
                                            break;
                                        case '#areas':
                                            click = actions.areas;
                                            break;
                                        default:
                                            break;
                                    }

                                    return (
                                        <Typography
                                            key={id}
                                            variant="body1"
                                            component='a'
                                            href={hash}
                                            fontWeight={typography.fontWeightMedium}
                                            sx={css.header.nav.item(hash === location.hash).wraper}
                                            onClick={click}>
                                            {title}
                                            <Box sx={css.header.nav.item(hash === location.hash).overlay} />
                                        </Typography>
                                    )
                                })}
                                <Box sx={css.header.contactButton.wrapper}>
                                    <Button
                                        className="MuiButton outlined primary"
                                        variant="outlined"
                                        size="medium"
                                        sx={css.header.contactButton.button}
                                        onClick={actions.contact}>
                                        Contato
                                    </Button>
                                </Box>
                            </Stack>
                        )}
                        {!matches && (
                            !open ? (
                                <IconButton
                                    color="secondary"
                                    aria-label="open menu"
                                    onClick={() => handleMenu({ type: 'open' })}>
                                    <MenuIcon sx={css.header.nav.mobile.menu.openIcon} />
                                </IconButton>
                            ) : (

                                <IconButton
                                    color="secondary"
                                    aria-label="close menu"
                                    onClick={() => handleMenu({ type: 'close' })}>
                                    <CloseIcon sx={css.header.nav.mobile.menu.closeIcon} />
                                </IconButton>
                            )
                        )}
                    </Box>
                </Container>
            </Box>
            {!matches && open && (
                <MobileMenu>
                    <Stack alignItems='stretch'>
                        {menu.map(({ id, title, hash }) => {
                            let click: any;
                            switch (hash) {
                                case '#home':
                                    click = actions.home;
                                    break;
                                case '#about':
                                    click = actions.about;
                                    break;
                                case '#areas':
                                    click = actions.areas;
                                    break;
                                default:
                                    break;
                            }
                            return (
                                <Typography
                                    key={id}
                                    variant="body1"
                                    component='a'
                                    href={hash}
                                    onClick={() => handleMenu({ type: 'close', callback: () => click() })}
                                    fontWeight={typography.fontWeightMedium}
                                    sx={css.header.nav.mobile.item(hash === location.hash).wraper}>
                                    {title}
                                </Typography>
                            )
                        })}
                    </Stack>
                </MobileMenu>
            )}
        </>
    )
}

export { Header };