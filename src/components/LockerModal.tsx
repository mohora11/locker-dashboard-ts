import React from 'react';
import Modal from 'react-modal';
import type { Locker } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  locker: Locker;
}

const LockerModal: React.FC<Props> = ({ isOpen, onClose, locker }) => {
  const formatDate = (timestamp: number): string => {
    if (timestamp === 0) return 'N/A';
    const date = new Date(timestamp * 1000);  // Unix to ms
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>Box {locker.box_id}</h2>
      <p>Status: {locker.box_status}</p>
      <p>Broken: {locker.box_broken_status}</p>
      <p>Start Date: {formatDate(locker.box_starting_date)}</p>
      <p>Expiry Date: {formatDate(locker.box_expiry_date)}</p>
      <p>Courier Mobile: {locker.courier_mobile_num || 'N/A'}</p>
      <p>One-time Password: {locker.onetime_password || 'N/A'}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default LockerModal;