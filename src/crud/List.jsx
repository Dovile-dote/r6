import Pasp from './Pasp';
function List({ paspirtukai, setDeleteData, setModalData }) {
  return (
    <>
      <h2>List of Colt's</h2>

      {/* <div> */}
      <ul>
        {paspirtukai
          ? paspirtukai.map((p) => (
              <Pasp
                key={p.id}
                p={p}
                setDeleteData={setDeleteData}
                setModalData={setModalData}
              ></Pasp>
            ))
          : null}
      </ul>
      {/* </div> */}
    </>
  );
}

export default List;
