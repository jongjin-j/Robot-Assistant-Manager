"use client";

import { useAuth } from "../provider";

export default function Logs() {
  const { auth, setAuth } = useAuth()!;

  return <div>Hi</div>;
}
