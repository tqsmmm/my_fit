import { createApp } from 'vue';
import App from './App.vue';
import { Tabbar, TabbarItem, Icon, NavBar, Cell, CellGroup } from 'vant';
import router from './router';

const app = createApp(App);

app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
app.use(NavBar);
app.use(Cell);
app.use(CellGroup);

app.use(router);

app.mount('#app');
