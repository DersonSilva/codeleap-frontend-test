import React from "react";

type SkeletonProps = {
  width?: string;
  height?: string;
  rounded?: boolean;
  className?: string;
};

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  rounded = true,
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <div
        className={`absolute inset-0 
          ${rounded ? "rounded-lg" : ""}`}
        style={{
          background:
            "linear-gradient(90deg, rgba(200,200,200,0.2) 0%, rgba(220,220,220,0.5) 50%, rgba(200,200,200,0.2) 100%)",
          animation: "shimmer 1.5s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};
