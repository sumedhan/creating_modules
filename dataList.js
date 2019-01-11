
var list = [];

function getList() {
  return list;
}

function saveToList(number) {
  list.push(number);
}


module.exports = {
  saveToList: saveToList,
  sortListAscending: function() {
    var sortedList = getList();
    sortedList.sort(function (a, b) {
      return (a - b);
    });
    return sortedList;
  },
  showList: function () {
    console.log(list);
  },
}


