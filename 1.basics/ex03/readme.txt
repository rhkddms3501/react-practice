ex03: Application의 분리2

1. ES6 Module System을 지원하는 브라우저에서는 
   분리된 ES6 Module System 기반의 JS Module간의 의존성을 보장
2. 문제점
    |-- FrontEnd Application이 수십, 수백 개의 Module로 분리된 경우,
    |   브라우저에서 이 모듈을 import 하는 것은 비 효율적
    |-- JavaScript 외의 다양한 Asset(css, image, font, ...)의 로딩 동기화는 불가능하다.