import { axios } from "@/lib/axios";

export const getProperty = async (id) => {
    const { data } = await axios.get("/properties/detail", {
        params: { externalID: id,
        amenities: true,
        }
    });
    return data;
}