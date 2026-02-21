import Heading from "@/components/layout/heading";
import TiltedCard from "@/components/TiltedCard";

const CategorySection = () => {
  const categories = [
    {
      title: "Hospitality",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      title: "Education",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
      title: "Health Care",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    },
    {
      title: "Retail Store",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    // {
    //   title: "Events",
    //   image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    // },
    // {
    //   title: "Corporates",
    //   image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    // },
  ];
  return (
    <div className="w-full py-8 px-6 max-w-7xl mx-auto">
      <Heading
        heading="  Packed with "
        highliter="thousands of features"
        pera="  From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you."
      />

      <div className="px-8 mb-10">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black lg:text-5xl lg:leading-tight dark:text-white"></h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300"></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {categories.map(function (item, index) {
          return (
            <TiltedCard
              key={index}
              imageSrc={item.image}
              altText={item.title}
              captionText={item.title}
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="text-white text-xl font-semibold pt-0 text-center tilted-card-demo-text bg-black/40 px-4 rounded-xl bg-blur-sm ">
                  {item.title}
                </p>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
