import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Image from "react-bootstrap/Image"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from '../../../styles/Footer.module.scss'
// import logo from '../../../public/images/labs.svg'
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";


export default function Footer() {
  return (
    <>
      <Nav variant="custom" className={styles.footer}>
        <Container className={styles.linksContainer}>
          <Row>
            <Col xs={12} lg={3} className="align-self-center">
              <Link href="/" passHref={true}>
                <Navbar.Brand>
                  <Image
                    src="/images/labs.svg"
                    className={styles.brandLogo}
                    alt="Labs196 logo"
                  />
                  {' '}
                </Navbar.Brand>
              </Link>
            </Col>
            <Col xs={12} lg={2} className={styles.section}>
              <Navbar.Text className={styles.title}>LINKS</Navbar.Text>
              <Row>
                <Col xs={5} lg={5}>
                  <Nav className="flex-column">
                    <Link href="/" passHref={true}>
                      <Nav.Link className={styles.navLink}>Home</Nav.Link>
                    </Link>
                    <Link href="/programs" passHref={true}>
                      <Nav.Link className={styles.navLink}>Programs</Nav.Link>
                    </Link>
                  </Nav>
                </Col>
                <Col>
                  <Nav className="flex-column">
                    <Link href="/rewards" passHref={true}>
                      <Nav.Link className={styles.navLink}>Perks</Nav.Link>
                    </Link>
                    <Link href="/about" passHref={true}>
                      <Nav.Link className={styles.navLink}>About Us</Nav.Link>
                    </Link>
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4} className={styles.section}>
              <Nav className="flex-column">
                <Navbar.Text className={styles.title}>CONTACT US</Navbar.Text>
                <a href="mailto:contact@labs196.com">contact@labs196.com</a>
              </Nav>
            </Col>
            <Col xs={12} lg={3} className={styles.section}>
              <Navbar.Text className={styles.title}>FOLLOW US</Navbar.Text>
              <Nav className="flex-row">
                <a href="https://www.instagram.com/" className={styles.socials} passHref={true}><IoLogoTwitter /></a>
                <a href="https://www.facebook.com" className={styles.socials} passHref={true}><IoLogoFacebook /></a>
                <a href="https://www.twitter.com" className={styles.socials} passHref={true}><IoLogoInstagram /></a>
              </Nav>
              <Navbar.Text className={styles.license}>Labs196&trade; 2021</Navbar.Text>
            </Col>
          </Row>
        </Container>
      </Nav>
    </>
  );
}
