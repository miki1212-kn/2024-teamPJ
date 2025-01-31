import Link from "next/link";
// import { useState, useEffect } from "react";
import React from "react";

type Props = {
  text?: string;
  href: string;
};

//ボタンスタイル（デフォルト）
export default function BtnStyle(props: Props) {
  return (
    <button>
      <Link href={props.href}>{props.text || "デフォルトのテキスト"}</Link>
    </button>
  );
}
