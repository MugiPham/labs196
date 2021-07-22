import styles from "../../../styles/Rewards.module.scss";
import btnStyles from "../../../styles/Buttons.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import blueOffice from "../../../public/images/MainBanner.png";
import midSectionImg from "../../../public/images/LabsFloor8.png";
import team1 from "../../../public/images/team/jay_patel.jpg";
import team2 from "../../../public/images/team/andy_chopra.png";
import team3 from "../../../public/images/team/daniel_sloan.jpg";
import team4 from "../../../public/images/team/deepak_sharma.jpg";
import team5 from "../../../public/images/team/harish_mamtani.png";
import team6 from "../../../public/images/team/jerry_francese.jpg";
import team7 from "../../../public/images/team/mahesh_sashital.png";
import team8 from "../../../public/images/team/neeraj_satija.png";
import team9 from "../../../public/images/team/nikolas_joyce.jpg";
import team10 from "../../../public/images/team/rayaan_arif.jpg";
import team11 from "../../../public/images/team/heather.png";
import team12 from "../../../public/images/team/andrew.jpg";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Mentors() {
  return (
    <>
      <Container className={styles.mentorSection}>
        <h5>Mentors</h5>
        <hr />

        <Row>
          <Col className={styles.mentorSubBanner} md={6}>
            <Image src={midSectionImg} alt="blue people" />
          </Col>
          <Col className={styles.mentorSubHeader}>
            <h1>Learn from the right people when you need them</h1>
            <h2>
              Consult our mentors if you find yourself in a tricky situation.
            </h2>
            <p>
              Mentors are available for consultations and will guide
              entrepreneurs no matter the situation. Need help with choosing the
              right software? Consult our technology mentor. Need help with
              choosing the right marketing agency? You’ll have an expert to get
              a second opinion.
            </p>
          </Col>
        </Row>
        <Row className={styles.aboutMentors}>
          <Col xs={12} md={6} className={styles.meetMentors}>
            <h1>About our mentors</h1>
            <h2>Meet our mentors</h2>
            <p>
              When you become a LABS196 startup, you have access to our network
              of mentors and consultations. Many of our mentors are from our
              extensive network of partners and have years of experience in
              various industries, including technology, marketing, human
              resources, compliance, leadership development, and more.
            </p>
          </Col>
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team1}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="50% 50%"
              className={styles.team}
              alt="Jay Patel"
            />
            <h3>
              Jay Patel{" "}
              <a
                href="https://www.linkedin.com/in/jay-patel-a64450146/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>FOUNDER/CEO</h4>
          </Col>
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team2}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="50% 50%"
              className={styles.team}
              alt="Andy Chopra"
            />
            <h3>
              Andy Chopra{" "}
              <a
                href="https://www.linkedin.com/in/andy-chopra-phd-00a1a84/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>Outreach</h4>
          </Col>
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team3}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="50% 50%"
              className={styles.team}
              alt="Daniel Sloan"
            />
            <h3>
              Daniel Sloan{" "}
              <a
                href="https://www.linkedin.com/in/sloandaniel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>Investment</h4>
          </Col>
        </Row>
        {/* <Col> */}
        <Row className={styles.mentorShowcase}>
          {" "}
          {/* <Col xs={4} md={2} className="align-self-center justify-content-center">
              <Image
                src={team1}
                height={250}
                width={250}
                objectFit="cover"
                objectPosition="50% 50%"
                className={styles.team}
                alt="Jay Patel"
              />
              <h3>
                Jay Patel{" "}
                <a
                  href="https://www.linkedin.com/in/jay-patel-a64450146/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </h3>
              <h4>FOUNDER/CEO </h4>
            </Col>
            <Col xs={4} md={2}>
              <Image
                src={team2}
                height={250}
                width={250}
                objectFit="cover"
                objectPosition="50% 50%"
                className={styles.team}
                alt="Andy Chopra"
              />
              <h3>
                Andy Chopra{" "}
                <a
                  href="https://www.linkedin.com/in/andy-chopra-phd-00a1a84/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </h3>
              <h4>Outreach</h4>
            </Col>
            <Col xs={4} md={2}>
              <Image
                src={team3}
                height={250}
                width={250}
                objectFit="cover"
                objectPosition="50% 50%"
                className={styles.team}
                alt="Daniel Sloan"
              />
              <h3>
                Daniel Sloan{" "}
                <a
                  href="https://www.linkedin.com/in/sloandaniel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </h3>
              <h4>Investment</h4>
            </Col> */}
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team4}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="center bottom"
              className={styles.team}
              alt="Deepak Sharma"
            />
            <h3>
              Deepak Sharma{" "}
              <a
                href="https://www.linkedin.com/in/deepak-sharma-4b21a1181/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>Investment</h4>
          </Col>
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team5}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="bottom center"
              className={styles.team}
              alt="Harish Mamtani"
            />
            <h3>
              Harish Mamtani{" "}
              <a
                href="https://www.linkedin.com/in/harishmamtani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>Advisor</h4>
          </Col>
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team6}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="center bottom"
              className={styles.team}
              alt="Jerry Francese"
            />
            <h3>
              Jerry Francese{" "}
              <a
                href="https://www.linkedin.com/in/gerald-francese-7136555/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>Advisor</h4>
          </Col>
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team7}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="center bottom"
              className={styles.team}
              alt="Mahesh Sashital"
            />
            <h3>
              Mahesh Sashital{" "}
              <a
                href="https://www.linkedin.com/in/msashital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>Development</h4>
          </Col>
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team8}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="50% 50%"
              // className={styles.team}
              alt="Neeraj Satija"
            />
            <h3>
              Neeraj Satija{" "}
              <a
                href="https://www.linkedin.com/in/neerajsatija/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>Development</h4>
          </Col>
          {/* <Col xs={4} md={2}>
              <Image
                src={team9}
                height={250}
                width={250}
                objectFit="cover"
                objectPosition="50% 50%"
                className={styles.team}
                alt="Nikolas Joyce"
              />
              <h3>
                Nikolas Joyce{" "}
                <a
                  href="https://www.linkedin.com/in/nikolas-joyce-a50a3a20/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </h3>
              <h4>Advisor</h4>
            </Col> */}
          {/* <Col xs={4} md={2}>
              <Image
                src={team10}
                height={250}
                width={250}
                objectFit="cover"
                objectPosition="50% 50%"
                className={styles.team}
                alt="Rayaan Arif"
              />
              <h3>
                Rayaan Arif{" "}
                <a
                  href="https://www.linkedin.com/in/konectcity/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </h3>
              <h4>Asset Management</h4>
            </Col> */}
          <Col xs={4} md={2} className="align-self-center justify-content-center text-center">
            <Image
              src={team11}
              height={160}
              width={160}
              objectFit="scale-down"
              objectPosition="50% 50%"
              className={styles.team}
              alt="Heather Leighton"
            />
            <h3>
              Heather Leighton{" "}
              <a
                href="https://www.linkedin.com/in/heather-leighton-a6695aa7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </h3>
            <h4>Marketing</h4>
          </Col>
          {/* <Col xs={4} md={2}>
              <Image
                src={team12}
                height={250}
                width={250}
                objectFit="cover"
                objectPosition="50% 50%"
                className={styles.team}
                alt="Andrew Higdon"
              />
              <h3>
                Andrew Higdon{" "}
                <a
                  href="https://www.linkedin.com/in/ahigdon/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </h3>
              <h4>Development</h4>
            </Col> */}
        </Row>
        {/* </Col> */}

        <Row className={styles.doubleSubheader}>
          <Col xs={12} md={6}>
            <h1>Become a LABS196 mentor</h1>
            <p>
              Great people often point to others who helped them along the way.
              If you would like to become a mentor and support LABS196 startups
              with your experience and knowledge, please reach out to us at contact@labs196.com.
            </p>

            <Link href="mailto:contact@labs196.com" scroll={false}>
              <a className={btnStyles.moreInfoBtn}>Email Us</a>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <h1>Access the LABS196 mentor network</h1>
            <p>
              Become a LABS196 startup by applying to our accelerator program
              here to access the mentor network we’ve created.
            </p>
            <Link href="/programs#accelerator-form" scroll={false}>
              <a className={btnStyles.moreInfoBtn}>Learn More</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
