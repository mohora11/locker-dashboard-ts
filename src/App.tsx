import React, { useState } from 'react';
import './App.css';
import LockerDashboard from './components/LockerDashboard';
import { lockers } from './data';
import type { Locker } from './types';

function App() {
  const [filter, setFilter] = useState<'all' | 'empty' | 'inuse' | 'broken'>('all');

  const filteredLockers = lockers.filter((locker: Locker) => {
    if (filter === 'all') return true;
    if (filter === 'broken') return locker.box_broken_status === 1;
    if (filter === 'empty') return locker.box_broken_status === 0 && locker.box_status === 0;
    if (filter === 'inuse') return locker.box_broken_status === 0 && locker.box_status !== 0;  // 1,4,6 등
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
      <LockerDashboard lockers={filteredLockers} />
    </div>
  );
}

export default App;