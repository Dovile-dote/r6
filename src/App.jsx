import { useEffect, useState } from 'react';
import './style.scss';
import Create from './crud/Create';
import List from './crud/List';
import Edit from './crud/Edit';
import { create, read, remove, edit } from './Functions/localStorage';

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [paspirtukai, setPaspirtukai] = useState(null);

  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);

  const [deleteData, setDeleteData] = useState(null);

  const [editData, setEditData] = useState(null);

  const [sum, setSum] = useState(0);

  // read
  useEffect(() => {
    setPaspirtukai(read());
  }, [lastUpdate]);

  // create
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);

    setLastUpdate(Date.now());
  }, [createData]);

  // delete
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setSum((prev) => prev - deleteData.totalRideKilometres);
    setLastUpdate(Date.now());
  }, [deleteData]);

  // edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setSum((prev) => prev + editData.totalRideKilometres);
    setLastUpdate(Date.now());
  }, [editData]);

  // let kiekisPasp = 0;
  // // let kiekKm = 0;
  // useEffect(() => {
  //   console.log('labas');
  //   console.log('ilgis ' + paspirtukai.length);
  // }, [lastUpdate]);

  return (
    <>
      <div className="App">
        <h1>Colt</h1>
        <div className="main">
          <div className="order">
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className="list">
            {/* <div className={paspirtukai.length ? 'list' : 'nera'}> */}
            {/* <h2>list</h2> */}
            <List
              paspirtukai={paspirtukai}
              setDeleteData={setDeleteData}
              setModalData={setModalData}
            ></List>
          </div>
        </div>
        <Edit
          setEditData={setEditData}
          modalData={modalData}
          setModalData={setModalData}
        ></Edit>
      </div>
      <div>
        {/* <h2>Statitika: paspirtukai {kiekisPasp}</h2> */}
        <h2>Statistika, paspirtuku: {paspirtukai && paspirtukai.length}</h2>
        <h2>km suma: {sum}</h2>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
