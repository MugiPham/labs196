import styles from "../../../styles/About.module.scss";
import background from "../../../public/images/MainBanner2x.png";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";

export default function TopBanner() {
  return (
    <>
      <Container>
        <Row className={styles.TopBanner}>
          <Col className={styles.title}>
            <h1>LABS196 is looking for the next unicorn founders!</h1>
            <h2>LABS196 strives to unite the global startup ecosystem. </h2>
            <hr />
            <p>
              EDGE196, the sister company of LABS196, is launching a
              transformative technology accelerator for its portfolio companies
              to ensure optimal success.
            </p>
          </Col>
          <Col>
            <Image
              src={background}
              className={styles.topImg}
              height={1300}
              objectFit="cover"
              objectPosition="center center"
              alt="background image"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
