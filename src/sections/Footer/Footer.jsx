import LinkButton from "../../components/LinkButton/LinkButton";
import LocalTime from "../../components/LocalTime/LocalTime";
import { SquareArrowOutUpRight } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <LocalTime />
      <div className={styles.linkWrapper}>
        <LinkButton size="small" icon={SquareArrowOutUpRight}>
          x.com
        </LinkButton>
        <LinkButton size="small" icon={SquareArrowOutUpRight}>
          github
        </LinkButton>
        <LinkButton size="small" icon={SquareArrowOutUpRight}>
          behance
        </LinkButton>
        <LinkButton size="small" icon={SquareArrowOutUpRight}>
          linkedIn
        </LinkButton>
      </div>
    </div>
  );
}

export default Footer;
