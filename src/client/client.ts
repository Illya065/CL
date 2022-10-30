import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.thecatapi.com/",
  headers: {
    "x-api-key":
      "live_7fiDiuYx4s896uzjXCdNOrOnQcd78dkyxMzh11llai9PStUn8Y1PRKaNSIXijuNw",
  },
});
