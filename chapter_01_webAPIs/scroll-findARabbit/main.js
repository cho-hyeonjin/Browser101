const button = document.querySelector("button");
const rabbit = document.querySelector("#rabbit");
button.addEventListener("click", () => {
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" }); // 클릭했을 때 토끼가 중앙에 오게 하려면 block: center, 제일 바닥에 오게 하고 싶으면 block: end
});

// API를 사용할 때 그냥 사용하는 것보다
// MDN에 해당 api를 검색해서
// 그 API에 전달할 수 있는 인자들이 무엇이 있는지
// 그것들을 각각 등록했을 때 어떻게 반응하는지 직접 적용하고 확인해가면서
// 틈틈이 스스로 익혀가며 사용하면 정말 Good!!
