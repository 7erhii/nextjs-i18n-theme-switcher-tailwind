"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation"; // App Router hooks

// components from your UI library
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitch({ lang }) {
  const router = useRouter();
  const pathname = usePathname();

  // Функция для смены языка
  const changeLanguage = (newLang) => {
    // Меняем язык, сохраняя текущий маршрут
    const newPathname = `/${newLang}${pathname.substring(3)}`;
    router.push(newPathname);
  };

  return (
    <div>
      <Select onValueChange={changeLanguage} defaultValue={lang}>
        <SelectTrigger>
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="es">ES</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
