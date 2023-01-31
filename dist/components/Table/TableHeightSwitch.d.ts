import { ChangeEvent } from 'react';
import { SxProps } from '@mui/system';
declare type Props = {
    checked: boolean;
    onChange: (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    sxStyle?: SxProps;
    label?: string;
};
export declare const TableHeightSwitch: ({ checked, onChange, sxStyle, label, ...props }: Props) => JSX.Element;
export {};
//# sourceMappingURL=TableHeightSwitch.d.ts.map