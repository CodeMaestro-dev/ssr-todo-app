import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Link from "next/link";
import { wrapper } from "@/lib/store";

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <section className="grid grid-cols-12">
      <nav className="bg-gray-200 col-start-1 col-end-3 fixed md:w-[150px] lg:w-[200px] p-5 h-full hidden md:block">
        <h1 className="text-2xl mb-5">SSR Todo🎯</h1>
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="/">Add Todo ➕</Link>
          </li>
          <li>
            <Link href="/todo">Your Todos ⚒️</Link>
          </li>
        </ul>
      </nav>
      <main className="col-start-1 col-end-13 md:col-start-3">
        <header className="flex flex-col gap-3 min-[400px]:flex-row items-center p-4 justify-between bg-gray-200 w-full fixed md:hidden">
          <h1 className="text-2xl">SSR Todo🎯</h1>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Add Todo ➕</Link>
            </li>
            <li>
              <Link href="/todo">Your Todos ⚒️</Link>
            </li>
          </ul>
        </header>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </section>
  );
}

export default wrapper.withRedux(App);
