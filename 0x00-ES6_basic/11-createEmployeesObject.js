export default function createEmployeesObject(departmentName, employees) {
  if (typeof departmentName !== 'string') {
    throw new Error('departmentName must be a type string');
  }
  if (!Array.isArray(employees)) {
    throw new Error('employees must be a type array');
  }
  return { [departmentName] : employees };
}
