import { useDispatch, useSelector } from "react-redux";
import { setEditLocked } from "../../store/editLockedSlice";


// 切換開關
const ToggleSwitch = () => {
  // store參數
  const { editLocked } = useSelector(state => state.editLocked);
  // store函式
  const dispatch = useDispatch();
  
  const handleLocked = () => {
    dispatch(setEditLocked(!editLocked))
  };

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>

        <div className='relative'>
          <input
            type='checkbox'
            checked={editLocked}
            onChange={handleLocked}
            className='sr-only'
          />
          <div
            className={`box block h-8 w-[52px] rounded-full ${editLocked ? 'bg-[#1994FC]' : 'bg-[#B4B4B4]'
              }`}
          ></div>
          <div
            className={`absolute left-[2px] top-[2px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white transition ${editLocked ? 'translate-x-[70%]' : ''
              }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default ToggleSwitch