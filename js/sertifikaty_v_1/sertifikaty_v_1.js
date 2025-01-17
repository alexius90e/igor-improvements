const sertifikatyV1SliderElem = document.querySelector('.sertifikaty_v_1__slider');

if (sertifikatyV1SliderElem) {
  const sertifikatyV1Slider = new Swiper(sertifikatyV1SliderElem, {
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: {
      nextEl: '.sertifikaty_v_1__next',
      prevEl: '.sertifikaty_v_1__prev',
    },
  });
}
