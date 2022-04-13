import Link from "next/link";
import { ItemLinkProps } from "./types";

export function ItemLink(props: ItemLinkProps) {
  let { href, children, ...rest } = props;

  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}
