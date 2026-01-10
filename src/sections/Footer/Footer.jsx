import LinkButton from "../../components/LinkButton/LinkButton";
import LocalTime from "../../components/LocalTime/LocalTime";
import { SquareArrowOutUpRight } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  const X = "https://x.com/home";
  const GITHUB = "https://github.com/mubzie";
  const BEHANCE = "https://www.behance.net/mubzie";
  const LINKEDIN = "https://www.linkedin.com/in/mubarakrabiu/";

  return (
    <div className={styles.footerWrapper}>
      <LocalTime />
      <div className={styles.linkWrapper}>
        <LinkButton link={X} size="small" icon={SquareArrowOutUpRight}>
          x.com
        </LinkButton>
        <LinkButton link={GITHUB} size="small" icon={SquareArrowOutUpRight}>
          github
        </LinkButton>
        <LinkButton link={BEHANCE} size="small" icon={SquareArrowOutUpRight}>
          behance
        </LinkButton>
        <LinkButton link={LINKEDIN} size="small" icon={SquareArrowOutUpRight}>
          linkedIn
        </LinkButton>
      </div>
    </div>
  );
}

export default Footer;
