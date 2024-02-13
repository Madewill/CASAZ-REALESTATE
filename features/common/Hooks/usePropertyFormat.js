export const usePropertyFormat = (property) => {
    const address = property.location?.map((item) => item.name).join(", ") || "";
    const coverPhoto = property.coverPhoto?.url || "";
    const propertyType = property.category?.map((category) => category.name).join(", ") || "";
    const price = property.price?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }) || "";
    const title = property.title || "";
    const rooms = property.rooms || 0;
    const baths = property.baths || 0;
    const purpose = property.purpose || "";
    const sqSize = property.area?.toFixed(2) || "";
    const externalID = property.externalID || "";

    const photos = property.photos?.map((photo) => photo.url) || [];
    const description = property.description || "";
    const coverVideoUrl = property.coverVideo?.url || "";
    const coverVideo = coverVideoUrl.slice(-11);
    const panorama = property.panoramas?.[0]?.url || "";
    const amenities = property.amenities?.flatMap((amenity) => amenity.text) || [];
    const furnished = property.furnishingStatus || "";

    return {
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
        photos,
        description,
        coverVideo,
        panorama,
        amenities,
        furnished
    };
};
