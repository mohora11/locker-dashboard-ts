import React from 'react';
import type { Locker } from '../types';  
import LockerBox from './LockerBox';

interface Props {
  lockers: Locker[];  
  onOpenModal: (locker: Locker) => void;  // onOpenModal 타입 선언 (에러 해결)
}

const LockerDashboard: React.FC<Props> = ({ lockers }) => {
  return (
    <div
      style={{
        width: '1024px',
        height: '768px',
        position: 'relative',
        border: '1px solid black',  
        overflow: 'hidden',  
      }}
    >
      {lockers.map((locker) => (
        <LockerBox key={locker.box_id} locker={locker} />
      ))}
    </div>
  );
};

export default LockerDashboard;