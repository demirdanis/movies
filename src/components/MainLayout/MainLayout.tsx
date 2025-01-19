import ClientThemeProvider from "@/providers/muiThemeProvider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { IMainLayout } from "./MainLayout.types";
import StoreProvider from "@/providers/storeProvider";
import styles from "./MainLayout.module.scss";
export default function MainLayout({ children }: IMainLayout) {
  return (
    <StoreProvider>
      <ClientThemeProvider>
        <div className={styles["main-layout"]}>
          <Header />
          <main className={styles["main-layout__children"]}>{children}</main>
          <Footer />
        </div>
      </ClientThemeProvider>
    </StoreProvider>
  );
}
