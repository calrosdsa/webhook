export {};

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: ()=>void
    getLoginStatus: ()=>void
  }
}