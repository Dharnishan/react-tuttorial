import Iran from './Iran';
import India from './India';
import Russia from './Russia';
import Srilanka from './Srilanka';
function America(){
  // const state = "Jaffna";
  const dialogue = "punda";
  const info = {
    state: "Jaffna",
    
  };
  const slInfo ={
    m1 : "bad word pesava",
    m2 : "ponne unthan kadithathai pooval thirakkiren",
    m3 : 200
  };
  // const slInfo = {};
  const iswarstarted = false;
  return(
    <div>
      <h1>America - we are not scare about u </h1>
      {/* <Iran state = {state} talk = {'summa irra sinni'}/> */}
      <Iran info = {info}/>
      <India/>
      <Russia dialogue = {dialogue}/>
      <p>We are ready to fight with you</p>
      {slInfo.m1 !== undefined && slInfo.m2 !== undefined && slInfo.m3 !== undefined ?
        <Srilanka slInfo = {slInfo}/> : null
      }
      {iswarstarted ? <h2>War is started</h2> : <h3>War is not started</h3>}
      
      
    </div>
  );
}

export default America;