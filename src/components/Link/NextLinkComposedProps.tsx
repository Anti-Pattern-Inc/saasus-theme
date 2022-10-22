import { LinkProps as NextLinkProps } from 'next/link'
import * as React from 'react'

export type Props = Omit<
  NextLinkProps,
  'href' | 'as' | 'onClick' | 'onMouseEnter'
>

export interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Props {
  to: NextLinkProps['href']
  linkAs?: NextLinkProps['as']
  href?: NextLinkProps['href']
}
