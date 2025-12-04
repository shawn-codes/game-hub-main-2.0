import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ef9025d2dfeb4a66851a9da329e029ba",
  },
});
