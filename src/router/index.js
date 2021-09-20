// router/index.js
import Vue from "vue"
import VueRouter from "vue-router"
import IntroComponent from '@/components/Intro'
import HelloComponent from '@/components/HelloWorld'
import InputComponent from '@/components/Input'
import ResultComponent from '@/components/Result'
// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

// 라우트 정보
// 라우팅을 해주면서 #을 제거해주면서, path에 입력한 경로에 매핑된 컴포넌트를 보여준다.
const route = [
    {path: "/", component: IntroComponent}, // 루트(/)로 접속했을때, intro 컴포넌트를 보여준다.
    {path: "/input", component: InputComponent},
    {path: "/result", component: ResultComponent}

];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
    mode: 'history',
    routes: route
});

export default router;
