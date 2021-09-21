function getPrivateNumber(userName, userBirthDay) { //유저 이름, 생년월일(string) 값을 받아 고유 숫자를 return함
  const nameAscii = userName.charCodeAt();
  const BirthDayNum = parseInt(userBirthDay);
  const privateNumber = nameAscii + BirthDayNum;

  return privateNumber;
}
export function findCustomStar(xmlData, userName, userBirthDay) {
  const privateNumber = getPrivateNumber(userName, userBirthDay);
  const rowList = xmlData.table.tbody.tr;
  const rowLength = rowList.length - 1; // 355이지만 헤더 제외 (354개)
  const privateRowNum = privateNumber % rowLength + 1; //헤더 제외하기 때문에 1 추가(1~354)
  const privateRow = rowList[privateRowNum];
  const privateStarNameEn = privateRow.td[0]._text;
  const privateStarNameKr = privateRow.td[1].a._text;
  const privateStarNameOrigin = privateRow.td[2]._text; //명칭 유래 (가끔 빈 값도 있어서 사용 안할듯)
  const privateStarConstellation = privateRow.td[3].a._text; //별자리 이름
  const privateStarMagnitude = privateRow.td[4]._text; //겉보기 등급
  const privateStarObject = {
    starNameEn: privateStarNameEn,
    starNameKr: privateStarNameKr,
    starNameOrigin: privateStarNameOrigin,
    starConstellation: privateStarConstellation,
    starMagnitude: privateStarMagnitude
  }
  return privateStarObject;
}

