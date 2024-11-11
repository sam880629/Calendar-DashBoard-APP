import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../../home/styles.module.css";
import { useSpring, animated, useTransition } from "@react-spring/web";

const FadeOnScroll = ({children }) => {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
  
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
        {children}
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1 , end: 5 }}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.leftCard} ${styles.sticky}`}>
           
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2, end: 2}}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            2
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3, end: 3}}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            3
          </div>
        </ParallaxLayer>
        <ParallaxLayer

          offset={1}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple} `}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
        
          offset={2}
          speed={1.6}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>

  );
};

export default FadeOnScroll;
