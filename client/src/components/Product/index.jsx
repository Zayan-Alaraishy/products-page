export default function ProductCard({ product }) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow py-5 px-5 flex flex-col">
      <h5 className="text-xl font-semibold tracking-tight  text-black">
        {product.title}
      </h5>
      <p className="mb-auto break-words">{product.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-2xl font-bold  text-black">${product.price}</span>
        <h5
          href="/"
          className={`text-white bg-[#22D887] font-medium rounded-lg text-sm px-2 py-1 text-center`}
        >
          {product.rating}
        </h5>
      </div>
    </div>
  );
}
