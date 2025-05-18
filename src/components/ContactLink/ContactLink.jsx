import linkedInIcon from "../../assets/linkedIn.png";
import githubIcon from "../../assets/github.png";
import dribbleIcon from "../../assets/dribbble.png";
import behanceIcon from "../../assets/behance.png";
import twitterIcon from "../../assets/icon-twitter.png";
import styles from "./ContactLink.module.css";

const socialLinks = [
  {
    name: "twitter",
    url: "#",
    imageLink: twitterIcon,
  },
  {
    name: "dribble",
    url: "#",
    imageLink: dribbleIcon,
  },
  {
    name: "github",
    url: "#",
    imageLink: githubIcon,
  },
  {
    name: "behance",
    url: "#",
    imageLink: behanceIcon,
  },
  {
    name: "linkedin",
    url: "#",
    imageLink: linkedInIcon,
  },
];

function ContactLink() {
  return (
    <div className={styles.contactLinkContainer}>
      {socialLinks.map((link) => (
        <a href={link.url} key={link.name}>
          <img src={link.imageLink} alt={link.name} />
        </a>
      ))}
    </div>
  );
}

export default ContactLink;
