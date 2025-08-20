import CardNav from './(reactbits)/CardNav'


export const NavBar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "/about" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:jayakrishnanashok@gmail.com" },
        { label: "Github", ariaLabel: "github", href: "https://github.com/Jkrish1011" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com/in/jkitis" }
      ]
    }
  ];

  return (
    <CardNav
      logo={'./logo.png'}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};