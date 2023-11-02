export interface ToggleStaticProps {
    show: () => void;
    hide: () => void;
}

export interface DialogProps {
    title?: string;
    contentPadding?: boolean;
    removeContentOverflow?: boolean;
    showDialogTitle?: boolean;
    onConfirm?: {
        action: () => void;
        text: any;
    }
    onCancel?: {
        action: () => void;
    }
    maxWidth: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    children?: React.ReactNode;
    showDiaglogFooter?: boolean;
    fullScreen?: boolean;
};