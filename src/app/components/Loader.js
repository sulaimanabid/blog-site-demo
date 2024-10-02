export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-600 border-t-transparent"></div>
      <span className="animate-pulse text-purple-600 mt-3 ml-2">
        Loading...
      </span>
    </div>
  );
}
