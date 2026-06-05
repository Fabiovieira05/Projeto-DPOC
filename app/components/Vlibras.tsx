"use client";

import VLibras from "vlibras-nextjs";

export default function VLibrasWidget() {
  return (
    /* forceOnload garante que o widget tente carregar imediatamente
       após a página montar, evitando que o avatar não apareça */
    <VLibras forceOnload={true} />
  );
}