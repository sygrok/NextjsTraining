import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="about page image"
          fill
          // width={500}
          // height={500}
        />
      </div>
    </>
  );
}

export default AboutPage;
