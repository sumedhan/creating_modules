
var list = [];

function saveToList(number) {
  list.push(number);
}

function sortListAscending() {
  var sortedList = list;
  sortedList.sort(function (a, b) {
    return a - b;
  });
  return sortedList;
}

module.exports = {
  saveToList: saveToList;
  sortListAscending: sortListAscending();
}


