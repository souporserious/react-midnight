let uniqueNumber = 0

export default function generateId() {
  let timestamp = Date.now();

  (() => {
    // If created at same millisecond as previous
    if (timestamp <= uniqueNumber) {
      timestamp = ++uniqueNumber
    } else {
      uniqueNumber = timestamp
    }
  })();
  
  return 'D' + timestamp
}