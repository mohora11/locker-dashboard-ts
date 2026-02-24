import React from 'react';
import type { Locker } from '../types';

interface Props {
  locker: Locker;
  onOpenModal: (locker: Locker) => void;
}

const LockerBox: React.FC<Props> = ({ locker, onOpenModal }) => {
  // 상태별 색상
  let bgColor = 'green';
  if (locker.box_broken_status === 1) {
    bgColor = 'red';
  } else if (locker.box_status !== 0) {
    bgColor = 'blue';
  }

  const style: React.CSSProperties = {
    position: 'absolute',
    left: `${locker.shape.left}px`,  // JSON 좌표 그대로 사용
    top: `${locker.shape.top}px`,
    width: `${locker.shape.width}px`,
    height: `${locker.shape.height}px`,
    backgroundColor: bgColor,
    border: '1px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    fontSize: '14px',
    boxSizing: 'border-box',
    zIndex: locker.box_id,
  };

  return (
    <div style={style} onClick={() => onOpenModal(locker)}>
      {locker.shape.txt}
    </div>
  );
};

export default LockerBox;