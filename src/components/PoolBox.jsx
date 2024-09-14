import React from 'react'
import AssignButton from './btn/AssignButton'
import Timer from './poolBox/Timer'
import ChangeButton from './btn/ChangeButton'

const PoolBox = () => {
    return (
        <div className='pool-box w-[720px] h-[793px] bg-white p-8 pt-4 absolute z-50 top-[88px] right-0 box-border'>
            {/* TOP */}
            <div className='flex items-center mb-4'>
                <p className='font-bold mr-[12px]'>PoolBox</p>
                <p className='font-normal mr-auto'>drag reservation here</p>
                <AssignButton />
            </div>
            {/* body */}
            <div className='bg-[#FAFAFA] border border-[#E1E1E1]  rounded-lg h-[90%] relative py-4 px-8'>
                <div>
                    <div className='flex items-center'>
                        <Timer seconds={10}/>
                        <ChangeButton  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoolBox