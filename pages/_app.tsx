import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Link from "next/link";
import { wrapper } from "@/lib/store";

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <section className="grid grid-cols-12">
      <nav className="bg-gray-200 col-start-1 col-end-3 fixed w-[250px] p-5 h-full">
        <h1 className="text-2xl mb-5">SSR Todo 📝🎯</h1>
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="/">Add Todo ➕</Link>
          </li>
          <li>
            <Link href="/todo">Your Todos ⚒️</Link>
          </li>
        </ul>
      </nav>
      <main className="col-start-3 col-end-13">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </section>
  );
}

export default wrapper.withRedux(App);
