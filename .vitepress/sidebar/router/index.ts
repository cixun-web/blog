import tools from "./tools"

const genRouter = (list: {key: string, items: any[]}[]) => {
  const temp = {}
  list.forEach(item => {
    temp[item.key] = item.items
  })
  return temp
}

const routerList = [
  ...tools
]

export default genRouter(routerList)
