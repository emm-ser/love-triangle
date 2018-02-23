/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
    for (var i = 0; i < preferences.length; i++) {

      var a = preferences[i];
      if (a == 0) continue;
      var b = preferences[a - 1];
      if (b == 0) continue;
      var c = preferences[b - 1];
      if (c == 0) continue;

      if (a == b || b == c || a == c) {
        continue;
      }

      if (i + 1 == c) {
        count++;
        preferences[b - 1] = 0;
        preferences[a - 1] = 0;
        preferences[i] = 0;
      }
    }
    return count;
};
