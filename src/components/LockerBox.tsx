import React, { useState } from 'react';
import type { Locker } from '../types';
import LockerModal from './LockerModal';

const LockerBox: React.FC<{ locker: Locker }> = ({ locker }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scaleFactor = 2;

  // 상태별 색상 (과제 요구: broken red, empty green, inuse blue – JSON 값 기반 조정)
  let bgColor = 'green';  // default: empty (box_broken_status 0, box_status 0)
  if (locker.box_broken_status === 1) {
    bgColor = 'red';
  } else if (locker.box_status !== 0) {  
    bgColor = 'blue';
  }

const style: React.CSSProperties = {
    position: 'absolute',
    left: `${locker.shape.left * scaleFactor}px`,  // left 확대
    top: `${locker.shape.top * scaleFactor}px`,    // top 확대 
    width: `${locker.shape.width * scaleFactor}px`,  // width 확대
    height: `${locker.shape.height * scaleFactor}px`,  // height 확대
    backgroundColor: bgColor,
    border: '1px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    fontSize: `${14 * scaleFactor}px`,  // 텍스트 확대
    margin: '10px',  // 추가: 박스 간 여백 (5px – 다닥다닥 방지, 필요 시 10px로)
    boxSizing: 'border-box',  // 추가: border 포함 크기 계산 (겹침 방지)
    zIndex: locker.box_id,  // 추가: ID 높은 게 위로 (겹침 시 우선순위)
  };

  return (
    <>
      <div style={style} onClick={() => setIsModalOpen(true)}>
        {locker.shape.txt}  
      </div>
      <LockerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locker={locker}
      />
    </>
  );
};

export default LockerBox;