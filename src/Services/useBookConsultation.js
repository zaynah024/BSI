import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../Config/Constants";

const bookConsultation = async (formData) => {
  const response = await axios.post(
    `${BASE_URL}api/submit-application/`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const useBookConsultation = () => {
  return useMutation({
    mutationFn: bookConsultation,
    onSuccess: (data) => {
      // You can add any success handling here
      console.log("Booking successful:", data);
    },
    onError: (error) => {
      // You can add any error handling here
      console.error("Booking failed:", error);
    },
  });
};
