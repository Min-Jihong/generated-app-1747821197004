import Link from 'next/link'

export default function Home() {
  const pages = ["LoginPage","ProductDetailPage"];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Generated App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((name) => (
          <Link
            key={name}
            href={`/${name.toLowerCase()}`}
            className="p-6 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{`${validComponents.pages[name].description}`}</p>
            <div className="flex flex-wrap gap-2">
              {validComponents.pages[name].features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {feature.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}