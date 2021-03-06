import styles from '../../styles/Programs.module.scss'
import background from "../../public/images/MainBanner2x.png"
import { Container, Row, Col } from 'react-bootstrap';
import AcceleratorProgram from '../components/Programs/accelerator';
import InternshipProgram from '../components/Programs/internship'
import Image from "react-bootstrap/Image"


export default function Programs() {
    return (
        <Container className={styles.programsContainer}>
            <Row className={styles.bannerContainer}>
                <Col className={styles.pageTitle}>
                    <h1>Programs</h1>
                </Col>
                <Col className={styles.topImg}>
                    <Image
                        src="/images/MainBanner2x.png"
                        width="100%"
                        height="auto"
                        alt=""
                    />
                </Col>
            </Row>

            {/* accelerator program info*/}
            <AcceleratorProgram />

            {/* internship program  info*/}
            <InternshipProgram />
        </Container>
    )
}