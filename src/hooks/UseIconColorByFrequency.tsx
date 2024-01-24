export const useIconColorByFrequency = (frequency: number) => {
  if (frequency <= 2) return "red";
  else if (frequency == 3) return "yellow";
  else return "blue";
};
