import { Header, Footer } from "@/components";
import { PageProps } from "./types";

export function PageTemplate({ ...props }: PageProps) {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto">{props.children}</div>
      </main>
      <Footer />
    </>
  );
}
