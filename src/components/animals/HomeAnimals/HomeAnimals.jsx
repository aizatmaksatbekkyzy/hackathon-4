import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HomeText from "./HomeText";
export default () => {
  return (
    <>
      <h1
        style={{
          color: "rgb(8, 112, 224)",
          marginLeft: "37%",
          width: "490px",
          heidht: "25px",
          // backgroundColor: "rgb(180, 178, 178)",
          borderRadius: "5px",
          // borderWidth: "medium",
          // borderColor: "rgb(8, 112, 224)",
        }}>
        How Dogs and Cats Can Coexist?
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        <SwiperSlide>
          <img
            src="https://www.rinti.de/fileadmin/_processed_/3/d/csm_HuK_AdobeStock_187577407_d8a7284c00.jpg"
            width="98%"
            alt=""
            style={{
              borderRadius: "50px",
              marginTop: "20px",
              borderWidth: "thick",
              borderStyle: "inset",
              borderColor: "rgb(8, 112, 224)",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="	https://www.rinti.de/fileadmin/_processed_/0/4/csm_HuK_AdobeStock_156099814_dca71bc24e.jpg"
            width="98%"
            alt=""
            style={{
              borderRadius: "50px",
              marginTop: "20px",
              borderWidth: "thick",
              borderStyle: "inset",
              borderColor: "rgb(8, 112, 224)",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.akc.org/wp-content/uploads/2015/06/Golden-Retriever-laying-down-playing-with-a-cat.jpeg"
            width="98%"
            alt=""
            style={{
              borderRadius: "50px",
              marginTop: "20px",
              borderWidth: "thick",
              borderStyle: "inset",
              borderColor: "rgb(8, 112, 224)",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.theladders.com/wp-content/uploads/dog-cat-190709-800x450.jpg"
            width="98%"
            height="480px"
            alt=""
            style={{
              borderRadius: "50px",
              marginTop: "20px",
              borderWidth: "thick",
              borderStyle: "inset",
              borderColor: "rgb(8, 112, 224)",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.gulftoday.ae/-/media/gulf-today/images/articles/lifestyle/2019/4/18/dog-owners.ashx?h=450&la=en&w=750&hash=224CE67C7C872BE4758996C0BCB7423F"
            width="98%"
            height="480px"
            alt=""
            style={{
              borderRadius: "50px",
              marginTop: "20px",
              borderWidth: "thick",
              borderStyle: "inset",
              borderColor: "rgb(8, 112, 224)",
            }}
          />
        </SwiperSlide>
        ...
      </Swiper>
      <HomeText />
    </>
  );
};
