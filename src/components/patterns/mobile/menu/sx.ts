import { useTheme } from "@mui/material";

const sx = () => {
    const { palette } = useTheme();

    const css = {
        header: {
            base: (response: boolean) => {
                return {
                    height: !response ? '60px' : '80px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }
            },
            container: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
            },
            wraper: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
            },
            nav: {
                item: (active: boolean) => {

                    return {
                        wraper: {
                            backgroundColor: palette.common.white,
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            pl: '1.25rem',
                            pr: '1.25rem',
                            textDecoration: 'none',
                            fontSize: '.875rem',
                            color: active ? palette.darksalmon : palette.lightdark,
                        },
                        overlay: {
                            width: '100%',
                            height: '.1875rem',
                            background: palette.darksalmon,
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            display: active ? 'block' : 'none',
                        }
                    }
                },
                mobile: {
                    menu: {
                        openIcon: {
                            color: palette.lightdark,
                            fontSize: 28,
                        },
                        closeIcon: {
                            color: palette.lightdark,
                            fontSize: 22,
                        },
                    },
                    item: (active: boolean) => {

                        return {
                            wraper: {
                                backgroundColor: palette.common.white,
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                                pl: '15px',
                                pr: '15px',
                                pt: '12px',
                                pb: '12px',
                                textDecoration: 'none',
                                fontSize: '.875rem',
                                color: active ? palette.darksalmon : palette.lightdark,
                                borderLeft: active ? '.125rem solid ' + palette.darksalmon : 0,
                            },
                        }
                    },
                    social: {
                        button: {
                            backgroundColor: palette.lightdark,
                            width: '2.375rem',
                            maxWidth: '2.375rem',
                            height: '2.375rem',
                            '& > a': {
                                display: 'flex',
                            },
                        },
                    }
                },
            },
            contactButton: {
                wrapper: {
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                },
                button: {
                    ml: '1.875rem',
                }
            },
        },
    };
    return { css };
}

export { sx };
