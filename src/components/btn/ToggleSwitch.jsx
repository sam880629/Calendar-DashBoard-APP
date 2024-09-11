import  { useState } from 'react'
// 切換開關
function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-8 w-[52px] rounded-full ${
              isChecked ? 'bg-[#1994FC]' : 'bg-[#B4B4B4]'
            }`}
          ></div>
          <div
            className={`absolute left-[2px] top-[2px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-[70%]' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default  ToggleSwitch