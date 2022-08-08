import { jsx as _jsx } from "react/jsx-runtime";
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({});
export const NextLinkComposed = React.forwardRef(function NextLinkComposed(props, ref) {
    const { to, linkAs, href, replace, scroll, shallow, prefetch, locale, ...other } = props;
    return (_jsx(NextLink, { href: to, prefetch: prefetch, as: linkAs, replace: replace, scroll: scroll, shallow: shallow, passHref: true, locale: locale, children: _jsx(Anchor, { ref: ref, ...other }) }));
});
// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = React.forwardRef(function Link(props, ref) {
    const { activeClassName = 'active', as: linkAs, className: classNameProps, href, noLinkStyle, role, // Link don't have roles.
    ...other } = props;
    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });
    const isExternal = typeof href === 'string' &&
        (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);
    if (isExternal) {
        if (noLinkStyle) {
            return _jsx(Anchor, { className: className, href: href, ref: ref, ...other });
        }
        return _jsx(MuiLink, { className: className, href: href, ref: ref, ...other });
    }
    if (noLinkStyle) {
        return (_jsx(NextLinkComposed, { className: className, ref: ref, to: href, ...other }));
    }
    return (_jsx(MuiLink, { component: NextLinkComposed, linkAs: linkAs, className: className, ref: ref, to: href, ...other }));
});
export default Link;
//# sourceMappingURL=index.js.map