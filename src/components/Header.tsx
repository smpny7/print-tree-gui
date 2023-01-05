import clsx from "clsx";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  const router = useRouter();
  const { version } = require("/package.json");

  return (
    <div className="p-4">
      <div className="navbar rounded-box mb-2 bg-neutral text-neutral-content shadow-lg">
        {/* 戻るボタン */}
        {router.pathname !== "/" && renderBackButton()}

        {/* ロゴ・タイトル */}
        <div className="mx-2 flex flex-1 items-center px-2 text-lg font-bold">
          <Link href="/" className="flex">
            <Image
              src="/icon-192x192.png"
              className="mr-3 hidden sm:inline"
              height={24}
              width={24}
              alt="Print Tree GUI"
            />
            <h1>Print Tree GUI</h1>
          </Link>
          <p className="badge ml-2 hidden lg:block">ver {version}</p>
        </div>

        {/* ナビゲーション */}
        <nav className="flex-none">
          <div className="hidden md:flex">{renderDesktopNav()}</div>
          <div className="md:hidden">{renderMobileNav()}</div>
        </nav>
      </div>
    </div>
  );
};

const renderBackButton = () => (
  <Link href="/" className="btn-ghost btn-square btn flex-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="h-6 w-6"
    >
      <path
        stroke="#2094F3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  </Link>
);

const renderDesktopNav = () => (
  <ul className="mx-2 flex items-stretch px-2">
    {links.map(({ href, label, className }, index) => (
      <li key={index}>
        <Link href={href} className="btn-ghost rounded-btn btn-sm btn">
          <i className={clsx("mr-2", className)} />
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const renderMobileNav = () => (
  <div className="dropdown-end dropdown">
    <div tabIndex={0} className="btn-ghost rounded-btn btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-6 w-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>

    <ul className="dropdown-content menu rounded-box w-52 bg-neutral p-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)]">
      {links.map(({ href, label, className }, index) => (
        <li key={index}>
          <Link href={href} className="btn-ghost rounded-btn btn-sm btn">
            <i className={clsx("mr-2", className)} />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const links = [
  {
    href: "/how-to-use",
    label: "How to use",
    className: "ri-question-line ri-xl",
  },
  { href: "/generator", label: "Generator", className: "ri-code-line ri-xl" },
  {
    href: "https://github.com/smpny7/print-tree-gui",
    label: "GitHub",
    className: "ri-github-line ri-xl",
  },
];

export default Header;
