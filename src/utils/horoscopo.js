export const signos = {
  aries: {
    nombre: "Aries",
    emoji: "♈",
    fechas: "21 marzo - 19 abril",
    elemento: "Fuego",
    planeta: "Marte",
  },
  tauro: {
    nombre: "Tauro",
    emoji: "♉",
    fechas: "20 abril - 20 mayo",
    elemento: "Tierra",
    planeta: "Venus",
  },
  geminis: {
    nombre: "Géminis",
    emoji: "♊",
    fechas: "21 mayo - 20 junio",
    elemento: "Aire",
    planeta: "Mercurio",
  },
  cancer: {
    nombre: "Cáncer",
    emoji: "♋",
    fechas: "21 junio - 22 julio",
    elemento: "Agua",
    planeta: "Luna",
  },
  leo: {
    nombre: "Leo",
    emoji: "♌",
    fechas: "23 julio - 22 agosto",
    elemento: "Fuego",
    planeta: "Sol",
  },
  virgo: {
    nombre: "Virgo",
    emoji: "♍",
    fechas: "23 agosto - 22 septiembre",
    elemento: "Tierra",
    planeta: "Mercurio",
  },
  libra: {
    nombre: "Libra",
    emoji: "♎",
    fechas: "23 septiembre - 22 octubre",
    elemento: "Aire",
    planeta: "Venus",
  },
  escorpio: {
    nombre: "Escorpio",
    emoji: "♏",
    fechas: "23 octubre - 21 noviembre",
    elemento: "Agua",
    planeta: "Plutón",
  },
  sagitario: {
    nombre: "Sagitario",
    emoji: "♐",
    fechas: "22 noviembre - 21 diciembre",
    elemento: "Fuego",
    planeta: "Júpiter",
  },
  capricornio: {
    nombre: "Capricornio",
    emoji: "♑",
    fechas: "22 diciembre - 19 enero",
    elemento: "Tierra",
    planeta: "Saturno",
  },
  acuario: {
    nombre: "Acuario",
    emoji: "♒",
    fechas: "20 enero - 18 febrero",
    elemento: "Aire",
    planeta: "Urano",
  },
  piscis: {
    nombre: "Piscis",
    emoji: "♓",
    fechas: "19 febrero - 20 marzo",
    elemento: "Agua",
    planeta: "Neptuno",
  },
};

export function calcularSigno(fechaNacimiento) {
  const fecha = new Date(fechaNacimiento);
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return signos.aries;
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return signos.tauro;
  if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20))
    return signos.geminis;
  if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22))
    return signos.cancer;
  if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return signos.leo;
  if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return signos.virgo;
  if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22))
    return signos.libra;
  if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21))
    return signos.escorpio;
  if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21))
    return signos.sagitario;
  if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19))
    return signos.capricornio;
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18))
    return signos.acuario;
  if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20))
    return signos.piscis;

  return signos.aries;
}
