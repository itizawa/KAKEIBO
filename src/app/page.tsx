"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AlignJustify } from "lucide-react";

export default function Home() {
  // 現在の日付を取得
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // JavaScriptの月は0から始まるため+1
  const currentYear = today.getFullYear();

  // 金額データ（実際のアプリではAPIやデータベースから取得）
  const amountData = [
    { id: 1, name: "金額 1", amount: 10000 },
    { id: 2, name: "金額 2", amount: 300 },
    { id: 3, name: "金額 3", amount: 1000 },
    { id: 4, name: "金額 4", amount: 200 },
    { id: 5, name: "金額 5", amount: 10 },
    { id: 6, name: "金額 6", amount: 0 },
  ];

  // 合計金額を計算
  const totalAmount = amountData.reduce((sum, item) => sum + item.amount, 0);

  // 週間と月間の合計（サンプル）
  const weeklyTotal = 3210;
  const monthlyTotal = 3210;

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-inter)]">
      {/* 上部バー */}
      <header className="flex justify-between items-end px-4 py-2 bg-[#91D1D9] border-b border-[rgba(15,61,62,0.5)]">
        <Avatar>
          <AvatarImage src="/avatar.jpg" className="rounded-full h-10 w-10" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-end gap-2">
          <h1 className="text-3xl font-bold text-[#0F3D3E]">KAKEIBO</h1>
        </div>
        <AlignJustify className="w-10 h-10 text-[#0F3D3E]" strokeWidth={2} />
      </header>

      <main className="flex-1 flex flex-col">
        {/* カレンダー */}
        <div className="flex p-2 bg-[#E3ECEC] border-b border-[rgba(15,61,62,0.5)]">
          <div className="flex flex-col gap-y-2 items-center justify-start px-4 flex-1">
            <div className="flex flex-col items-center p-2">
              <span className="text-[80px] font-extrabold text-[#0F3D3E] leading-none">
                {currentMonth}
              </span>
            </div>
            <span className="text-4xl font-extrabold text-[#0F3D3E]">
              {currentYear}
            </span>
          </div>
          <Calendar
            mode="single"
            selected={today}
            className="rounded-md bg-white"
          />
        </div>

        {/* 金額まとめ */}
        <div className="flex justify-center border-b border-[rgba(15,61,62,0.5)]">
          <div className="w-1/2 flex justify-between items-center px-4 py-6 bg-[#91D1D9] border-r border-[rgba(15,61,62,0.5)]">
            <span className="text-xl font-medium text-[#0F3D3E]">1 week</span>
            <span className="text-xl font-medium text-[#0F3D3E]">
              {weeklyTotal}円
            </span>
          </div>
          <div className="w-1/2 flex justify-between items-center px-4 py-6 bg-[#91D1D9] border-l border-[rgba(15,61,62,0.5)]">
            <span className="text-xl font-medium text-[#0F3D3E]">1 month</span>
            <span className="text-xl font-medium text-[#0F3D3E]">
              {monthlyTotal}円
            </span>
          </div>
        </div>

        {/* Day項目 */}
        <div className="flex justify-between items-center py-2 px-4 bg-[#E3ECEC] border-b border-[rgba(15,61,62,0.5)]">
          <h2 className="text-xl font-medium text-[#0F3D3E]">Day</h2>
          <Button className="bg-[#91D1D9] text-[#0F3D3E] border border-[#0F3D3E] hover:bg-[#7BBBC3] rounded-lg">
            Add
          </Button>
        </div>

        {/* 金額項目リスト */}
        <div className="flex-1 flex flex-col">
          {amountData.map((item, index) => (
            <div
              key={item.id}
              className={`flex justify-between items-center p-4 border-b border-[rgba(15,61,62,0.5)] ${
                index % 2 === 0 ? "bg-[#F0F0F0]" : "bg-[#E3ECEC]"
              }`}
            >
              <span className="text-xl font-medium text-[#0F3D3E]">
                {item.name}
              </span>
              <span className="text-xl font-medium text-[#0F3D3E]">
                {item.amount}円
              </span>
            </div>
          ))}
        </div>

        {/* 合計 */}
        <div className="flex justify-between items-center p-4 bg-[#91D1D9]">
          <span className="text-2xl font-bold text-[#0F3D3E]">Total</span>
          <span className="text-2xl font-bold text-[#0F3D3E]">
            {totalAmount}円
          </span>
        </div>
      </main>
    </div>
  );
}
