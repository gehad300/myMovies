import { useHistory } from "react-router-dom";

function Notfound() {
  const History = useHistory();

  return <button onClick={History.push("/")}></button>;
}

export default Notfound;
