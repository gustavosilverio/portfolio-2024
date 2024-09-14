export interface GenericElementProps {
    children?: React.ReactNode;
    className?: string;
}

export interface ListProps extends GenericElementProps {
    items: string[]
}

export interface LinkProps extends GenericElementProps {
    href: string
}