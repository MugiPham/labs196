import styles from "../../../styles/Rewards.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import hubspot from "../../../public/images/hubspot_logo.png";
import aws from "../../../public/images/aws_logo.png";
import background from "../../../public/images/MainBanner2x.png";

export default function MainBanner() {
  return (
    <>
      <Container>
        <Row className={styles.titleBanner}>
          <Col className={styles.title}>
            <h1>Perks & Benefits</h1>
          </Col>
          <Col>
            <Image
              src={background}
              className={styles.topImg}
              height={1200}
              objectFit="cover"
              objectPosition="center center"
              alt="background"
            />
          </Col>
        </Row>
        <Row className={styles.secondBanner}>
          <Col xs={12} md={4}>
            <h1>Elevate your company</h1>
            <h2>Make your money stretch further.</h2>
          </Col>
          <Col md={8}>
            <p>
              LABS196 is a one-month intense in-person learning accelerator
              program that includes lectures, talks, brainstorming exercises,
              networking sessions, events, hackathons, and contests to help
              startups reach their maximum potential. We are looking for the
              next generation of tech startups with unicorn potential to send up
              to three leadership team members to join us in our accelerator
              program at our state-of-the-art office in Sugar Land, Texas, USA.
            </p>
          </Col>
        </Row>

        <Row className={styles.perks}>
          <Col md={2} className={styles.perksTextLogo}>
            <h1>Current Perks</h1>
          </Col>
          <Col md={3} className={styles.perkLogos}>
            <Image src={aws} alt="aws activate" />
          </Col>
          <Col className={styles.perksTextLogo}>
            <h3>AWS Activate Credits and business support</h3>
            <h4>An 11,500 Value</h4>
          </Col>
          <Col md={3} className={styles.perkLogos}>
            <Image src={hubspot} alt="hubspot" />
          </Col>
          <Col className={styles.perksTextLogo}>
            <h3>Education and access to HubSpot software</h3>
            <h4>An $17,500 value</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
