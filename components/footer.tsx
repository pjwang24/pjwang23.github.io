export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 bg-black border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-400">© {currentYear} Jane Doe. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Built with Next.js and Three.js</p>
      </div>
    </footer>
  )
}
