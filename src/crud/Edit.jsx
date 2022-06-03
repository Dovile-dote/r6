import { useEffect, useState } from 'react';

function Edit({ modalData, setModalData, setEditData }) {
  const [registrationCode, setRegistrationCode] = useState('');
  // const [isBusy, setIsBusy] = useState(true);
  const [isBusy, setIsBusy] = useState(0);

  const [lastUseTime, setLastUseTime] = useState(0);
  const [totalRideKilometres, setTotalRideKilometres] = useState(0);
  // const [radio, setRadio] = useState(isBusy);

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setRegistrationCode(modalData.registrationCode);
    setIsBusy(modalData.isBusy);
    setLastUseTime(modalData.lastUseTime);
    setTotalRideKilometres(modalData.totalRideKilometres);
  }, [modalData]);

  const handleEdit = () => {
    const data = {
      registrationCode,
      isBusy,
      lastUseTime,
      totalRideKilometres,
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
      {/* <div className="modal-dialog modal-dialog-centered"> */}
      <div className="edito-content">
        <div className="edito-header">
          <h3>Editas</h3>
          <button
            type="button"
            className="close"
            onClick={() => setModalData(null)}
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {/* <div className="form-group"> */}
          <p>Registracijos kodas:{registrationCode}</p>
          <p>{modalData.lastUseTime}</p>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setLastUseTime(e.target.value)}
            value={lastUseTime}
          />
          <p>Nuvaziuota km: {modalData.totalRideKilometres}</p>
          <input
            type="number"
            onChange={(e) => setTotalRideKilometres(e.target.value)}
            value={totalRideKilometres}
          />
          {/* </div> */}

          <fieldset>
            <legend>Radio button</legend>
            laisva
            <input
              type="radio"
              name="r"
              // value="true"
              // value={true}
              value={0}
              onChange={(e) => setIsBusy(e.target.value)}
              // checked={Boolean(isBusy)}
              checked={isBusy}
              // checked={true}
            ></input>
            uzimta
            <input
              type="radio"
              name="r"
              // value="false"
              // value={false}
              value={1}
              onChange={(e) => setIsBusy(e.target.value)}
              // checked={Boolean(isBusy)}
              checked={isBusy}
              // checked={true}
              // checked={isBusy === 1}
            ></input>
          </fieldset>
        </div>
        <div className="modal-footer">
          <button type="button" onClick={() => setModalData(null)}>
            Close
          </button>
          <button type="button" onClick={handleEdit}>
            Save changes
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Edit;
