import { ReactNode } from 'react';
declare type Props = {
    open: boolean;
    onClose: () => void;
    buttons: {
        text: string;
        dataTestid?: string;
        submit: () => void | Promise<void>;
        isSubmitting: boolean;
    }[];
    Text: ReactNode;
    SubText?: ReactNode;
    color: 'error' | 'warning';
};
declare const ConfirmDialog: ({ open, onClose, buttons, SubText, Text, color, }: Props) => JSX.Element;
export default ConfirmDialog;
//# sourceMappingURL=index.d.ts.map