import { Chip, InputLabel, styled } from "@mui/material"
import { CustomTooltip } from "components/Tooltip/CustomTooltip"
import { ReactNode } from "react"

// Types
type Props = {
  id?: string // TextFieldがIDを持つ場合、htmlFor同一のIDを設定する。アクセシビリティ的には推奨。UI的には必須ではない。
  TooltipTitleIconComponent?: ReactNode // ツールチップに表示するアイコンとセット。ツールチップ内にテキストかコンポーネントを設置可能。
  TooltipComponent?: ReactNode // トリガーをアイコンでなくテキストを設定する場合はtrue default: false
  children: ReactNode
  OptionalRequired?: ReactNode
  chipLabel?: string
}

const Label = styled(InputLabel)(() => ({
  marginTop: 24,
  fontSize: "14px",
  position: "initial",
  textAlign: "left",
  transform: "none",
  minHeight: "1.85em",
}))

export const CustomLabel = ({
  id,
  TooltipTitleIconComponent,
  TooltipComponent,
  children,
  OptionalRequired,
  chipLabel,
}: Props) => {
  return (
    <>
      <Label htmlFor={id}>
        {children}
        <CustomTooltip
          TooltipTitleIconComponent={TooltipTitleIconComponent}
          TooltipComponent={TooltipComponent}
        />
        {OptionalRequired && (
          <Chip
            size='small'
            label={chipLabel ? chipLabel : "任意"}
            style={{ borderRadius: 4, marginBottom: 1 }}
          />
        )}
      </Label>
    </>
  )
}
