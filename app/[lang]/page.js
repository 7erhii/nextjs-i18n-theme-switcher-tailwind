import ThemeToggle from "@/components/ThemeToggle";
import { getDictionary } from "./dictionaries";
import LanguageSwitch from "@/components/LanguageSwitch";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-4">
      <ThemeToggle />
      <h1 className="text-light-h1Text dark:text-dark-h1Text">
        {dict.main.title}
      </h1>
      <h2 className="text-light-h2Text dark:text-dark-h2Text">
        {dict.main.greeting}
      </h2>
      <LanguageSwitch lang={lang} />
    </main>
  );
}
