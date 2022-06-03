import { useState } from 'react';
import rand from '../Functions/rand';
function Create({ setCreateData }) {
  //   const [id, setId] = useState(0);
  const [registrationCode, setRegistrationCode] = useState(rand(1000, 9999));
  // const [isBusy, setIsBusy] = useState(false);
  const [isBusy, setIsBusy] = useState(1);
  const [lastUseTime, setLastUseTime] = useState(0);
  const [totalRideKilometres, setTotalRideKilometres] = useState(0);

  const handleCreate = () => {
    const data = {
      registrationCode,
      isBusy,
      lastUseTime,
      totalRideKilometres,
    };
    setCreateData(data);
    setRegistrationCode(rand(1000, 9999));
    // setIsBusy(false);
    setIsBusy(1);
    setLastUseTime(0);
    setTotalRideKilometres(0);
  };

  return (
    <>
      <div className="rodykle">
        <div className="kv"></div>
        <div className="tr"></div>
      </div>

      <div>
        <button className="add-new" onClick={handleCreate}>
          <div className="paspirtukas">
            <div className="korpusas">
              {' '}
              <div className="vairas"></div>
            </div>
            <span className="ratai">
              <div className="ratlankis">
                <div className="ratas"></div>
              </div>
              <div className="ratlankis">
                <div className="ratas"></div>
              </div>
            </span>
          </div>
          <h3>NEW COLT</h3>
        </button>
      </div>
    </>
  );
}
export default Create;
