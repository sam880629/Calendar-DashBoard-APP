import { Droppable, Draggable } from "@hello-pangea/dnd";
import TemporaryCard from "./components/TemporaryCard";
import { useState, useEffect, useRef, Fragment } from "react";
// 暫存區塊
const TemporaryRow = ({ temporary }) => {
  const moonRowRef = useRef(null); // 參考區塊
  const [isSticky, setIsSticky] = useState(false); // 控制是否固定

  // 將日期至頂於上方
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    if (moonRowRef.current) {
      observer.observe(moonRowRef.current);
    }

    return () => {
      if (moonRowRef.current) {
        observer.unobserve(moonRowRef.current);
      }
    };
  }, []);

  return (
    <Fragment>
        <div ref={moonRowRef}></div>
        <Droppable droppableId={`tp-drop-0000-00-00-25`} direction="horizontal">
        {(provided) => (
            <div
            className={`h-10 w-full bg-orange-100 flex ${isSticky ? "fixed top-[72px] z-10" : ""}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
            >
            {temporary.length > 0 ? (
                temporary.map((booking, index) => (
                <Draggable
                    key={booking.id}
                    draggableId={`1-booking-${booking.id}`}
                    index={index}
                >
                    {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <TemporaryCard booking={booking} />
                    </div>
                    )}
                </Draggable>
                ))
            ) : (
                <div className="flex justify-center items-center font-bold text-sm pl-2">
                {"temporary Box"}
                </div>
            )}
            {provided.placeholder}
            </div>
        )}
        </Droppable>
    </Fragment>
  );
};

export default TemporaryRow;
