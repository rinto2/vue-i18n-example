const context = require.context('./pack', false, /\.json$/)
let module = {}

context.keys().forEach(key => {
    const name = key.slice(2, -5)
    context(key).locale = name // 将文件命添加为属性"简写"
    module[name] = { ...context(key) }
})

export default module