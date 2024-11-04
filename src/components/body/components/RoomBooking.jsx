import BookingCard from "./BookingCard";
import { Droppable ,Draggable } from '@hello-pangea/dnd';

// 回傳對應時間的資料
const bookingHandler = (booking, hour) => {

  const targetHour = booking.time.split(':')[0];

  return hour==targetHour? booking:null
};

const RoomBooking = ({ todoList = [], hour ,today, keyId}) => {

  const bookingList = todoList;
  // class 樣式設定
  let containerClasses = `flex-1 pt-1 pl-1 border relative bg-white `;
  
  // 篩選符合時間的預約
  const filteredBookings = bookingList.filter(
    (booking) => bookingHandler(booking, hour) !== null
  );

  return (
    <Droppable droppableId={`${keyId}-drop-${today}-${hour}`} >
      {(provided, snapshot) => (
        <div
          className={`${containerClasses} ${snapshot.isDraggingOver?"bg-sky-100":"bg-white" }`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking, index) => (
              <Draggable
                key={booking.id}
                draggableId={`${keyId}-booking-${booking.id}`}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <BookingCard 
                    booking={booking} 
                    keyId={keyId}
                    today={today}
                    />
                  </div>
                )}
              </Draggable>
            ))
          ) : (
            <div className=""></div>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default RoomBooking;
