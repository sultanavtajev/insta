"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("/api/analyse", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    // Use router.push with a URL string
    router.push(`/resultat?result=${encodeURIComponent(JSON.stringify(data))}`);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-6 pt-7">
      <div className="max-w-xl w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Bildeanalyse
          </h1>
          <p className="mt-2 text-muted-foreground md:text-xl">
            Last opp et bilde for å analysere det.
          </p>
        </div>
        <div className="bg-card rounded-lg border border-input p-6 space-y-4">
          <div className="flex items-center justify-center w-full">
            {imagePreview ? (
              <div className="flex flex-col items-center justify-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-48 rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground">Bildet er valgt</p>
              </div>
            ) : (
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-input rounded-lg cursor-pointer bg-background hover:bg-accent hover:border-accent-foreground transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadIcon className="h-10 w-10 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    Dra og slipp et bilde her eller klikk for å laste opp
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, GIF opp til 10MB
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
          <Button className="w-full" onClick={handleAnalyze} disabled={loading}>
            {loading ? "Laster..." : "Analyser bilde"}
          </Button>
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
              <div className="relative w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
