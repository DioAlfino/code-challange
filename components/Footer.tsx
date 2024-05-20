import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24" role="contentinfo" aria-label="Footer">
      <div className="padding-container max-container w-full flex flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10" aria-label="Homepage">
            <Image
              src="/hilink-logo.svg"
              alt="Hilink logo"
              width={74}
              height={29}
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-black">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <Link href="/" aria-label={link}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <address className="not-italic">
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <div
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <span className="whitespace-nowrap">{link.label}</span>
                      <a
                        href={`mailto:${link.value}`}
                        className="medium-14 whitespace-nowrap text-blue-70"
                      >
                        {link.value}
                      </a>
                    </div>
                  ))}
                </address>
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <li key={link}>
                      <Link href="/" aria-label={link}>
                        <Image
                          src={link}
                          alt={`${link} logo`}
                          width={24}
                          height={24}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <hr className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-black">
          2024 Dio || All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
