import {
  Container,
  Row,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { useSpring, animated } from "react-spring";

// Components
import Layout from "../components/layout";

// CSS
import styles from "./about.module.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Photo({ imageClass }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      //receive class in imageName
      className={imageClass}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans), marginTop: "100px" }}
    />
  );
}

export default function About() {
  return (
    <Layout>
      <Container>
        <div className="d-flex justify-content-around">
          <Photo imageClass={styles.mezcalLogo} />
          <Photo imageClass={styles.maguey} />
        </div>
      </Container>
    </Layout>
  );
}
