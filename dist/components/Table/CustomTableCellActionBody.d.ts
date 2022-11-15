/// <reference types="react" />
import { TableCellProps } from '@mui/material';
declare type ElementProps = TableCellProps;
declare type Props = Partial<{
    onClickEdit: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickDelete: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    hasEdit: boolean;
    editTitle: string;
    hasDelete: boolean;
    deleteTitle: string;
    testItem: string;
}>;
export declare const CustomTableCellActionBody: ({ hasEdit, editTitle, hasDelete, deleteTitle, onClickEdit, onClickDelete, testItem, ...props }: Props & ElementProps) => JSX.Element;
export {};
//# sourceMappingURL=CustomTableCellActionBody.d.ts.map