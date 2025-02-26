import tools from "./tools"
import HCJ from "./HCJ"
import kg from "./kg"
import offer from "./offer"

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
]

export default genRouter(routerList)
