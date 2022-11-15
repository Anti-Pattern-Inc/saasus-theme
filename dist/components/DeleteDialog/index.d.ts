import { ReactNode } from 'react';
declare type Props = {
    open: boolean;
    DeleteItem: ReactNode;
    handleDeleteCompleted: () => Promise<void>;
    closeDeleteDialog: () => void;
};
declare const DeleteDialog: ({ open, DeleteItem, handleDeleteCompleted, closeDeleteDialog, }: Props) => JSX.Element;
export default DeleteDialog;
//# sourceMappingURL=index.d.ts.map