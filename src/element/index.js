import { Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col,Form,
  FormItem } from 'element-ui'
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
  }
}
export default element