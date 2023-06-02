export default function Heading({name}) {
  return (
    <div className="flex w-full items-center m-2">
      <div className="h-1 basis-1/3 border-2 border-yellow-700"></div>
      <div className="font-extrabold basis-1/3 text-center text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{name}</div>
      <div className="h-1 border-2 basis-1/3 border-yellow-700"></div>
    </div>
  );
}
