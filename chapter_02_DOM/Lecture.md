# 👩🏻‍🏫 이번 파트에서 공부할 것들

### 👉🏻 사람이 만든 웹페이지나 웹앱을 Browser가 어떻게 분석하여 정확한 위치에 표시하는지

### 👉🏻 우리(사람)가 어떻게 DOM 요소를 조작할 수 있는지

### 👉🏻 (심화) Browser가 렌더링하는 순서

### 👉🏻 어떤 식으로 CSS를 쓰고 어떤 animation을 써야 Browser 성능에 좋은지

&nbsp;

---

&nbsp;

## ✨ DOM

### (Document Object Model)

&nbsp;

![IMG_BDEDC10BF566-1](https://user-images.githubusercontent.com/78816754/146926678-7633258d-ecbc-42f1-94c5-92f649ef6958.jpeg)

<img width="1095" alt="스크린샷 2021-12-21 오후 8 39 05" src="https://user-images.githubusercontent.com/78816754/146926703-d31e3def-6128-4ce0-b88f-9deab585f172.png">

![133896219-3d36baef-47f4-4410-94f9-3ea15e191c82](https://user-images.githubusercontent.com/78816754/146927485-6413d7eb-700e-411c-be31-24af26cef385.jpeg)

![133920501-f41060fc-6874-4537-bd61-4883302ef735](https://user-images.githubusercontent.com/78816754/146927503-ac7eabb8-5f2a-436c-841e-fab4bc807974.jpeg)
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ(_위 자료들은 무단복제 및 사용이 금지된 자료입니다._)

&nbsp;

**About "✨ DOM Node"**

👉🏻&nbsp; https://developer.mozilla.org/en-US/docs/Web/API/Node

&nbsp;

**About "✨ Event Target"**

👉🏻&nbsp; https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

&nbsp;

---

&nbsp;

🙋🏻 질문있어요!

Browser에서 우리가 작성한 HTML 파일을 분석하게 되면,

HTML에 있는 요소(Element)들을 Document Object Model로 변환했는데,

요소들 말고 우리가 작성한 CSS 스타일들은 어디로 가는 거죠?

&nbsp;

### 👩🏻‍🏫 CSS 스타일을 브라우저가 어떻게 이해하는지 알아보자.

&nbsp;

## ✨ CSSOM

### (CSS Object Model)

&nbsp;

<img width="1084" alt="스크린샷 2021-12-21 오후 10 29 02" src="https://user-images.githubusercontent.com/78816754/146939038-58922f18-83ff-48a6-9433-5bd13a5e61f4.png">

<img width="1094" alt="스크린샷 2021-12-21 오후 10 32 08" src="https://user-images.githubusercontent.com/78816754/146939060-6f7e9e6f-8184-4557-adf9-034e39941728.png">

&nbsp;

---

&nbsp;

## ✨ 성능 보장 렌더링 순서 (중요⭐️)

&nbsp;

브라우저에서 URL을 입력하게 되면, 아래와 같은 순서로 진행됨.

### requests / response ➡️ loading ➡️ scripting ➡️ render tree ➡️ layout ➡️ painting

&nbsp;

1. 브라우저가 서버에게 HTML 파일을 요청
2. HTML 파일을 서버로부터 받아서 로딩
3. HTML 파일을 한 줄, 한 줄씩 읽어서 DOM 요소로 변환하고<br/>
   CSSOM으로 변환 (스크립팅)
4. 이것을 브라우저 window에 표기하기 위해서 준비를 함. 그 준비는 다음과 같음.
   (1) render tree를 만든 다음
   (2) 각각의 요소들이 어떤 위치에 얼마나 크게 표기될 것인지 계산 (layout)
   (3) 그림을 그림 (painting)

&nbsp;

**1~3 ( requests/response → loading → scripting )**

**: Construction 파트**

👉🏻 HTML 페이지를 브라우저가 이해할 수 있도록 브라우저만의 언어( rendering tree )로 바꾸는 파트

&nbsp;

**4.(1)~(3)**

**: Operation 파트**

👉🏻 rendering tree를 이용해서 구조를 작성하고, 어디에 둘 건지 계산하고, 실제로 window에 그림을 그려주는 파트

&nbsp;

### Operation 파트 자세히 보기

**layout :** render tree를 기반으로 (render tree는 DOM요소 + CSSOM 까지 포함된 것)

대략적인 위치, 너비, 높이 이런 것들을 계산해서 layout 그려주는 단계

**paint :** layout에 바로 그림을 그리는 게 X, X, X!!! 레이어 기반으로 색칠할 준비만 해 둠.

```
레이어가 과해지면 성능 저하의 원인이 되므로 필요 없는 레이어나 will-change의 남용은 지양해야 한다.
```

**composition :** paint에서 준비한 레이어를 차곡차곡 브라우저에 표기.

&nbsp;

<img width="944" alt="스크린샷 2021-12-21 오후 11 30 35" src="https://user-images.githubusercontent.com/78816754/146949905-31d823ec-1541-4442-b6e7-b0033fa8e616.png">

### 나중에 CSS 작성할 때, 내가 사용하려는 속성값

### 특히 animation, transition을 이용할 때 내가 사용하려는 css속성값이 무엇이냐 에 따라서

### layout이 발생할 수도 있고, paint만 발생할 수도, composition만 발생할 수도 있다.

### 같은 결과를 낸다면, composition만 발생하는 속성값을 쓰는 게 성능면으로 봤을 때 더 좋은 방향임.

&nbsp;

---

&nbsp;

## ✨ 레이어 순서

&nbsp;

<img width="851" alt="스크린샷 2021-12-21 오후 11 45 59" src="https://user-images.githubusercontent.com/78816754/146950172-305ff419-4f84-47ec-a1dd-42cc50521d77.png">

&nbsp;

<img width="404" alt="스크린샷 2021-12-21 오후 11 49 15" src="https://user-images.githubusercontent.com/78816754/146950233-262fa60b-ad30-4117-a668-1cbca5c481e1.png">

&nbsp;

<img width="1102" alt="스크린샷 2021-12-21 오후 11 49 29" src="https://user-images.githubusercontent.com/78816754/146950259-fda6cc0e-cf94-4504-a842-55a9b28c5cd1.png">
