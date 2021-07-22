import Image from 'next/image'
import styles from '../../styles/Programs.module.scss'
import background from "../../public/images/MainBanner2x.png"
import { Container, Row, Col } from 'react-bootstrap';
import AcceleratorProgram from '../components/Programs/Accelerator';
import InternshipProgram from '../components/Programs/Internship'

export default function Programs() {
    return (
        <Container className={styles.programsContainer}>
            <Row className={styles.bannerContainer}>
                <Col className={styles.pageTitle}>
                    <h1>Programs</h1>
                </Col>
                <Col className={styles.topImg}>
                    <Image
                        src={background}
                        height={1200}
                        objectFit="cover"
                        objectPosition="center center"
                        // sizes={[1296, 520]}
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