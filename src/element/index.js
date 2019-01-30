import { Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col,Form,
  FormItem, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const element = {
  install:(Vue) =>{
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Button)
  }
}
export default element

//在babelrc中官方文档的引入只需要引入下面的component，上面的es2015不需要引入（引入会报错）