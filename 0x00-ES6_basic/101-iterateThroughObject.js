export default function iterateThroughObject(reportWithIterator) {
  let empls = '';

  for (const empl of reportWithIterator) {
    empls += ` ${empl} |`;
  }

  empls = empls.slice(1);
  empls = empls.slice(0, -2);
  return empls;
}
