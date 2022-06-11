import { useState } from 'react';
import rand from '../Functions/rand';
function Create({ setCreateData }) {
  // const [registrationCode, setRegistrationCode] = useState(rand(1000, 9999));
  const kodoElem = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'Y',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'Z',
    'W',
    'X',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  let kodas = '';
  for (let i = 0; i < 8; i++) {
    kodas += kodoElem[rand(0, kodoElem.length - 1)];
  }

  const [registrationCode, setRegistrationCode] = useState(kodas);
  const [isBusy, setIsBusy] = useState(1);
  const [lastUseTime, setLastUseTime] = useState('');
  const [totalRideKilometres, setTotalRideKilometres] = useState(0);

  const handleCreate = () => {
    const data = {
      registrationCode,
      isBusy,
      lastUseTime,
      totalRideKilometres,
    };
    setCreateData(data);
    // setRegistrationCode(rand(1000, 9999));
    setRegistrationCode(kodas);
    setIsBusy(1);
    setLastUseTime('');
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
