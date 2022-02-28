// ** Navigation sections imports
import dashboards from './dashboards'
import stores from './stores'
import clients from './clients'
import services from './services.js'
import orders from './orders'

// ** Merge & Export
export default [...dashboards, ...stores, ...services, ...clients, ...orders]