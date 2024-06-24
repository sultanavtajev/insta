"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";

function ResultComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const resultParam = searchParams.get("result");
    if (resultParam) {
      const parsedResult = JSON.parse(resultParam);
      if (parsedResult.analysis) {
        const formattedAnalysis = parsedResult.analysis
          .replace(/###/g, "")
          .replace(/\*\*/g, "")
          .replace(/\*/g, "")
          .replace(/- /g, "• ");
        setAnalysis(formattedAnalysis);
      } else {
        console.error("Ingen analyse funnet i resultatet");
      }
    }
  }, [searchParams]);

  const handleNewAnalysis = () => {
    router.push("/lastbilder"); // Oppdater denne ruten til riktig rute for opplastingssiden
  };

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
            {analysis ? (
              <div className="overflow-auto max-h-[70vh] px-4 py-5">
                <pre className="whitespace-pre-wrap break-words">
                  {analysis}
                </pre>
              </div>
            ) : (
              <p>Laster...</p>
            )}
          </div>
          <div className="px-4 py-5 sm:px-6">
          <Button className="w-full" onClick={handleNewAnalysis}>
            Analyser et nytt bilde{" "}
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <Suspense fallback={<div>Laster siden...</div>}>
      <ResultComponent />
    </Suspense>
  );
}
