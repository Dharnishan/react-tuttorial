import Iran from './Iran';
import India from './India';
import Russia from './Russia';
import Srilanka from './Srilanka';
import Country from './Country';
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
  const countryInfo = { country: "Russia", state: "Moscow" };
  const iscountry = true;
  const countryList = [
    { country: "America" , state: "Losvegas" },
    { country: "China" , state: "Colombo" },
    { country: "India" , state: "Delhi" },
  ];
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
      {iscountry ? <h2>Country is {countryInfo.country} and state is {countryInfo.state}</h2> : <h3>Country is not defined</h3>}
      <ul>
        {countryList.map((countryInfo) => <li><Country countryInfo = {countryInfo}/></li>)}
      </ul>
      
    </div>
  );
}

export default America;