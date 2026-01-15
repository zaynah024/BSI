import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../Config/Constants";

const getvideos = async () => {
  const API = `${BASE_URL}api/youtube-video-list/`;

  const res = await axios.get(API);
  return res;
};

export const useYoutubeList = () => {
  const { data, isLoading, isError, status, isPending } = useQuery({
    queryKey: ["all-vans"],
    queryFn: () => getvideos(),
  });
  return { data, isLoading, isError, status, isPending };
};
