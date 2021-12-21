const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;

    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    // // left와 top은 layout부터 발생하는 속성값이기 때문에 위 코드는 성능면에서 효율적으로 잘 짠 코드라고 할 수 없다.
    // // ! 그렇기 때문에, 어떤 요소를 움직이고 싶을 때 left와 top 속성값을 쓰는 것보다는
    // // ! composite만 발생하는 속성값인 translate를 이용하는 것이 성능을 고려해서 짠 더 나은 코드가 될 것이다.
    // tag.innerHTML = `${x}px, ${y}px`;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;

    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
