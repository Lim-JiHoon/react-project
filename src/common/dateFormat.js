function leftPad(value) {
  return value >= 10 ? value : `0${value}`;
}

function dateFormat(source, delimiter = "-") {
  const y = source.getFullYear();
  const m = leftPad(source.getMonth());
  const d = leftPad(source.getDate());

  return [y, m, d].join(delimiter);
}

export default dateFormat;
