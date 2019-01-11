
var list = [];

function getList() {
  return list;
}

function saveList(number) {
  list.push(number);
}

function sortListA () {
  var sortedList = getList();
  sortedList.sort(function (a, b) {
    return (a - b);
  });
  return sortedList;

}



module.exports = {
  saveToList: function (number) {
    saveList(number),
  },
  sortListAscending: function() {
    sortedListA();
  },
  showList: function () {
    console.log(list);
  },
}


