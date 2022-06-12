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
    setLastUpdate(Date.now());
  }, [deleteData]);

  // edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  }, [editData]);

  // statistic
  useEffect(() => {
    if (null === paspirtukai) {
      return;
    }
    setSum(0);
    for (let i = 0; i < paspirtukai.length; i++) {
      setSum((s) => s + paspirtukai[i].totalRideKilometres);
    }
  }, [paspirtukai]);
  return (
    <>
      <div className="App">
        <h1>Colt</h1>
        <div className="main">
          <div className="order">
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className="list">
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
      <div className="statistic">
        <h2>Statistic</h2>
        <h3>
          {' '}
          siuo metu yra: <span>{paspirtukai && paspirtukai.length}</span> vnt.
          veikianciu paspirtuku.
        </h3>
        <h3>
          {' '}
          bendra visu paspirtuku nuvaziuota suma: <span>{sum}</span> km
        </h3>
      </div>
    </>
  );
}

export default App;
