import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string
  children: React.ReactNode;
  className?: string,
  activeClassName?: string,
  onClick?: (e: any) => void,
}

export default function NavLink ({href, children, className, onClick, activeClassName}: Props) {
  const pathname = usePathname();

  if (!href.endsWith("/")) {
    href = `${href}/`
  }

  const props: Record<string, any> = {
    href: href,
    className: className || "",
  }

  if (activeClassName && (pathname == href || pathname == `${href}/`)) {
    props["className"]+= " " + activeClassName
  }

  if (onClick) {
    props["onClick"] = (e: any) => onClick(e)
  }

  return <Link
    href={href}
    {...props}>
    {children}
  </Link>
}
