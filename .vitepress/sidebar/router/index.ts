import tools from "./tools"
import HCJ from "./HCJ"

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
]

export default genRouter(routerList)
