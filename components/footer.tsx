import { LucideIcon, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FooterLinkT = {
   title: string;
   links: {
      href: string;
      label: string;
      icon?: LucideIcon;
   }[];
}[];

const footerLinks: FooterLinkT = [
   {
      title: "Contact Us",
      links: [
         {
            href: "#",
            label: "sixseven@example.com",
            icon: Mail,
         },
         {
            href: "#",
            label: "+92 67676767",
            icon: Phone,
         },
         {
            href: "#",
            label: "+92 67676768",
            icon: Phone,
         },
      ],
   },
   {
      title: "Customer Care",
      links: [
         { href: "#", label: "FAQs" },
         {
            href: "#",
            label: "Exchange & Return Policy",
         },
         { href: "#", label: "Contact Us" },
      ],
   },
   {
      title: "Information",
      links: [
         { href: "#", label: "About Us" },
         { href: "#", label: "Privacy Policy" },
         { href: "#", label: "Payments" },
         { href: "#", label: "Store Locator" },
         { href: "#", label: "Fabric Glossary" },
         { href: "#", label: "Blogs" },
      ],
   },
];

function Footer() {
   return (
      <footer className="bg-muted w-full px-2 sm:px-4">
         <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 py-8 max-sm:text-center sm:grid-cols-2 lg:grid-cols-4">
               {footerLinks.map((item) => (
                  <div key={item.title}>
                     <h3 className="mb-4 font-semibold uppercase">{item.title}</h3>
                     <ul className="text-muted-foreground space-y-4">
                        {item.links.map((link) => {
                           const Icon = link.icon;
                           return (
                              <li
                                 key={link.label}
                                 className="hover:text-foreground flex items-center gap-2 text-sm transition-colors max-sm:justify-center"
                              >
                                 {Icon && <Icon className="size-5" />}
                                 <a href={link.href}>{link.label}</a>
                              </li>
                           );
                        })}
                     </ul>
                  </div>
               ))}
               <div className="">
                  <h3 className="mb-4 font-semibold uppercase">Newsletter Signup</h3>
                  <p className="text-sm leading-relaxed uppercase">
                     Subscribe to our Newsletter for Exclusive Updates
                  </p>
                  <div className="border-primary mt-4 flex items-center rounded-md border">
                     <Input
                        className="border-0 text-xs font-medium ring-0! placeholder:text-xs"
                        placeholder="Your email address"
                     />
                     <Button size={"lg"}>Subscribe</Button>
                  </div>
               </div>
            </div>

            <div className="text-muted-foreground py-4 text-center text-xs">
               <p>&copy; {new Date().getFullYear()} Abid, All rights reserved</p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
