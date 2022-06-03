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
    </>
  );
}

export default App;
