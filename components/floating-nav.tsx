"use client";

import {
  Award,
  ExternalLink,
  Folder,
  House,
  Mail,
  MoreHorizontal,
  UserRound,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { ScrambleText } from "@/components/scramble-text";
import { GitHubMark, LinkedInMark } from "@/components/brand-icons";
import { publicEmailHref } from "@/data/contact";

const routeItems = [
  { key: "home", href: "/", icon: House },
  { key: "projects", href: "/projects", icon: Folder },
  { key: "lab", href: "/lab", icon: Award },
  { key: "about", href: "/about", icon: UserRound },
] as const;

const socialItems = [
  { label: "GitHub", href: "https://github.com/jigark712", icon: GitHubMark },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jigar-kanakhara-66a9621ba",
    icon: LinkedInMark,
  },
] as const;


function routeIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function FloatingNav() {
  const pathname = usePathname();
  const { copy } = useLanguage();
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      <nav className="floating-nav desktop-nav" aria-label={copy.nav.ariaLabel}>
        {routeItems.map((item) => {
          const Icon = item.icon;
          const label = copy.nav[item.key];
          const active = routeIsActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              className="nav-action"
              href={item.href}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              data-active={active || undefined}
            >
              <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
              <span className="nav-tooltip" role="tooltip"><ScrambleText text={label} /></span>
              {active ? <motion.span layoutId="nav-dot" className="nav-dot" /> : null}
            </Link>
          );
        })}
        <span className="nav-divider" aria-hidden="true" />
        {socialItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              className="nav-action"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} (${copy.nav.opensNewTab})`}
            >
              <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
              <span className="nav-tooltip" role="tooltip">{item.label}</span>
            </a>
          );
        })}
        <a
          className="nav-action"
          href={publicEmailHref}
          aria-label={copy.nav.emailMarvel}
        >
          <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
          <span className="nav-tooltip" role="tooltip"><ScrambleText text={copy.nav.email} /></span>
        </a>
      </nav>

      <AnimatePresence>
        {moreOpen ? (
          <motion.div
            className="mobile-more"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16 }}
          >
            <div className="mobile-more-head">
              <span><ScrambleText text={copy.nav.more} /></span>
              <button type="button" onClick={() => setMoreOpen(false)} aria-label={copy.nav.closeMore}>
                <X aria-hidden="true" size={18} />
              </button>
            </div>
            {socialItems.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden="true" size={18} />
                  <span>{item.label}</span>
                  <ExternalLink aria-hidden="true" size={14} />
                </a>
              );
            })}
            <a href={publicEmailHref} onClick={() => setMoreOpen(false)}>
              <Mail aria-hidden="true" size={18} />
              <span><ScrambleText text={copy.nav.email} /></span>
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <nav className="floating-nav mobile-nav" aria-label={copy.nav.mobileAriaLabel}>
        {routeItems.map((item) => {
          const Icon = item.icon;
          const label = copy.nav[item.key];
          const active = routeIsActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              className="nav-action"
              href={item.href}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              data-active={active || undefined}
            >
              <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
              <span><ScrambleText text={label} /></span>
              {active ? <motion.span layoutId="mobile-nav-dot" className="nav-dot" /> : null}
            </Link>
          );
        })}
        <button className="nav-action" type="button" onClick={() => setMoreOpen((open) => !open)} aria-label={copy.nav.moreOptions} aria-expanded={moreOpen}>
          <MoreHorizontal aria-hidden="true" size={21} />
          <span><ScrambleText text={copy.nav.more} /></span>
        </button>
      </nav>
    </>
  );
}
