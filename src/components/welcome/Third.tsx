import { defineComponent } from 'vue';
import s from "./Third.module.scss";
import chart from "../../assets/icons/chart.svg";
import { RouterLink } from "vue-router";

export const Third = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={chart} class={s.chart} alt="chart" />
          <h2>数据可视化<br />收支一目了然</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start">跳过</RouterLink>
          <RouterLink to="/welcome/4">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    )
  }
})