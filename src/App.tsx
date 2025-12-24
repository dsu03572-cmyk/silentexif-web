import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { useTheme } from "@/hooks/useTheme";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

export default function App() {
  const { theme } = useTheme();
  
  return (
    <div className={cn(`min-h-screen transition-colors duration-300 flex flex-col`, 
      theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    )}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={
          <div className="max-w-3xl mx-auto px-6 py-16 text-left">
            <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
            <p className="mb-6 text-gray-500 text-center">Last updated: December 2025</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Data Collection & Privacy</h2>
                <p><strong>No Personal Data Collection:</strong> Silent Exif does not collect, store, or transmit any of your personal information, photos, or metadata to any external servers. All photo processing and metadata modification are performed <strong>locally on your device</strong>.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Photo Library Access</h2>
                <p>The app requires access to your Photo Library to allow you to select, view, and edit photo metadata. We only read the files you explicitly choose to edit, and the modified versions are saved directly back to your library or files.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Offline Functionality</h2>
                <p>Silent Exif is designed to work entirely offline. Since no data is uploaded, your privacy is guaranteed by the security of your own iOS device.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
                <p>We do not use any third-party analytics or advertising SDKs that track your behavior or collect your data.</p>
              </section>

              <div className="pt-8 border-t border-gray-200 mt-8 text-sm text-gray-500 text-center">
                Questions? Contact us at: <strong>support@silentexif.com</strong>
              </div>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </div>
  );
}
