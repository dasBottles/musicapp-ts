"use client";

import { useState, useEffect } from "react";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <div>Model Provider</div>;
};

export default ModelProvider;
