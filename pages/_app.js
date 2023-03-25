import "@/styles/globals.css";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from "@/redux/store";
export default function App({ Component, pageProps }) {
  return (
    <Provider  store={store} >
      <Component {...pageProps} />
     </Provider>
  );
}
