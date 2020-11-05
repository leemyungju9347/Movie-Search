let slider = null;
let slideItem = null;
let slideLen = null;
let slideHeight = null;

let index = 0;

function init(slideWrap) {
  slider = slideWrap;
  slideItem = slideWrap.querySelectorAll('li');
  slideLen = slideItem.length;
  slideHeight = 40;

  // 슬라이드 양끝 복제
  const firstSlideClone = slider.firstElementChild.cloneNode(true);
  const lastSlideClone = slider.lastElementChild.cloneNode(true);

  slider.append(firstSlideClone);
  slider.prepend(lastSlideClone);

  //슬라이드 위치 초기 셋팅
  slider.style.transform = `translateY(-${slideHeight}px)`;

  //   setInterval(nextSlide, 2000);
}

function nextSlide() {
  if (index <= slideLen - 1) {
    slider.style.transform = `translateY(-${slideHeight * (index + 2)}px)`;
    slider.style.transition = `1s`;
  }

  if (index === slideLen - 1) {
    setTimeout(() => {
      slider.style.transform = `translateY(-${slideHeight}px)`;
      slider.style.transition = `0s`;
    }, 1000);

    index = -1;
  }

  index++;
}

export { init, nextSlide };
