import {
  Button,
  FormControlLabel,
  Radio,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import { SxProps } from '@mui/system'
import { FC, ReactNode } from 'react'

type Props = Partial<{
  sx: SxProps
  AdditionalProps: ReactNode // 右側に何か表示する時
  value: string
  label: string
  disabled: boolean
  helperText: string
  // event
  onClick: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  // status
  checked: boolean
}>

// ヘルパーテキストまで含めたラッピング
const WrapButtonlUI = styled(Stack)(
  () => `
  flexDirectiom: column;
  & + .MuiFormHelperText-root.MuiFormHelperText-contained.MuiFormHelperText-root {
    margin: -4px 12px 4px 12px;
  }
  `,
)

const MinWidth = 200
const MinHeight = 70
const FontWeight = 600

const ClickableElement = `
  position: absolute;
  content: '';
  display: block;
  overflow: hidden;
  min-width: ${MinWidth};
`

const ButtonlUI = styled(Button)(
  ({ theme }) => `
  margin: ${theme.spacing(1)};

  // Button Style
  &.MuiButtonBase-root {

    &.MuiButton-root {
      min-width: ${MinWidth}px;
      min-height: ${MinHeight}px;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 44px;
      padding-bottom: 0px;

      &.Mui-disabled {
        background-color: ${theme.colors.secondary.lighter};
        border: none;
      }

      .MuiButtonBase-root.MuiRadio-root {
        top: 0;
        bottom: 0;
        width: 100%;
        padding-left: 12px;

        // Checked Style
        &.Mui-checked {
          min-width: ${MinWidth}px;
          background-color: ${theme.colors.primary.lighter};
          border: 2px solid ${theme.colors.primary.main};
          height: 100%;
          border-radius: 9px;
          overflow: hidden;

          &:after{
            ${ClickableElement}
            left: -24px;
          }
        }
      }
    }
  }

  // Label Style
  span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.MuiTypography-root {
    font-weight: ${FontWeight};
    color: ${theme.colors.secondary.dark};
    padding-left: 4px;

    &.MuiTypography-body1.MuiTypography-root {
      margin: 0px 0px -24px 0px;
    }
  }

  .MuiTypography-root.MuiTypography-body1.MuiTypography-root+.MuiTypography-root.MuiTypography-body1.MuiTypography-root {
    color: ${theme.colors.secondary.dark};
    font-size: 14px;
  }

  .MuiFormControlLabel-root {
    margin-left: -4px;

    &.MuiFormControlLabel-label {
      fontWeight: 600,
      min-width: ${MinWidth}px;
      font-weight: ${FontWeight};
      text-align: left;
      z-index: 1;
    }

    .MuiButtonBase-root.MuiRadio-root {
      left: 0;
      position: absolute;
      width: 100%;
      justify-content: flex-start;

      &:hover {
        min-width: ${MinWidth}px;
        height: 100%;
        border-radius: 0;
        overflow: hidden;
      }
    }
  }

  .MuiTouchRipple-root.MuiTouchRipple-root {
    min-width: ${MinWidth}px;
    min-height: ${MinHeight}px;
    background-color: ${theme.colors.primary.lighter};
    min-width: ${MinWidth};
    min-height: 100px;
    padding: 0;
    margin-top: -12px;
    margin-left: -4px;
    border-radius: 0;
    overflow: hidden;
    opacity: 0.5;
  }
  `,
)

const FormControlUI = styled(FormControlLabel)(
  () => `
    min-width: ${MinWidth}px;
    `,
)

const OptionComponent = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.primary.main};
      font-weight: ${FontWeight};
      position: absolute;
      right: 10px;
      top: 8px;
      font-size: 12px !important;
      text-align: right;
    `,
)

export const RadioButton: FC<Props> = ({
  label,
  value,
  disabled,
  AdditionalProps,
  helperText,
  onClick,
  checked,
}) => {
  return (
    <>
      <WrapButtonlUI>
        <ButtonlUI variant="outlined" disabled={disabled} onClick={onClick}>
          <FormControlUI
            control={<Radio />}
            label={label}
            value={value}
            checked={checked}
          />
          <Typography>
            <OptionComponent>{AdditionalProps}</OptionComponent>
          </Typography>
          <Typography>{helperText}</Typography>
        </ButtonlUI>
        {/* <FormHelperText style={{ margin: '-4px 12px 12px 12px' }}>
            {helperText}
          </FormHelperText> */}
      </WrapButtonlUI>
    </>
  )
}
