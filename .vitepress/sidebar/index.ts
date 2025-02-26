import tools from "./tools"
import HCJ from "./HCJ"
import kg from "./kg"
import offer from "./offer"
import study from "./study"

const genRouter = (list: {key: string, items: any[]}[]) => {
  const temp = {}
  list.forEach(item => {
    temp[item.key] = item.items
  })
  return temp
}

const routerList = [
  ...tools,
  ...HCJ,
  ...kg,
  ...offer,
  ...study,
]

export default genRouter(routerList)
