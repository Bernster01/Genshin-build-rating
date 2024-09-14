async function setVersion() {
  //Get the version from the json file
  const version = await fetch('./data/info.json').then(response => response.json());
  document.getElementById("version").innerHTML = `Version: ${version.version}`;
}
setVersion();