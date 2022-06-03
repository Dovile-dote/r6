function Pasp({ p, setDeleteData, setModalData }) {
  const handleDelete = () => {
    setDeleteData(p);
  };

  const handleEdit = () => {
    setModalData(p);
  };

  return (
    <li>
      <div className="aprasas">
        <div>
          <p>
            {' '}
            <b>{p.id}. </b>
            <b>Registracijos kodas : {p.registrationCode}</b>
          </p>
          <p>
            <b>Total Ride: </b> {p.totalRideKilometres} <b> Km</b>
          </p>

          <b>Last use time: {p.lastUseTime}</b>
          <div>
            <b> kur mano *** {p.isBusy} ***</b>

            <div className="paspirtukas">
              <div className="korpusas">
                {' '}
                <div className="vairas"></div>
              </div>
              <span className="ratai">
                <div className="ratlankis"></div>
                <div className="ratlankis"></div>
              </span>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="taisyt" onClick={handleEdit}>
            EDIT
          </button>
          <button className="trint" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
}

export default Pasp;
