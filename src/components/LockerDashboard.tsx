import React from 'react';
import type { Locker } from '../types';  
import LockerBox from './LockerBox';

interface Props {
  lockers: Locker[];
  onOpenModal: (locker: Locker) => void;  // 대시보드에서 모달 열기 콜백
}

const LockerDashboard: React.FC<Props> = ({ lockers, onOpenModal }) => {
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
        <LockerBox
          key={locker.box_id}
          locker={locker}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
};

export default LockerDashboard;