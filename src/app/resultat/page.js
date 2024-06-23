"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Component() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const resultParam = searchParams.get("result");
    if (resultParam) {
      setResult(JSON.parse(resultParam));
    }
  }, [searchParams]);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Resultater fra analysen
            </h2>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
            {result ? (
              <pre>{JSON.stringify(result, null, 2)}</pre>
            ) : (
              <p>Laster...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
