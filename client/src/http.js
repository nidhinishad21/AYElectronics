import axios from "axios";
function checkEnvVariable(variableName) {
if (typeof process.env["REACT_APP_API_URL"] === 'undefined') {
  alert(`Environment variable '${variableName}' is not defined.`)
  throw new Error(`Environment variable '${variableName}' is not defined.`);
}}
checkEnvVariable()
export default axios.create({
  baseURL: process.env?.REACT_APP_API_URL, 
  withCredentials:true
});
