var getCell;
var getCellRange;
onready(() => {
  let spreadsheetId = '1pTUOkRpzsrRxWG51_SDMI9taOraLi5078vIHxiai9YY';
  let apiKey = 'AIzaSyBPBslA6aQx9HXlji1Xk_S3cgTiaIL6HD0'; // don't even dare

  getCell = function(cell) {
    return new Promise((resolve, reject) => {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${cell}?key=${apiKey}&majorDimension=ROWS`, { method: 'GET' }).then(res => res.json()).then(json => {
        resolve(json.values);
      }).catch(err => {
        reject(err);
      });
    });
  };
  getCellRange = function(startCell, endCell) {
    return new Promise((resolve, reject) => {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?key=${apiKey}&ranges=${startCell}:${endCell}&majorDimension=ROWS`, { method: 'GET' }).then(res => res.json()).then(json => {
        resolve(json.valueRanges[0].values);
      }).catch(err => {
        reject(err);
      });
    });
  };
});