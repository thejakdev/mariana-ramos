import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {
    Button,
    DialogActions,
    DialogContent,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { DialogProps, ToggleStaticProps } from '../../../interfaces';
import CloseIcon from '@mui/icons-material/Close';
const STATIC_PROPS: ToggleStaticProps = {
    show: () => Boolean,
    hide: () => Boolean,
};

const MuiDialog: ForwardRefExoticComponent<DialogProps &
    RefAttributes<typeof STATIC_PROPS>> = React.forwardRef((props, ref) => {
        const {
            title,
            showDialogTitle,
            children,
            onConfirm,
            onCancel,
            maxWidth,
            showDiaglogFooter,
            fullScreen,
            contentPadding,
            removeContentOverflow,
        } = props;
        const { typography, palette } = useTheme();
        const matches = useMediaQuery('(min-width:600px)');

        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

        const handleCancel = () => {
            setOpen(false);
        };

        React.useImperativeHandle(ref, () => ({
            show: () => handleClickOpen(),
            hide: () => handleClose(),
        }));

        return (
            <>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={
                        (_, reason) => {
                            if (reason !== 'backdropClick') {
                                handleClose();
                            }
                        }
                    }
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    maxWidth={maxWidth}
                    hideBackdrop={false}
                    fullWidth
                >
                    {showDialogTitle && (
                        <DialogTitle id="scroll-dialog-title"
                            sx={{
                                fontWeight: typography.fontWeightBold,
                                fontSize: !matches ? 18 : 20,
                            }}>
                            {title}
                            <IconButton
                                aria-label="close"
                                onClick={onCancel?.action ?
                                    onCancel?.action :
                                    handleCancel}
                                sx={{
                                    position: 'absolute',
                                    right: 10,
                                    top: 12,
                                }}
                            >
                                <CloseIcon sx={{
                                    fontSize: '1.25rem',
                                }} />
                            </IconButton>
                        </DialogTitle>
                    )}
                    {children && (
                        <DialogContent dividers sx={{
                            padding: contentPadding ? '16px 24px' : 0,
                            overflow: removeContentOverflow ? 'hidden' : 'initial',
                        }}>
                            {children}
                        </DialogContent>
                    )}
                    {onConfirm?.action ? (
                        <DialogActions>
                            {onCancel && (
                                <Button
                                    onClick={onCancel?.action ?
                                        onCancel?.action :
                                        handleCancel}
                                    sx={{
                                        color: palette.grey[800],
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {onConfirm ? 'Cancelar' : 'Ok'}
                                </Button>
                            )}
                            {onConfirm && (
                                <Button
                                    onClick={onConfirm.action}
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                    }}>{onConfirm.text}</Button>
                            )}
                        </DialogActions>
                    ) : showDiaglogFooter && (
                        <DialogActions>
                            <Button
                                onClick={onCancel?.action ?
                                    onCancel?.action :
                                    handleCancel}
                                sx={{
                                    color: palette.grey[800],
                                    fontWeight: 'bold',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Ok
                            </Button>
                        </DialogActions>
                    )}

                </Dialog>
            </>
        );
    });

export { MuiDialog };
