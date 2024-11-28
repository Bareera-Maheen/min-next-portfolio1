import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";


interface Social {
  icon: JSX.Element;
  path: string;
}

// Array of social media items
const socials: Social[] = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <FaFacebook />, path: '' },
  { icon: <FaInstagram />, path: '' },
];

// Define the props for the Socials component
interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
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

export default Socials;

