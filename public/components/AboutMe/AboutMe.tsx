import styles from "../AboutMe/style/AboutMe.module.css";
export function AboutMe() {
  const presentationText = "Hi, my name is Andrew, I'm a software engineer";

  return <div className={styles.AboutMeStyle}>{presentationText}</div>;
}
