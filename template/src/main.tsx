import "@/styles";
import ReactDOM from "react-dom/client";
import { App } from "@/app";
import { ConfigProvider } from "antd";
import { Loading } from "@/components";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={client}>
        <ConfigProvider theme={{ hashed: false }} wave={{ disabled: true }}>
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </ConfigProvider>
    </QueryClientProvider>
);
