import {
  Rocket,
  ShoppingCart,
  Globe,
  Layers,
  Server,
  Settings,
} from "lucide-react";

export default function AnimatedBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className} z-[-10]`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#6366F1] to-[#EC4899] opacity-90" />

      {/* Glass Blurred Shapes */}
      <div className="absolute top-[20%] left-[10%] w-80 h-80 bg-white/10 rounded-full backdrop-blur-2xl animate-pulse" />
      <div className="absolute bottom-[15%] right-[10%] w-96 h-96 bg-white/10 rounded-full backdrop-blur-2xl animate-pulse delay-200" />

      {/* Animated Icons */}
      <div className="absolute top-10 left-10">
        <Rocket className="h-12 w-12 text-white animate-bounce" />
      </div>

      <div className="absolute bottom-10 right-10">
        <ShoppingCart className="h-12 w-12 text-white animate-bounce" />
      </div>

      <div className="absolute top-[40%] left-[48%]">
        <Globe className="h-12 w-12 text-white animate-pulse opacity-50" />
      </div>

      <div className="absolute top-[30%] right-[20%]">
        <Layers className="h-12 w-12 text-white animate-ping" />
      </div>

      <div className="absolute top-[18%] right-[8%]">
        <Server className="h-12 w-12 text-white" />
      </div>

      <div className="absolute bottom-[10%] left-[30%]">
        <Settings className="h-12 w-12 text-white animate-spin-slow" />
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-pulse" />
      <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-pulse delay-200" />
    </div>
  );
}
