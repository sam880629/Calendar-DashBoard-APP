import { Droppable ,Draggable } from '@hello-pangea/dnd';
import TemporaryCard from "./components/TemporaryCard"
// 暫存區塊
const TemporaryRow = ({ temporary }) => {
  return (
    <Droppable droppableId={`tp-drop-0000-00-00-25`} direction="horizontal">
    {(provided) => (
      <div
        className=' h-10  bg-orange-100 flex '
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
                <TemporaryCard 
                    booking={booking}  
                    
                />
              </div>
            )}
          </Draggable>
        ))
      ) : (
        <div className="flex justify-center items-center font-bold text-sm pl-2" >{"temporary Box"}</div>
      )}
        {provided.placeholder}
        </div>
        )}
    </Droppable>
  )
};

export default TemporaryRow;
