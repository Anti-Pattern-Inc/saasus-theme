import { ReactNode } from 'react';
declare type Props = {
    open: boolean;
    onClose: () => void;
    deleteButtons: {
        text: string;
        submit: () => void | Promise<void>;
    }[];
    Text: ReactNode;
    SubText?: ReactNode;
    color: 'error' | 'warning';
};
declare const ConfirmDialog: ({ open, onClose, deleteButtons, SubText, Text, color, }: Props) => JSX.Element;
export default ConfirmDialog;
//# sourceMappingURL=index.d.ts.map