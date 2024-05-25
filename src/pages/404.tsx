import Button from "@/components/shared/Button";
import Head from "@/components/shared/Head";
import Section from "@/components/shared/Section";
import Link from "next/link";

function ErrorPage() {

  return (
    <div className="relative w-full min-h-screen flex items-center">
      <Head title="An error has occurred (404) - Exoexs" />

      <div className="fixed z-0 w-full h-full flex items-center justify-center">
        <h1 className="font-bold text-[30vw] text-gray-500">404</h1>

        <div className="absolute inset-0 bg-black/90 w-full h-full"></div>
      </div>

      <Section className="relative z-10 flex flex-col items-center w-full h-full text-center ">
        <div className="mb-4 text-gray-300">
          <span className="text-lg">
          ERROR LOADED COBA LAGI NANTI YA KONTOL 
          </span>
        </div>

        <p className="text-4xl font-semibold">AICHINIME SEDANG MENGALAMI BUG</p>

        <p className="text-2xl text-gray-200 mt-4">SOON</p>

        <Link href="/">
          <Button primary outline className="mt-8">
            <p className="text-lg">KEMBALI LAGI KE MENU UTAMA KONTOL</p>
          </Button>
        </Link>
      </Section>
    </div>
  );
}

ErrorPage.getLayout = (page: any) => page;

export default ErrorPage;
