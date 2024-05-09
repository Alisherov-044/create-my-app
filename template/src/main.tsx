import "@/styles";
import ReactDOM from "react-dom/client";
import { App } from "@/app";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { persister, store } from "@/redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={client}>
        <ConfigProvider theme={{ hashed: false }} wave={{ disabled: true }}>
            <Provider store={store}>
                <BrowserRouter>
                    <Provider store={store}>
                        <PersistGate
                            // loading={<Loading />}
                            persistor={persister}
                        >
                            <App />
                        </PersistGate>
                    </Provider>
                </BrowserRouter>
            </Provider>
        </ConfigProvider>
    </QueryClientProvider>
);
