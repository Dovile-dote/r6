import { useEffect, useState } from 'react';

function Edit({ modalData, setModalData, setEditData }) {
  const [registrationCode, setRegistrationCode] = useState('');
  const [isBusy, setIsBusy] = useState(1);
  const [lastUseTime, setLastUseTime] = useState('');
  const [totalRideKilometres, setTotalRideKilometres] = useState(0);

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setRegistrationCode(modalData.registrationCode);
    setIsBusy(modalData.isBusy);
    setLastUseTime(modalData.lastUseTime);
    setTotalRideKilometres('');
  }, [modalData]);

  const handleEdit = () => {
    const data = {
      registrationCode,
      isBusy,
      lastUseTime,
      totalRideKilometres:
        Number(modalData.totalRideKilometres) + Number(totalRideKilometres),
      id: modalData.id,
    };

    setEditData(data);
    setModalData(null);
  };

  if (null === modalData) {
    return null;
  }

  return (
    <div className="editas">
      <div className="edito-content">
        <div className="edito-header">
          <h3>Edit</h3>
          <button
            type="button"
            className="close"
            onClick={() => setModalData(null)}
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            Registration code: <b>{registrationCode}</b>
          </p>
          <p>
            Last use time: <b>{modalData.lastUseTime}</b>
          </p>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setLastUseTime(e.target.value)}
            value={lastUseTime}
          />
          <p>
            Total ride: <b>{modalData.totalRideKilometres} km</b>
            {/* <br /> */}
            {/* <i>
              bendrai{' '}
              {Number(modalData.totalRideKilometres) +
                Number(totalRideKilometres)}
            </i>{' '} */}
            {/* km */}
          </p>
          <div className="km">
            <label>Today ride: </label>
            <input
              type="text"
              onChange={(e) => {
                setTotalRideKilometres(e.target.value);
              }}
              value={totalRideKilometres}
              placeholder={'km'}
            />
            <span>km</span>
          </div>

          <div>
            BUSY
            <input
              type="checkbox"
              onChange={() => {
                // cbClick('a');
                setIsBusy((s) => (s ? 0 : 1));
                console.log('klick');
                console.log(isBusy);
              }}
              checked={!isBusy}
            ></input>
          </div>
        </div>

        <div className="edito-footer">
          <button type="button" onClick={() => setModalData(null)}>
            Close
          </button>
          <button type="button" onClick={handleEdit}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
