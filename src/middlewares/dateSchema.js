import httpStatus from "http-status";
import dayjs from "dayjs";
export default function dateSchema() {
  return (req, res, next) => {
    const { date } = req.body;
    const part = date.split("/");
    const day = part[0];
    const month = part[1];
    const year = part[2];
    const today = dayjs();
    //TRANSFORMANDO A DATA DO BODY EM UMA DATA VALIDA
    const formattedDate = `${year}/${month}/${day}`;
    const parsedDate = dayjs(formattedDate);
    
    //console.log(dayjs(new Date(date)))
    if (
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year < 1000 ||
      parsedDate.isBefore(today)
    ) {
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send("Data inválida");
    }
    next();
  };
}
