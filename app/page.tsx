"use client";

import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import Countdown from "@/components/Countdown";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<number>(1682784000000);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    const selectedDate = new Date(`${dateString} 00:00:00`).getTime();
    console.log(1111, selectedDate);
    setDate(selectedDate);
  };

  return (
    <main className="flex flex-col m-auto h-screen max-w-[1280px] items-center justify-center">
      <DatePicker onChange={onChange} />
      <Countdown countDate={date} />
      {/* <button
        onClick={() => {
          setInterval(Countdown(date), 1000);
        }}
      >
        Start
      </button> */}
    </main>
  );
}
