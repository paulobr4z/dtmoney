export const formatValueToBRL = (value: number) => {
  const newValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
  
  return newValue
}

export const formatDate = (date: string) => {
  const newDate = new Intl.DateTimeFormat('pt-BR').format(
    new Date(date)
  );
  
  return newDate;
}