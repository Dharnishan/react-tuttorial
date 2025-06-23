import Iran from './Iran';
import India from './India';
function America(){
  const state = "Jaffna";
  const city = "Colombo";
  return(
    <div>
      <h1>America - we are not scare about u </h1>
      <Iran state = {state}/>
      <India/>
      <p>We are ready to fight with you</p>
    </div>
  );
}

export default America;