import { loadingSVG } from "./ui/svgs";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex size-full h-screen items-center justify-center">
      {loadingSVG}
      <h1 className="">Loading...</h1>
    </div>
  );
}
