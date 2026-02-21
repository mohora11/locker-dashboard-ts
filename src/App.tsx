import React, { useState } from 'react';
import './App.css';
import LockerDashboard from './components/LockerDashboard';
import LockerModal from './components/LockerModal';  // 모달 import
import { lockers } from './data';
import type { Locker } from './types';

function App() {
  const [filter, setFilter] = useState<'all' | 'empty' | 'inuse' | 'broken'>('all');
  const [selectedLocker, setSelectedLocker] = useState<Locker | null>(null);  // selectedLocker 선언 (Locker 타입 또는 null)

  const filteredLockers = lockers.filter((locker: Locker) => {
    if (filter === 'all') return true;
    if (filter === 'broken') return locker.box_broken_status === 1;
    if (filter === 'empty') return locker.box_broken_status === 0 && locker.box_status === 0;
    if (filter === 'inuse') return locker.box_broken_status === 0 && locker.box_status !== 0;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>보관함 모니터링 대시보드</h1>
      <div>
        <button onClick={() => setFilter('all')}>전체</button>
        <button onClick={() => setFilter('empty')}>비어있음</button>
        <button onClick={() => setFilter('inuse')}>사용중</button>
        <button onClick={() => setFilter('broken')}>고장</button>
      </div>
      <div style={{ pointerEvents: selectedLocker ? 'none' : 'auto' }}>
        <LockerDashboard 
          lockers={filteredLockers} 
          onOpenModal={setSelectedLocker}  // onOpenModal: setSelectedLocker 함수 전달
        />
      </div>
      {selectedLocker && (
        <LockerModal 
          isOpen={!!selectedLocker} 
          onClose={() => setSelectedLocker(null)} 
          locker={selectedLocker} 
        />
      )}
    </div>
  );
}

export default App;