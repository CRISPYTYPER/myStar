// router/index.js
import Vue from "vue"
import VueRouter from "vue-router"
import HomeComponent from '../components/HelloWorld'
import AppComponent from '../App'
// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

// 라우트 정보
// 라우팅을 해주면서 #을 제거해주면서, path에 입력한 경로에 매핑된 컴포넌트를 보여준다.
const route = [
    {path: "/", component: HomeComponent}, // 루트(/)로 접속했을때, Home 컴포넌트를 보여준다.
    {path: "/about", component: AppComponent}, // /about으로 접속 했을때, About 컴포넌트를 보여준다.
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
    mode: 'history',
    routes: route
});

export default router;
