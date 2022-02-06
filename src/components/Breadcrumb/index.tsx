import styles from './styles.module.scss';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type PathArrayType = {
  breadcrumb: string;
  href: string;
}

const convertBreadcrumb = (UrlPath: string) => {
  return UrlPath
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase();
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<null | PathArrayType[]>(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs" className={styles.breadcrumbContainer}>
      <ol className={styles.breadcrumbContent}>
        <li className={styles.breadcrumb}>
          <Link href="/">HOME</Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          if (i === breadcrumbs.length-1) {
            return (
              <>
                <span>/</span>
                <li className={styles.breadcrumbCurrent} key={breadcrumb.href}>
                  <Link href={breadcrumb.href}>
                    <a>
                      {convertBreadcrumb(breadcrumb.breadcrumb)}
                    </a>
                  </Link>
                </li>
              </>
            )
          }
          return (
            <>
              <span>/</span>
              <li className={styles.breadcrumb} key={breadcrumb.href}>
                <Link href={breadcrumb.href}>
                  <a>
                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                  </a>
                </Link>
              </li>
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
