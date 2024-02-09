// import React, { useState } from 'react';
// import Login1 from './Login1';
// import Login2 from './Login2';

// function LandingPage() {
//   const [userType, setUserType] = useState(null);

//   return (
//     <div>
//       <button className='patient' onClick={() => setUserType('patient')}>Patient</button>
//       <button className='doctor' onClick={() => setUserType('doctor')}>Doctor</button>
//       {userType === 'patient' && <Login2 />}
//       {userType === 'doctor' && <Login1 />}
//     </div>
//   );
// }
//export default LandingPage;
import React, { useState } from 'react';
import Login1 from './Login1';
import Login2 from './Login2';

function LandingPage() {
  const [userType, setUserType] = useState(null);
  const [userSelected, setUserSelected] = useState(false);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setUserSelected(true);
  };

  return (
    <div>
      {!userSelected && (
        <div>
          <button className='patient' onClick={() => handleUserTypeSelect('patient')}>Patient</button>
          <button className='doctor' onClick={() => handleUserTypeSelect('doctor')}>Doctor</button>
        </div>
      )}
      {userSelected && userType === 'patient' && <Login2 />}
      {userSelected && userType === 'doctor' && <Login1 />}
    </div>
  );
}

export default LandingPage;
