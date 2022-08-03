import Swiper, { Pagination, Navigation } from "swiper";

function Carousel() {
  return new Swiper(".mySwiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

export { Carousel };
