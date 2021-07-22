import styles from "../../../styles/HomePage.module.scss";
import button from "../../../styles/Buttons.module.scss";
import Link from "next/link";
import background from "../../../public/images/MainBanner2x.png";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";

export default function TopBanner() {
  return (
    <>
      <Container>
        <Row className={styles.TopBanner}>
          <Col className={styles.title}>
            <h1>Leading startup accelerator and internship program</h1>
            <h2>The next generation of unicorns will come from LABS196</h2>
            <hr />
            <p>
              LABS196 is designed to support startups with unicorn potential to
              get investors ready and launch their project to the moon. Enroll
              in our accelerator program, and come and join us in Sugar Land,
              Texas, USA to transform and develop your company.
            </p>
          </Col>
          <Col className={styles.topImg}>
            <Image
              src={background}
              height={1600}
              objectFit="cover"
              objectPosition="center center"
              alt="background"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
