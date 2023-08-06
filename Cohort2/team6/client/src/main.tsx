import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
// msw setup
// async function prepare() {
//   if (process.env.NODE_ENV === 'development') {
//     const { worker } = await import('./mocks/worker.ts')
//     return worker.start({ onUnhandledRequest: 'bypass' })
//   }
//   return Promise.resolve();
// }
// prepare().then(() => {
//   ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <ChakraProvider theme={theme}>
//             <BrowserRouter>
//               <App />
//             </BrowserRouter>
//           </ChakraProvider>
//         </PersistGate>
//       </Provider>
//     </React.StrictMode>
//   )
// }).catch(console.error)


// prod use
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);