'use client';

import { useActivePath } from '@/app/_utils/helper';
import Link from 'next/link';

type navItem = {
  id: number;
  name: string;
  href: string;
};

type ItemsProps = {
  items: navItem[];
};

const NavLinks = ({ items }: ItemsProps) => {
  const checkActivePath = useActivePath();

  return (
    <>
      {items.map(({ id, name, href }) => {
        return (
          <Link
            key={id}
            href={href}
            style={{ fontWeight: checkActivePath(href) ? 'bold' : 'normal', marginRight: '24px' }}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
