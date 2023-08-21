
const xmlJs = require('xml-js');
const convertXmlToJson = (xml) => {
  const options = {
    compact: true,
    ignoreComment: true,
    spaces: 4
  };
  const json = xmlJs.xml2json(xml, options);
  return json;
}
let str = `<?xml version="1.0" encoding="UTF-8"?>
<RootData>
  <Data>
    <MyValue>5</MyValue>
  </Data>
  <Data>
    <MyValue>12</MyValue>
  </Data>
  <Data>
    <MyValue>1</MyValue>
  </Data>
  <Name>testData</Name>
</RootData>
`;
let a = convertXmlToJson(str)
console.log(convertXmlToJson(str));
