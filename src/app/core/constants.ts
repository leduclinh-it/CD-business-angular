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
    GET_LIST_PRODUCT: '/admin/product/createProduct'
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
    GET_CUSTOMER_BY_CODE: '/employee/customer/getCustomerByCode'
  },



}
export const LocalStorage = {
  CART: 'cart',
  USER_INFO: 'user-info',
}
