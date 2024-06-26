import Image from "next/image";
import styles from "./TitleThree.module.css";

interface TitleThreeProps {
  mainTitle: string;
  image1: string;
  image2: string;
  image3: string;
  alt1: string;
  alt2: string;
  alt3: string;
  title1: string;
  title2: string;
  title3: string;
  text1: string;
  text2: string;
  text3: string;
}
export default function TitleThree({
  mainTitle,
  image1,
  image2,
  image3,
  alt1,
  alt2,
  alt3,
  title1,
  title2,
  title3,
  text1,
  text2,
  text3,
}: TitleThreeProps) {
  return (
    <div className="container1">
      <section>
        <div className={styles.mainWrapper}>
          <h2 className="title6">Our Mission</h2>
          <div className={styles.threeWrapper}>
            <div className={styles.eachDiv}>
              <div className={styles.textDiv}>
                <h3 className="title3">{title1}</h3>
                <h4 className="text1">{text1}</h4>
              </div>

              <Image src={image1} alt={alt1} width={1000} height={1000}></Image>
            </div>
            <div className={styles.eachDiv}>
              <div className={styles.textDiv}>
                <h3 className="title3">{title2}</h3>
                <h4 className="text1">{text2}</h4>
              </div>

              <Image src={image2} alt={alt2} width={1400} height={1500}></Image>
            </div>
            <div className={styles.eachDiv}>
              <div className={styles.textDiv}>
                <h3 className="title3">{title3}</h3>
                <h4 className="text1">{text3}</h4>
              </div>

              <Image src={image3} alt={alt3} width={1000} height={1000}></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
