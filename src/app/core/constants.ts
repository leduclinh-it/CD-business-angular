export const frontendUrl = {
  DASHBOARD :'dashboard',
  CUSTOMER_MANAGER: 'customer-manager',
  SELLING: 'selling',
  CD_MANAGER: 'cd-manager',
  USER_MANAGER: 'user-manager',
  LOGIN: 'login',
  REGISTER: 'register',
  AUTH: 'auth',
  NOT_FOUND: '**'
};
export const ApiUrl = {

  ADMIN: {
    CREATE_PRODUCT_TITLE: '/admin/product/createProductTitle',
    CREATE_PRODUCT: '/admin/product/createProduct',
    DELETE_PRODUCT: '/admin/product/deleteProduct',
    DELETE_PRODUCT_TITLE: '/admin/product/deleteProductTitle',
    DELETE_CUSTOMER: '/admin/customer/deleteCustomer'
  },
  EMPLOYEE: {
    GET_LIST_CATEGORY: '/employee/category/getListCategory',
    GET_LIST_PRODUCT: '/employee/product/getListProduct',

    //order
    CREATE_ORDER: '/employee/order/createOrder',
    UPDATE_ORDER: '/employee/order/updateOrder',

    // Customer
    CREATE_CUSTOMER: '/employee/customer/createCustomer',
    GET_LIST_CUSTOMER: '/employee/customer/getListCustomer',
    GET_CUSTOMER_BY_ID: '/employee/customer/getCustomerById',
    GET_CUSTOMER_BY_CODE: '/employee/customer/getCustomerByCode',

    //Booking
    CREATE_BOOKING: '/employee/booking/createBooking',

  },



}
export const LocalStorage = {
  CART: 'cart',
  USER_INFO: 'user-info',
}
