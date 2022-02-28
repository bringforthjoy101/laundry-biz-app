import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

// const userData = JSON.parse(localStorage.getItem('userData'))


const ManagerRoutes = [
    {
        path: '/apps/ecommerce/shop',
        className: 'ecommerce-application',
        component: lazy(() => import('../../views/laundry/ecommerce/shop'))
    },
    {
        path: '/apps/ecommerce/wishlist',
        className: 'ecommerce-application',
        component: lazy(() => import('../../views/laundry/ecommerce/wishlist'))
    },
    {
        path: '/apps/ecommerce/product-detail',
        exact: true,
        className: 'ecommerce-application',
        component: () => <Redirect to='/apps/laundry/product-detail/apple-i-phone-11-64-gb-black-26' />
    },
    {
        path: '/apps/ecommerce/product-detail/:product',
        exact: true,
        className: 'ecommerce-application',
        component: lazy(() => import('../../views/laundry/ecommerce/detail')),
        meta: {
          navLink: '/apps/ecommerce/product-detail'
        }
    },
    {
        path: '/apps/ecommerce/checkout',
        className: 'ecommerce-application',
        component: lazy(() => import('../../views/laundry/ecommerce/checkout'))
    },
    // {
    //   path: '/users/list',
    //   component: lazy(() => import('../../views/laundry/user/list'))
    // },
    // {
    //   path: '/user/view',
    //   exact: true,
    //   component: () => <Redirect to='/laundry/user/view/1' />
    // },
    // {
    //   path: '/user/view/:id',
    //   component: lazy(() => import('../../views/laundry/user/view')),
    //   meta: {
    //     navLink: '/laundry/user/view'
    //   }
    // },
    {
      path: '/clients/list',
      component: lazy(() => import('../../views/laundry/clients/list'))
    },
    {
      path: '/client/view',
      exact: true,
      component: () => <Redirect to='/laundry/clients/view/1' />
    },
    {
      path: '/client/view/:id',
      component: lazy(() => import('../../views/laundry/clients/view')),
      meta: {
        navLink: '/laundry/clients/view'
      }
    },
    {
      path: '/services/list',
      component: lazy(() => import('../../views/laundry/services/list'))
    },
    {
      path: '/services/view',
      exact: true,
      component: () => <Redirect to='/laundry/services/view/1' />
    },
    {
      path: '/services/view/:id',
      component: lazy(() => import('../../views/laundry/services/view')),
      meta: {
        navLink: '/laundry/services/view'
      }
    },
    {
      path: '/services/edit',
      exact: true,
      component: () => <Redirect to='/services/edit/1' />
    },
    {
      path: '/services/edit/:id',
      component: lazy(() => import('../../views/laundry/services/edit')),
      meta: {
        navLink: '/services/edit'
      }
    },
    {
      path: '/orders/list',
      component: lazy(() => import('../../views/laundry/order/list'))
    },
    {
      path: '/order/view',
      exact: true,
      component: () => <Redirect to='/laundry/order/view/1' />
    },
    {
      path: '/order/view/:id',
      component: lazy(() => import('../../views/laundry/order/view')),
      meta: {
        navLink: '/laundry/order/view'
      }
    },
    {
      path: '/order/preview/:id',
      component: lazy(() => import('../../views/laundry/order/preview')),
      meta: {
          navLink: '/invoice/preview'
      }
    },
    {
      path: '/order/preview',
      exact: true,
      component: () => <Redirect to='/order/preview/1' />
    },
    {
      path: '/order/print/:id',
      layout: 'BlankLayout',
      component: lazy(() => import('../../views/laundry/order/print'))
    },
    {
      path: '/settings/list',
      component: lazy(() => import('../../views/laundry/settings/list'))
    }
]

const BusaryRoutes = [
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/tuck-shop/ecommerce/shop'))
  },
  {
      path: '/apps/ecommerce/wishlist',
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/wishlist'))
  },
  {
      path: '/apps/ecommerce/product-detail',
      exact: true,
      className: 'ecommerce-application',
      component: () => <Redirect to='/apps/tuck-shop/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
      path: '/apps/ecommerce/product-detail/:product',
      exact: true,
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/detail')),
      meta: {
        navLink: '/apps/ecommerce/product-detail'
      }
  },
  {
      path: '/apps/ecommerce/checkout',
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/checkout'))
  },
  {
    path: '/admins/list',
    component: lazy(() => import('../../views/tuck-shop/admin/list'))
  },
  {
    path: '/admin/view',
    exact: true,
    component: () => <Redirect to='/tuck-shop/admin/view/1' />
  },
  {
    path: '/admin/view/:id',
    component: lazy(() => import('../../views/tuck-shop/admin/view')),
    meta: {
      navLink: '/tuck-shop/admin/view'
    }
  },
  {
    path: '/students/list',
    component: lazy(() => import('../../views/tuck-shop/student/list'))
  },
  {
    path: '/student/view',
    exact: true,
    component: () => <Redirect to='/tuck-shop/student/view/1' />
  },
  {
    path: '/student/view/:id',
    component: lazy(() => import('../../views/tuck-shop/student/view')),
    meta: {
      navLink: '/tuck-shop/student/view'
    }
  },
  {
    path: '/kitchen-staffs/list',
    component: lazy(() => import('../../views/tuck-shop/kitchen-staffs/list'))
  },
  {
    path: '/kitchen-staff/view',
    exact: true,
    component: () => <Redirect to='/tuck-shop/kitchen-staffs/view/1' />
  },
  {
    path: '/kitchen-staff/view/:id',
    component: lazy(() => import('../../views/tuck-shop/kitchen-staffs/view')),
    meta: {
      navLink: '/tuck-shop/kitchen-staff/view'
    }
  },
  {
    path: '/orders/list',
    component: lazy(() => import('../../views/tuck-shop/order/list'))
  },
  {
    path: '/order/view',
    exact: true,
    component: () => <Redirect to='/tuck-shop/order/view/1' />
  },
  {
    path: '/order/view/:id',
    component: lazy(() => import('../../views/tuck-shop/order/view')),
    meta: {
      navLink: '/tuck-shop/order/view'
    }
  },
  {
    path: '/transactions/list',
    component: lazy(() => import('../../views/tuck-shop/transaction/list'))
  },
  {
    path: '/transaction/view',
    exact: true,
    component: () => <Redirect to='/tuck-shop/transaction/view/1' />
  },
  {
    path: '/transaction/view/:id',
    component: lazy(() => import('../../views/tuck-shop/transaction/view')),
    meta: {
      navLink: '/tuck-shop/transaction/view'
    }
  }
]

const SalesRepRoutes = [
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/tuck-shop/ecommerce/shop'))
  },
  {
      path: '/apps/ecommerce/wishlist',
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/wishlist'))
  },
  {
      path: '/apps/ecommerce/product-detail',
      exact: true,
      className: 'ecommerce-application',
      component: () => <Redirect to='/apps/tuck-shop/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
      path: '/apps/ecommerce/product-detail/:product',
      exact: true,
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/detail')),
      meta: {
        navLink: '/apps/ecommerce/product-detail'
      }
  },
  {
      path: '/apps/ecommerce/checkout',
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/checkout'))
  },
  {
    path: '/students/list',
    component: lazy(() => import('../../views/tuck-shop/student/list'))
  },
  {
    path: '/student/view',
    exact: true,
    component: () => <Redirect to='/tuck-shop/student/view/1' />
  },
  {
    path: '/student/view/:id',
    component: lazy(() => import('../../views/tuck-shop/student/view')),
    meta: {
      navLink: '/tuck-shop/student/view'
    }
  }
]

const StoreRoutes = [
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/tuck-shop/ecommerce/shop'))
  },
  {
      path: '/apps/ecommerce/wishlist',
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/wishlist'))
  },
  {
      path: '/apps/ecommerce/product-detail',
      exact: true,
      className: 'ecommerce-application',
      component: () => <Redirect to='/apps/tuck-shop/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
      path: '/apps/ecommerce/product-detail/:product',
      exact: true,
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/detail')),
      meta: {
        navLink: '/apps/ecommerce/product-detail'
      }
  },
  {
      path: '/apps/ecommerce/checkout',
      className: 'ecommerce-application',
      component: lazy(() => import('../../views/tuck-shop/ecommerce/checkout'))
  },
  {
    path: '/kitchen-staffs/list',
    component: lazy(() => import('../../views/tuck-shop/kitchen-staffs/list'))
  },
  {
    path: '/kitchen-staff/view',
    exact: true,
    component: () => <Redirect to='/tuck-shop/kitchen-staffs/view/1' />
  },
  {
    path: '/kitchen-staff/view/:id',
    component: lazy(() => import('../../views/tuck-shop/kitchen-staffs/view')),
    meta: {
      navLink: '/tuck-shop/kitchen-staff/view'
    }
  }
]

// export default userData?.role === 'manager' ? ManagerRoutes : userData?.role === 'busary' ? BusaryRoutes : userData?.role === 'sales rep' ? SalesRepRoutes : StoreRoutes
export default ManagerRoutes
