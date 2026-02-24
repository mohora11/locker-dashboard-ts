import { useState, useEffect } from 'react';
import './App.css';
import LockerDashboard from './components/LockerDashboard';
import LockerModal from './components/LockerModal';
import type { Locker } from './types';

function App() {
  const [filter, setFilter] = useState<'all' | 'empty' | 'inuse' | 'broken'>('all');
  const [selectedLocker, setSelectedLocker] = useState<Locker | null>(null);
  const [lockers, setLockers] = useState<Locker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data.json');  // public/data.json 또는 src/data.json (Vite 설정 따라)
        if (!response.ok) throw new Error('Fetch failed');
        const data: Locker[] = await response.json();
        setLockers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // fallback: 하드코딩 상수 사용 가능
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredLockers = lockers.filter((locker: Locker) => {
    if (filter === 'all') return true;
    if (filter === 'broken') return locker.box_broken_status === 1;
    if (filter === 'empty') return locker.box_broken_status === 0 && locker.box_status === 0;
    if (filter === 'inuse') return locker.box_broken_status === 0 && locker.box_status !== 0;
    // 명시적 기본 반환 (안정성 향상)
    return false;
  });

  if (loading) return <p>데이터 로딩 중...</p>;

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
          onOpenModal={setSelectedLocker}
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