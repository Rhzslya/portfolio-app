"use client";

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TimelineItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#2c2c2c" highlightColor="#3d3d3d">
      <div className="flex flex-col  w-full border-2 border-amber-500 px-4 py-3 rounded-md background-main">
        <div className="mb-4 text-right">
          <Skeleton width={150} height={20} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex w-[110px] lg:w-[137px]">
            <Skeleton height={14} containerClassName="flex-1" />
          </div>
          <div className="flex w-[110px] lg:w-[137px] sm:mx-auto">
            <Skeleton height={14} containerClassName="flex-1" />
          </div>
          <div className="flex w-[110px] lg:w-[137px] sm:ml-auto">
            <Skeleton height={14} containerClassName="flex-1" />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default TimelineItemSkeleton;
