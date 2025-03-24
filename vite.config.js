import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html

        mainPage: "src/pages/main-page.html",
        myPage: "src/pages/mypage.html",
        likePage: "src/pages/like-page.html",
        shoppingbagPage: "src/pages/shoppingbag-page.html",
        loginPage: "src/pages/login-page.html",
        magazinePage: "src/pages/29Magazine.html",
        bestPage: "src/pages/best-page.html",
        specialPage: "src/pages/specialorder-page.html",
        womenPage: "src/pages/women-page.html",
        itemdetailPage: "src/pages/itemdetail-page.html",

        bestComponent: "src/component/best-component.html",
        buttonComponent: "src/component/button-component.html",
        cardlistComponent: "src/component/card-list-component.html",
        card1Component: "src/component/card1-component.html",
        card2Component: "src/component/card2-component.html",
        card3Component: "src/component/card3-component.html",
        footerComponent: "src/component/footer.html",
        headerComponent: "src/component/header-component.html",
        loginComponent: "src/component/login-component.html",
        mypageComponent: "src/component/mypage-component.html",
        navbarComponent: "src/component/navbar-component.html",
        magazineComponent: "src/component/29Magazine-component.html",
        customFooterComponent: "src/component/custom-footer-component.html",
        infoComponent: "src/component/info-component.html",
        modalComponent: "src/component/modal-component.html",
        reviewComponent: "src/component/review-component.html",
        specialorderComponent: "src/component/specialorder-component.html",
        tableComponent: "src/component/table-component.html",
        womenComponent: "src/component/women-component.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
