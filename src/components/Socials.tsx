import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn, FaAdversal } from "react-icons/fa";


interface Social {
  icon: JSX.Element;
  path: string;
}

// Array of social media items
const socials: Social[] = [
  { icon: <FaGithub />, path: 'https://github.com/Bareera-Maheen' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/bareerah-khanzada-1b5896227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { icon: <FaFacebook />, path: 'https://www.facebook.com/share/12L5NCQhpVp/' },
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

