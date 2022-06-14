import Pasp from './Pasp';
import { useEffect, useState } from 'react';

function List({ paspirtukai, setDeleteData, setModalData }) {
  const [copy, setCopy] = useState([]);
  useEffect(() => {
    if (null === paspirtukai) {
      return;
    }
    setCopy([...paspirtukai]);
  }, [paspirtukai]);

  const sortByKm = () => {
    setCopy(
      [...copy].sort((a, b) => a.totalRideKilometres - b.totalRideKilometres)
    );
    console.log(copy);
  };

  const sortByTime = () => {
    setCopy(
      [...copy].sort(
        (a, b) =>
          Number(b.lastUseTime.replace(/-/gi, '0')) -
          Number(a.lastUseTime.replace(/-/gi, '0'))
      )
    );
    console.log(copy);
  };

  const resetSort = () => {
    setCopy([...paspirtukai]);
  };

  return (
    <>
      <h2 className={copy.length !== 0 ? 'yra' : 'nera'}>List of Colt's</h2>

      <div className={copy.length !== 0 ? 'yra' : 'nera'}>
        <button onClick={sortByKm}> sort by KM</button>
        <button onClick={sortByTime}>sort by TIME</button>
        <button onClick={resetSort}>reset</button>
      </div>

      <ul>
        {copy.map((p) => (
          <Pasp
            key={p.id}
            p={p}
            setDeleteData={setDeleteData}
            setModalData={setModalData}
          ></Pasp>
        ))}
      </ul>
    </>
  );
}

export default List;
