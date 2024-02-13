import PropertyCard from "@/features/common/modules/PropertyCard/PropertyCard";
import { Box, SimpleGrid } from "@chakra-ui/react";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";
import { getProperties } from "@/features/Home/api/getProperties";

const Properties = ({ properties }) => {
  console.log({ properties });

  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" padding="3rem">
        <Box maxWidth="1280px" margin="0 auto">
          <SimpleGrid
            columns={{ base: "1", sm: "3" }}
            gap={{ base: "0", sm: "2rem" }}
          >
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Properties;

export async function getServerSideProps() {
  const properties = await getProperties(25);
  return {
    props: { properties: properties },
  };
}
