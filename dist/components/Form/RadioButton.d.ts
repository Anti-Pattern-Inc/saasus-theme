import { SxProps } from '@mui/system';
import { FC, ReactNode } from 'react';
declare type Props = Partial<{
    sx: SxProps;
    AdditionalProps: ReactNode;
    value: string;
    label: string;
    disabled: boolean;
    helperText: string;
    onClick: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    checked: boolean;
}>;
export declare const RadioButton: FC<Props>;
export {};
//# sourceMappingURL=RadioButton.d.ts.map