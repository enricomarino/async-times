module.exports = function (n, iterator, callback) {
  var completed = 0;
  var i;

  function complete (err) {
    if (err) {
      callback(err);
      callback = function () {};
      return;
    }
    completed += 1;
    if (completed === n) {
      callback();
      return;
    }
  };

  for (i = 0; i < n; i += 1) {
    iterator(i, complete);
  }
};
