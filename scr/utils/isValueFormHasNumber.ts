export const isValueFormHasNumber = (value: string) => {
  const numericRegex = /^([0-9]{1,100})+$/;

  if (numericRegex.test(value)) {
    return value;
  }
};
