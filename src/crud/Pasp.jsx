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
        </div>

        <div className={p.isBusy ? 'flex' : 'red'}>
          <div
            className="paspirtukas"
            style={
              p.isBusy
                ? { boxShadow: 'none' }
                : { boxShadow: '0 0 10px rgb(193, 24, 78)' }
            }
          >
            <div className="korpusas">
              {' '}
              <div className="vairas"></div>
            </div>
            <span className="ratai">
              <div className="ratlankis"></div>
              <div className="ratlankis"></div>
            </span>
          </div>
          <b>{p.isBusy ? 'Available' : 'Busy'}</b>
        </div>

        <div className="buttons">
          <button className="taisyt" onClick={handleEdit}>
            <svg>
              <use href="#edit" />
            </svg>
          </button>
          <button className="trint" onClick={handleDelete}>
            <svg>
              <use href="#delete" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

export default Pasp;
