let sortObjectByValues= (obj) =>{
  const sortedEntries = Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
  const sortedObject = sortedEntries.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
  return sortedObject;
}
module.exports = {sortObjectByValues}