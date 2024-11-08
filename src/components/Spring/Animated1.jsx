import { useSpring, animated, useTransition } from "@react-spring/web";
import { useEffect, useState, useCallback, useRef } from "react";

const Animated = ()=>{
    
  const [items, setItems] = useState([1]);
    const transitions = useTransition(items, {
        from: { opacity: 0, height: '0' , },
        enter: { opacity: 1, height: '45%' },
        leave: { opacity: 0, height: '0px' },
        config: { duration: 800,  }
      });
    
    return (
        transitions((style, item) =>
            item ? (
              <>
                <animated.div
                  style={{
                    ...style,
                    borderLeft: '4px solid white', 
                    width: '2px', 
                    position: 'absolute',
                    top: '0px',
                    left: '15%',
                  }}
                />
                <animated.div
                  style={{
                    ...style,
                    borderLeft: '4px solid white', 
                    width: '2px', 
                    position: 'absolute',
                    bottom: '0px',
                    right: '15%',
                  }}
                />
              </>
              
              
            ) : null
          )
    )
};

export default Animated