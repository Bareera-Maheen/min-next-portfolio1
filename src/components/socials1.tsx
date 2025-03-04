import Link from "next/link";
import { FaGithub,  FaLinkedinIn } from "react-icons/fa";


interface Social11 {
  icon: JSX.Element;
  path: string;
}

// Array of social media items
const socials: Social11[] = [
  { icon: <FaGithub />, path: 'https://github.com/Bareera-Maheen' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/bareerah-khanzada' },
  
];

// Define the props for the Socials component
interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials1 = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials1;

