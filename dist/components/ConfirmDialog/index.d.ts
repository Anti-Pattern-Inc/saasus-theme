import { ReactNode } from 'react';
declare type Props = {
    open: boolean;
    onClose: () => void;
    buttons: {
        text: string;
        dataTestid?: string;
        submit: () => void | Promise<void>;
    }[];
    Text: ReactNode;
    SubText?: ReactNode;
    color: 'error' | 'warning';
};
export declare const ConfirmDialog: ({ open, onClose, buttons, SubText, Text, color, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map