export const maskPhone = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  let { value } = e.target;
  value = value.replace(/\D/g, '');
  value = value.length ? `+${value}` : '';
  e.target.value = value;
  return e;
};

export const maskWebsite = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  let { value } = e.target;
  value = value.replace(/https?:\/\//g, '');
  value = value.replace(/\s/g, '');
  value = value.length ? `https://${value}` : '';
  // value = value.endsWith('/') ? value.slice(0, -1) : value
  e.target.value = value;
  return e;
};

export const maskTaxId = (value: number | undefined) => {
  let taxId = value?.toString();
  taxId = taxId?.replace(/^(\d{9})(\d)/, '$1-$2');
  return taxId;
};
