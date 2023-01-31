// emotion
import createCache from '@emotion/cache'
export function createEmotionCache() {
  return createCache({
    key: 'css',
    stylisPlugins: [],
  })
}
// components
export { CustomTable } from './components/Table/CustomTable'
export { CustomTableContainer } from './components/Table/CustomTableContainer'
export { CustomTableHeader } from './components/Table/CustomTableHeader'
export { CustomTableRow } from './components/Table/CustomTableRow'
export { CustomTableCell } from './components/Table/CustomTableCell'
export { CustomTableCellAction } from './components/Table/CustomTableCell'
export { CustomTableCellActionBody } from './components/Table/CustomTableCellActionBody'
export { CustomTableFilterResult } from './components/Table/CustomTableFilterResult'
export { CustomTableFilter } from './components/Table/CustomTableFilter'
export { TableHeightSwitch } from './components/Table/TableHeightSwitch'
export { AccordionWrap } from './components/Box/AccordionWrap'
export { CustomAlert } from './components/Alert/CustomAlert'
export { CustomContainer } from './components/Container/CustomContainer'
export { default as BoxContent } from './components/Box/BoxContent'
export { default as BoxWrap } from './components/Box/BoxWrap'
export { ButtonWrap } from './components/Button/ButtonWrap'
export { CustomButton } from './components/Button/CustomButton'
export { default as ConfirmDialog } from './components/ConfirmDialog'
export { CustomLabel } from './components/Form/CustomLabel'
export { RadioButton } from './components/Form/RadioButton'
export { default as MainTitleSet } from './components/Text/MainTitleSet'
export { default as TitleSet } from './components/Text/TitleSet'
export { default as Text } from './components/Text'
export { CustomTooltip } from './components/Tooltip/CustomTooltip'
// assets
export { default as SaaSusLogo } from './components/SaaSusLogo'
// theme
export { themeCreator } from './theme/base'
export {
  default as SaaSusThemeProvider,
  ThemeContext,
} from './theme/ThemeProvider'
