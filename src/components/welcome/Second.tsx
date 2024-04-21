import { defineComponent } from 'vue';
import s from "./Second.module.scss";
import clock from "../../assets/icons/clock.svg";
import { RouterLink } from "vue-router";

export const Second = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={clock} class={s.clock} alt="clock" />
          <h2>每日提醒<br />不会遗漏每一笔账单</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start">跳过</RouterLink>
          <RouterLink to="/welcome/3">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    )
  }
})