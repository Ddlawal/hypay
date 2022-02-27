import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

type NextLinkProps = LinkProps & Omit<React.ComponentProps<'a'>, 'href'>

export const NextLink: FC<NextLinkProps> = (props) => {
    const { href, as, replace, scroll, shallow, passHref, prefetch, locale, children, className, ...aProps } = props
    return (
        <Link
            href={href}
            as={as}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref={passHref}
            prefetch={prefetch}
            locale={locale}
        >
            <a {...aProps} className={className}>
                {children}
            </a>
        </Link>
    )
}
