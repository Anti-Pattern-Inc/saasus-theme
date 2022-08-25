import { Alert, AlertTitle, Stack, styled } from '@mui/material'
import { SxProps } from '@mui/system'
import { ReactNode } from 'react'

type Props = Partial<{
  severity: 'error' | 'warning' | 'info' | 'success' // カラーバリエーション
  variant: 'filled' | 'outlined' | 'standard' // デザインバリエーション
  alertHeadingTitle: string // より強調した見出しが必要な時
  children: ReactNode
  square: boolean // (Original) 角丸をなくす時、全幅で敷く時など
  action: ReactNode // 右側に何か表示する時
  sx: SxProps
}>

const AlertInner = styled(Alert)(
  ({ theme }) => `
    padding: ${theme.spacing(1, 4)};
    box-shadow: 0 2px 4px ${theme.colors.alpha.black[10]};

    .MuiAlert-message {
      padding: 7px 0;
    }

    .MuiTypography-root.MuiAlertTitle-root {
      margin: 0;
      font-size: 1em;
      line-height: 1.75;
    }

    .MuiAlert-icon {
      margin-right: ${theme.spacing(1)};
    }

    &.MuiAlert-standardError, &.MuiAlert-outlinedError {
      color: ${theme.colors.error.dark};
    }
    &.MuiAlert-standardWarning, &.MuiAlert-outlinedWarning {
      color: ${theme.colors.warning.dark};
    }
    &.MuiAlert-standardInfo, &.MuiAlert-outlinedInfo {
      color: ${theme.colors.info.dark};
    }
    &.MuiAlert-standardSuccess, &.MuiAlert-outlinedSuccess {
      color: ${theme.colors.success.dark};
    }

  `,
)

export const CustomAlert = ({
  severity,
  variant,
  alertHeadingTitle,
  children,
  square,
  action,
  sx,
}: Props) => {
  return (
    <Stack spacing={4}>
      <AlertInner
        severity={severity || 'error'}
        variant={variant || 'standard'}
        style={{
          borderRadius: square ? 0 : '',
        }}
        sx={sx}
        action={action}
      >
        <AlertTitle>
          <strong>{alertHeadingTitle}</strong>
        </AlertTitle>
        {children}
      </AlertInner>
    </Stack>
  )
}
