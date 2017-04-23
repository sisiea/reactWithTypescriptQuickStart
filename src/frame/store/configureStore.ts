/*暂时先不区分生产环境与开发环境 */
// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod')
// } else {
//   module.exports = require('./configureStore.dev')
// }
import {configureStore} from "./configureStore.prod"

export default configureStore;